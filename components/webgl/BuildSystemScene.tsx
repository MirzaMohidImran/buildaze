"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const ACCENT = new THREE.Color("#2563eb");
const ACCENT_SOFT = new THREE.Color("#5b8def");
const WHITE_DIM = new THREE.Color("#3a3a42");

/** The five layers of the Buildaze build system, bottom to top. */
const LAYERS = [
  { id: "idea", size: 3.0, density: 4 },
  { id: "architecture", size: 3.4, density: 6 },
  { id: "code", size: 3.8, density: 8 },
  { id: "product", size: 3.4, density: 5 },
  { id: "scale", size: 3.0, density: 3 },
] as const;

const BASE_GAP = 0.78;

/** Line-segment grid (no triangulated diagonals) for one architectural layer. */
function gridGeometry(size: number, divisions: number): THREE.BufferGeometry {
  const half = size / 2;
  const step = size / divisions;
  const positions: number[] = [];
  for (let i = 0; i <= divisions; i++) {
    const p = -half + i * step;
    positions.push(-half, 0, p, half, 0, p); // rows
    positions.push(p, 0, -half, p, 0, half); // cols
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

/** Deterministic pseudo-random so server/client and re-renders agree. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface NodeSpec {
  position: [number, number, number];
  accent: boolean;
  scale: number;
}

function layerNodes(layerIndex: number, size: number, count: number): NodeSpec[] {
  const rand = seeded(layerIndex * 1000 + 7);
  const nodes: NodeSpec[] = [];
  for (let i = 0; i < count; i++) {
    const gx = Math.floor(rand() * 6) - 3;
    const gz = Math.floor(rand() * 6) - 3;
    nodes.push({
      position: [(gx / 6) * size, 0, (gz / 6) * size],
      accent: rand() > 0.55,
      scale: 0.05 + rand() * 0.05,
    });
  }
  return nodes;
}

function BuildSystem() {
  const group = useRef<THREE.Group>(null);
  const layerRefs = useRef<(THREE.Group | null)[]>([]);
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  const layers = useMemo(
    () =>
      LAYERS.map((layer, i) => ({
        ...layer,
        grid: gridGeometry(layer.size, 8),
        border: gridGeometry(layer.size, 1),
        nodes: layerNodes(i, layer.size * 0.9, layer.density),
        baseY: (i - (LAYERS.length - 1) / 2) * BASE_GAP,
      })),
    [],
  );

  // Vertical data lines connecting adjacent layers.
  const connections = useMemo(() => {
    const rand = seeded(42);
    const lines: { from: THREE.Vector3; to: THREE.Vector3 }[] = [];
    for (let i = 0; i < LAYERS.length - 1; i++) {
      const n = 2 + Math.floor(rand() * 2);
      for (let j = 0; j < n; j++) {
        const x = (rand() - 0.5) * 2.4;
        const z = (rand() - 0.5) * 2.4;
        lines.push({
          from: new THREE.Vector3(x, layers[i].baseY, z),
          to: new THREE.Vector3(x * 0.8, layers[i + 1].baseY, z * 0.8),
        });
      }
    }
    return lines;
  }, [layers]);

  useFrame((state, delta) => {
    if (!group.current) return;

    pointer.current.x = THREE.MathUtils.lerp(pointer.current.x, state.pointer.x, 0.04);
    pointer.current.y = THREE.MathUtils.lerp(pointer.current.y, state.pointer.y, 0.04);

    // Scroll progress through the hero (0 → 1 over one viewport height).
    const target = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    scroll.current = THREE.MathUtils.lerp(scroll.current, target, 0.08);

    const t = state.clock.elapsedTime;
    group.current.rotation.y = 0.55 + t * 0.07 + pointer.current.x * 0.22;
    group.current.rotation.x = 0.1 - pointer.current.y * 0.12;
    group.current.position.y = Math.sin(t * 0.5) * 0.06;

    // As the hero scrolls away the system separates into its layers and dissolves.
    const separation = 1 + scroll.current * 1.6;
    layerRefs.current.forEach((layer, i) => {
      if (!layer) return;
      layer.position.y = layers[i].baseY * separation;
      layer.rotation.y = Math.sin(t * 0.22 + i * 0.9) * 0.045 + scroll.current * i * 0.12;
    });
    group.current.scale.setScalar(1 - scroll.current * 0.12);

    // Frame-rate independent damping already handled via lerp; keep delta referenced.
    void delta;
  });

  return (
    <group ref={group} rotation={[0.12, 0.5, 0]}>
      {layers.map((layer, i) => (
        <group
          key={layer.id}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          position={[0, layer.baseY, 0]}
        >
          <lineSegments geometry={layer.grid}>
            <lineBasicMaterial color={WHITE_DIM} transparent opacity={0.5} />
          </lineSegments>
          <lineSegments geometry={layer.border} scale={1.001}>
            <lineBasicMaterial color={i === 2 ? ACCENT : ACCENT_SOFT} transparent opacity={i === 2 ? 0.9 : 0.35} />
          </lineSegments>
          {layer.nodes.map((node, j) => (
            <mesh key={j} position={node.position} scale={node.scale}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial
                color={node.accent ? ACCENT : new THREE.Color("#8a8a94")}
                transparent
                opacity={node.accent ? 0.95 : 0.55}
              />
            </mesh>
          ))}
        </group>
      ))}

      {connections.map((line, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([line.from, line.to]);
        return (
          <lineSegments key={i} geometry={geometry}>
            <lineBasicMaterial color={ACCENT} transparent opacity={0.28} />
          </lineSegments>
        );
      })}
    </group>
  );
}

/**
 * The Buildaze hero environment: an abstract modular build system —
 * five wireframe layers (idea → architecture → code → product → scale)
 * connected by data lines, responding to cursor and scroll.
 */
export default function BuildSystemScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 2.4, 9.4], fov: 38 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden
    >
      <BuildSystem />
    </Canvas>
  );
}
