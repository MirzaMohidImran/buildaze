/**
 * Motion from the incoming homepage HTML, scoped under `.incoming-home`.
 * The existing hero, navbar, cursor, and Lenis instance are left alone.
 */

type Marquee = { el: HTMLElement; half: number; x: number; dir: number };
type LogoSlide = { track: HTMLElement; total: number; x: number; pause: boolean };
type Session = { connect: () => () => void };

const sessions = new WeakMap<HTMLElement, Session>();

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const radiusOf = (element: Element) =>
  parseFloat(getComputedStyle(element).borderTopLeftRadius) || 0;

function splitWords(element: HTMLElement, base: number, step: number) {
  if (element.querySelector(".w")) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  let index = 0;
  nodes.forEach((node) => {
    if (!node.textContent?.trim()) return;
    const fragment = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part.trim()) {
        fragment.append(part);
        return;
      }
      const word = document.createElement("span");
      word.className = "w";
      const glyph = document.createElement("span");
      glyph.textContent = part;
      glyph.style.transitionDelay = `${base + index * step}ms`;
      index += 1;
      word.append(glyph);
      fragment.append(word);
    });
    node.replaceWith(fragment);
  });
}

function goTo(target: HTMLElement | number, offset = 0) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}

function build(root: HTMLElement): Session {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  root.classList.add("is-motion");

  const sections = [...root.querySelectorAll<HTMLElement>("section")];
  const byText = (label: string) => sections.find((section) => section.textContent?.includes(label));
  const products = root.querySelector<HTMLElement>("#products");
  const process = root.querySelector<HTMLElement>("#process");
  const footer = root.querySelector<HTMLElement>("footer");

  sections.forEach((section) => {
    if (section === products) return;
    if (!section.style.position) section.style.position = "relative";
    section.style.zIndex = "1";
  });
  if (footer) {
    footer.style.position = "relative";
    footer.style.zIndex = "1";
  }

  let bar = root.querySelector<HTMLElement>(".incoming-progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "incoming-progress";
    bar.setAttribute("aria-hidden", "true");
    root.append(bar);
  }

  const hero = document.querySelector<HTMLElement>("#top");
  const dotSections = [
    ...(hero ? [hero] : []),
    ...sections.filter((section) => section.id !== "band"),
  ];
  let dots = root.querySelector<HTMLElement>(".incoming-dots");
  if (!dots) {
    dots = document.createElement("nav");
    dots.className = "incoming-dots";
    dots.setAttribute("aria-label", "Page sections");
    dotSections.forEach((section, index) => {
      const link = document.createElement("a");
      link.href = `#section-${index}`;
      const label =
        index === 0
          ? "Home"
          : (
              [...section.querySelectorAll("p")].find((paragraph) => {
                const text = paragraph.textContent?.trim() ?? "";
                return text.length > 2 && text.length < 32;
              })?.textContent ?? "Section"
            ).trim();
      link.innerHTML = `<span>${label}</span>`;
      link.setAttribute("aria-label", label);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        goTo(section, index ? -80 : 0);
      });
      dots?.append(link);
    });
    root.append(dots);
  }
  const dotLinks = [...dots.querySelectorAll("a")];

  const marquees: Marquee[] = [];
  const band = root.querySelector<HTMLElement>("#band .band");
  if (band && !band.querySelector(".mq")) {
    const text = (band.textContent ?? "").trim().replace(/\s*\/\s*$/, "");
    band.innerHTML = `<div class="mq" style="display:inline-block;white-space:nowrap;will-change:transform">${text} / ${text} / </div>`;
    const el = band.querySelector<HTMLElement>(".mq");
    if (el) marquees.push({ el, half: el.scrollWidth / 2, x: -el.scrollWidth / 2, dir: -1 });
  }

  const setPar = (element: HTMLElement | null | undefined, amount: number, translate = false) => {
    if (!element || element.dataset.par) return;
    element.dataset.par = String(amount);
    if (translate) element.dataset.pp = "t";
  };
  const circle = (scope: ParentNode | null | undefined) =>
    scope
      ? [...scope.querySelectorAll<HTMLElement>("div")].find((node) => {
          const style = getComputedStyle(node);
          return (
            style.position === "absolute" &&
            parseFloat(style.borderTopLeftRadius) >= 100 &&
            node.offsetWidth > 150
          );
        })
      : undefined;

  const services = root.querySelector("#services .sv-grid");
  if (services) setPar(circle(services), 0.14);
  const study = byText("Case study");
  if (study) {
    setPar(circle(study), 0.12);
    const visual = [...study.querySelectorAll<HTMLElement>("div")].find(
      (node) => radiusOf(node) >= 30 && node.offsetHeight > 400,
    );
    setPar(visual, 0.04);
  }
  const team = byText("The team");
  if (team) {
    const grid = [...team.querySelectorAll<HTMLElement>("div")].find(
      (node) => getComputedStyle(node).display === "grid" && node.children.length === 4,
    );
    if (grid) {
      [...grid.children].forEach((child, index) =>
        setPar(child as HTMLElement, index % 2 ? 0.07 : -0.05),
      );
    }
  }
  const pricing = byText("Ways to work");
  if (pricing) {
    const row = [...pricing.querySelectorAll<HTMLElement>("div")].find(
      (node) =>
        getComputedStyle(node).display === "flex" &&
        node.children.length === 3 &&
        node.offsetWidth > 900,
    );
    if (row) {
      [...row.children].forEach((child, index) =>
        setPar(child as HTMLElement, [0.05, 0, -0.05][index] ?? 0),
      );
    }
  }
  const loveSection = byText("Client love");
  if (loveSection) {
    const grid = [...loveSection.querySelectorAll<HTMLElement>("div")].find(
      (node) => getComputedStyle(node).display === "grid" && node.children.length === 2,
    );
    const column = grid?.children[1];
    if (column) {
      [...column.children].forEach((child, index) =>
        setPar(child as HTMLElement, index ? -0.04 : 0.04, true),
      );
    }
  }
  const work = byText("Selected work");
  if (work) {
    const stage = [...work.querySelectorAll<HTMLElement>("div")].find(
      (node) => getComputedStyle(node).position === "sticky",
    );
    if (stage) {
      [...stage.children].forEach((child, index) =>
        setPar(child as HTMLElement, [-0.03, 0.03, 0][index] ?? 0, true),
      );
    }
  }
  if (products) {
    [...products.querySelectorAll<HTMLElement>("div")]
      .filter((node) => {
        const radius = radiusOf(node);
        return radius >= 18 && radius < 28 && node.offsetHeight >= 250 && node.offsetHeight <= 300;
      })
      .forEach((panel) => {
        const inner = panel.lastElementChild as HTMLElement | null;
        if (inner && getComputedStyle(inner).position !== "absolute") setPar(inner, 0.05, true);
      });
  }
  const bigmark = root.querySelector<HTMLElement>(".bigmark");
  if (bigmark) setPar(bigmark, -0.07);
  const parallax = [...root.querySelectorAll<HTMLElement>("[data-par]")];

  const groups = new Map<HTMLElement, HTMLElement[]>();
  const mark = (element: HTMLElement) => {
    if (element.hasAttribute("data-rv")) return;
    const parent = element.parentElement;
    if (!parent) return;
    const list = groups.get(parent) ?? [];
    list.push(element);
    groups.set(parent, list);
    element.setAttribute("data-rv", "");
    element.style.setProperty("--d", `${Math.min(list.length - 1, 7) * 90}ms`);
  };
  const wordHeadings: HTMLElement[] = [];
  const scrubHeadings: HTMLElement[] = [];
  if (!root.querySelector("[data-rv]")) {
    [...sections, ...(footer ? [footer] : [])].forEach((section) => {
      const all = [...section.querySelectorAll<HTMLElement>("*")].filter(
        (element) =>
          !element.closest("svg") && element.dataset.pp !== "t" && !element.closest("[data-pp='t']"),
      );
      const cards = all.filter((element) => {
        if (radiusOf(element) < 24) return false;
        const box = element.getBoundingClientRect();
        return box.width > 170 && box.height > 100 && box.width < 1100;
      });
      const top = cards.filter((card) => !cards.some((other) => other !== card && other.contains(card)));
      const insideTop = (element: HTMLElement) => top.some((card) => card.contains(element));
      let items = [...top];
      all.forEach((element) => {
        const tag = element.tagName;
        if (tag === "H2" && !element.closest("details")) {
          if (insideTop(element)) return;
          if (section.id === "about" || section.id === "contact") {
            element.classList.add("sc");
            scrubHeadings.push(element);
          } else wordHeadings.push(element);
          return;
        }
        if (insideTop(element)) return;
        if (
          tag === "H3" ||
          tag === "P" ||
          tag === "DETAILS" ||
          (tag === "A" && radiusOf(element) >= 100)
        ) {
          items.push(element);
          return;
        }
        const style = getComputedStyle(element);
        if (
          style.borderTopStyle === "solid" &&
          parseFloat(style.borderTopWidth) === 1 &&
          element.offsetHeight > 60 &&
          element.offsetWidth > 280 &&
          tag !== "A"
        ) {
          items.push(element);
        }
      });
      items = items.filter((item) => !items.some((other) => other !== item && other.contains(item)));
      items.forEach(mark);
      top.forEach((card) => {
        if (section.id !== "contact" && !card.querySelector("details, textarea")) card.classList.add("hv");
      });
    });
    groups.forEach((list) => {
      const count = list.length;
      list.forEach((element, index) => {
        const empty = !element.textContent?.trim() && element.offsetHeight > 120;
        let variant = "up";
        if (empty) variant = "clip";
        else if (count === 2) variant = index ? "right" : "left";
        else if (count === 3) variant = ["left", "up", "right"][index] ?? "up";
        else if (count >= 4 && count <= 6) variant = ["up", "zoom", "zoom", "up", "zoom", "up"][index % 6] ?? "up";
        else if (element.tagName === "P" || element.tagName === "H3") variant = "blur";
        element.setAttribute("data-rv", variant);
      });
    });
    wordHeadings.forEach((heading) => {
      splitWords(heading, 0, 70);
      heading.classList.add("sw");
    });
    scrubHeadings.forEach((heading) => splitWords(heading, 0, 0));
  }

  root.querySelectorAll("a").forEach((link) => {
    if (radiusOf(link) >= 100 && link.getBoundingClientRect().height >= 40) link.classList.add("pill");
  });
  root.querySelectorAll<HTMLElement>("#projects a").forEach((link) => {
    link.dataset.cursor = "View";
  });
  const insights = byText("Latest thinking");
  insights?.querySelectorAll("a").forEach((link) => {
    if (link.querySelector("h3")) link.dataset.cursor = "Read";
  });
  products?.querySelectorAll<HTMLElement>("div").forEach((panel) => {
    if (radiusOf(panel) >= 30 && panel.offsetHeight > 400) {
      panel.dataset.cursor = "Explore";
      panel.classList.add("pc");
    }
  });
  root.querySelector("#contact a")?.classList.add("ring");
  if (bigmark && !bigmark.classList.contains("bm")) {
    bigmark.innerHTML = [...bigmark.textContent ?? ""]
      .map(
        (character, index) =>
          `<span style="display:inline-block;transition-delay:${index * 80}ms">${character}</span>`,
      )
      .join("");
    bigmark.classList.add("bm");
  }

  const rail = process
    ? [...process.querySelectorAll<HTMLElement>("div")].find((node) => {
        const style = getComputedStyle(node);
        return style.position === "absolute" && parseFloat(style.width) === 2;
      })
    : undefined;
  const stack: HTMLElement[] = [];
  if (rail?.parentElement) {
    rail.style.transformOrigin = "top";
    rail.style.opacity = "0.5";
    stack.push(
      ...[...rail.parentElement.children].filter((child): child is HTMLElement => child !== rail),
    );
  }

  let testimonialIndex = 0;
  let testimonialStep: ((direction: number) => void) | null = null;
  if (loveSection) {
    const quotes = [...loveSection.querySelectorAll("p")].filter(
      (paragraph) => (paragraph.textContent?.trim().length ?? 0) > 40,
    );
    const cards = quotes
      .map((quote) => {
        let node: HTMLElement | null = quote.parentElement;
        while (node && node !== loveSection) {
          if (radiusOf(node) >= 28) return node;
          node = node.parentElement;
        }
        return null;
      })
      .filter((card): card is HTMLElement => Boolean(card));
    if (cards.length === 3) {
      const slots = cards.map((card) => {
        const quote = [...card.querySelectorAll("p")].find(
          (paragraph) => (paragraph.textContent?.trim().length ?? 0) > 40,
        );
        const name = [...card.querySelectorAll<HTMLElement>("div")].find((node) => {
          if (node.children.length > 0) return false;
          const style = getComputedStyle(node);
          return parseFloat(style.fontWeight) >= 600 && parseFloat(style.fontSize) <= 17;
        });
        return { quote, name, role: name?.nextElementSibling as HTMLElement | null };
      });
      const data = slots.map((slot) => ({
        quote: slot.quote?.textContent?.trim().replace(/^[\u201c"]|[\u201d"]$/g, "") ?? "",
        name: slot.name?.textContent ?? "",
        role: slot.role?.textContent ?? "",
      }));
      const count = [...loveSection.querySelectorAll("span")].find((span) =>
        /^\d\d \/ \d\d$/.test(span.textContent?.trim() ?? ""),
      );
      slots.forEach((slot) => {
        slot.quote?.classList.add("tx");
        slot.name?.classList.add("tx");
        slot.role?.classList.add("tx");
      });
      const render = () => {
        slots.forEach((slot, index) => {
          const item = data[index];
          if (!item) return;
          if (slot.quote) slot.quote.textContent = item.quote;
          if (slot.name) slot.name.textContent = item.name;
          if (slot.role) slot.role.textContent = item.role;
        });
      };
      testimonialStep = (direction) => {
        const nodes = slots.flatMap((slot) =>
          [slot.quote, slot.name, slot.role].filter((node): node is HTMLElement => Boolean(node)),
        );
        nodes.forEach((node) => node.classList.add("out"));
        window.setTimeout(() => {
          if (direction > 0) {
            const first = data.shift();
            if (first) data.push(first);
          } else {
            const last = data.pop();
            if (last) data.unshift(last);
          }
          testimonialIndex = (testimonialIndex + direction + 3) % 3;
          render();
          if (count) count.textContent = `0${testimonialIndex + 1} / 03`;
          nodes.forEach((node) => node.classList.remove("out"));
        }, 380);
      };
    }
  }

  let projectShow: ((index: number) => void) | null = null;
  let projectHover = false;
  let projectIndex = 0;
  const projectRows: HTMLElement[] = [];
  if (work) {
    const rows = [...work.querySelectorAll<HTMLAnchorElement>("a")].filter(
      (anchor) => anchor.children.length === 3 && anchor.children[2].getAttribute("aria-hidden") === "true",
    );
    const stage = [...work.querySelectorAll<HTMLElement>("div")].find(
      (node) => getComputedStyle(node).position === "sticky" && node.children.length === 3,
    );
    if (rows.length >= 2 && stage) {
      projectRows.push(...rows);
      const front = stage.children[2] as HTMLElement;
      const info = [...front.querySelectorAll<HTMLElement>("div")].find(
        (node) => node.children.length === 2 && getComputedStyle(node).position === "absolute",
      );
      const tag = [...front.querySelectorAll<HTMLElement>("span")].find(
        (node) => getComputedStyle(node).position === "absolute",
      );
      const name = info?.children[0] as HTMLElement | undefined;
      const line = info?.children[1] as HTMLElement | undefined;
      const activeIndex = Math.max(
        0,
        rows.findIndex((row) => getComputedStyle(row).backgroundColor !== "rgba(0, 0, 0, 0)"),
      );
      const idleIndex = rows.findIndex((_, index) => index !== activeIndex);
      const grab = (row: HTMLAnchorElement) => {
        const title = row.children[1].children[0] as HTMLElement;
        const arrow = row.children[2] as HTMLElement;
        return {
          background: getComputedStyle(row).backgroundColor,
          title: getComputedStyle(title).color,
          arrowBackground: getComputedStyle(arrow).backgroundColor,
          arrowColor: getComputedStyle(arrow).color,
          arrowBorder: getComputedStyle(arrow).borderTopColor,
        };
      };
      const activeLook = grab(rows[activeIndex]);
      const idleLook = grab(rows[idleIndex] ?? rows[0]);
      rows.forEach((row) => {
        row.classList.add("pj-r");
        row.children[1].children[0].classList.add("pj-t");
        row.children[2].classList.add("pj-a");
      });
      [tag, name, line].forEach((node) => node?.classList.add("tx"));
      projectIndex = activeIndex;
      const paint = (index: number) => {
        rows.forEach((row, rowIndex) => {
          const look = rowIndex === index ? activeLook : idleLook;
          const title = row.children[1].children[0] as HTMLElement;
          const arrow = row.children[2] as HTMLElement;
          row.style.backgroundColor = look.background;
          title.style.color = look.title;
          arrow.style.backgroundColor = look.arrowBackground;
          arrow.style.color = look.arrowColor;
          arrow.style.borderColor = look.arrowBorder;
        });
      };
      projectShow = (index) => {
        if (index === projectIndex || !rows[index]) return;
        projectIndex = index;
        paint(index);
        [tag, name, line].forEach((node) => node?.classList.add("out"));
        front.animate?.(
          [
            { scale: 0.96, rotate: "-1.5deg" },
            { scale: 1, rotate: "0deg" },
          ],
          { duration: 600, easing: "cubic-bezier(.2,.7,.2,1)" },
        );
        window.setTimeout(() => {
          const row = rows[index];
          const title = row.children[1].children[0].textContent ?? "";
          const meta = row.children[1].children[1].textContent ?? "";
          if (name) name.textContent = title;
          if (line) line.textContent = meta;
          if (tag) tag.textContent = meta.split(" · ")[0] ?? meta;
          [tag, name, line].forEach((node) => node?.classList.remove("out"));
        }, 260);
      };
    }
  }

  let logos: LogoSlide | null = null;
  const trusted = byText("Trusted by teams at");
  const logoGrid = trusted
    ? [...trusted.querySelectorAll<HTMLElement>("div")].find(
        (node) => node.children.length === 6 && getComputedStyle(node).display === "grid",
      )
    : undefined;
  if (logoGrid && !logoGrid.querySelector("[data-logo-track]")) {
    const kids = [...logoGrid.children] as HTMLElement[];
    const width = kids[0]?.offsetWidth ?? 0;
    const gap = parseFloat(getComputedStyle(logoGrid).columnGap) || 20;
    if (width > 40) {
      const track = document.createElement("div");
      track.dataset.logoTrack = "true";
      track.style.cssText = `display:flex;gap:${gap}px;width:max-content;will-change:transform`;
      [...kids, ...kids.map((kid) => kid.cloneNode(true) as HTMLElement)].forEach((kid) => {
        kid.style.flex = `0 0 ${width}px`;
        kid.style.width = `${width}px`;
        track.append(kid);
      });
      logoGrid.style.display = "block";
      logoGrid.style.overflow = "hidden";
      logoGrid.replaceChildren(track);
      logos = { track, total: kids.length * (width + gap), x: 0, pause: false };
    }
  } else if (logoGrid) {
    const track = logoGrid.querySelector<HTMLElement>("[data-logo-track]");
    if (track) {
      const total = track.scrollWidth / 2;
      logos = { track, total, x: 0, pause: false };
    }
  }

  const productCards = products ? [...products.querySelectorAll<HTMLElement>(".pc")] : [];

  return {
    connect() {
      const cleanups: Array<() => void> = [];
      const listen = (target: EventTarget, type: string, handler: EventListener, options?: AddEventListenerOptions) => {
        target.addEventListener(type, handler, options);
        cleanups.push(() => target.removeEventListener(type, handler, options));
      };

      const layoutPins = () => {
        if (!products) return;
        if (window.innerWidth <= 900) {
          products.style.position = "";
          products.style.top = "";
          return;
        }
        products.style.position = "sticky";
        products.style.top = `${Math.min(0, window.innerHeight - products.offsetHeight)}px`;
        products.style.zIndex = "0";
      };
      const layoutStack = () => {
        stack.forEach((card, index) => {
          if (window.innerWidth <= 900) {
            card.style.position = "";
            card.style.top = "";
            return;
          }
          card.style.position = "sticky";
          card.style.top = `${120 + index * 18}px`;
        });
      };
      layoutPins();
      layoutStack();

      products?.querySelectorAll<HTMLElement>("span").forEach((bar) => {
        if (bar.style.animation) return;
        const style = getComputedStyle(bar);
        const width = parseFloat(style.width);
        const height = parseFloat(style.height);
        if (Math.abs(width - 6) < 0.5 && height >= 10) {
          const duration = (0.7 + Math.random() * 0.9).toFixed(2);
          bar.style.animation = `incoming-wave ${duration}s ease-in-out infinite alternate`;
          bar.style.animationDelay = `${(-Math.random() * 1.5).toFixed(2)}s`;
          bar.dataset.d = duration;
        } else if (Math.abs(width - 8) < 0.5 && Math.abs(height - 8) < 0.5 && parseFloat(style.borderTopLeftRadius) >= 4) {
          bar.style.animation = "incoming-pulse 1.2s ease-in-out infinite";
          bar.style.animationDelay = `${(-Math.random()).toFixed(2)}s`;
        }
      });

      const reveal = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            element.classList.add("in");
            reveal.unobserve(element);
            window.setTimeout(() => element.style.removeProperty("--d"), 2400);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
      );
      const headingReveal = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            headingReveal.unobserve(entry.target);
          });
        },
        { threshold: 0.35 },
      );
      root.querySelectorAll<HTMLElement>("[data-rv]").forEach((element) => reveal.observe(element));
      wordHeadings.forEach((heading) => headingReveal.observe(heading));
      if (bigmark) headingReveal.observe(bigmark);
      cleanups.push(() => {
        reveal.disconnect();
        headingReveal.disconnect();
      });

      const counters = [...root.querySelectorAll<HTMLElement>("*")].filter((element) => {
        if (element.children.length > 0) return false;
        const text = element.textContent?.trim() ?? "";
        return /^\+?[1-9]\d*(\.\d+)?\s?(\+|%|x|k)?$/i.test(text) && parseFloat(getComputedStyle(element).fontSize) >= 40;
      });
      const counterWatch = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            counterWatch.unobserve(element);
            const match = element.textContent?.trim().match(/^(\+?)([\d,.]+)(.*)$/);
            if (!match) return;
            const prefix = match[1] ?? "";
            const end = parseFloat(match[2].replace(/,/g, ""));
            const decimals = (match[2].split(".")[1] ?? "").length;
            const suffix = match[3] ?? "";
            const started = performance.now();
            const tick = (now: number) => {
              const progress = clamp((now - started) / 1600, 0, 1);
              const value = end * (1 - (1 - progress) ** 4);
              element.textContent = prefix + value.toFixed(decimals) + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.6 },
      );
      counters.forEach((counter) => counterWatch.observe(counter));
      cleanups.push(() => counterWatch.disconnect());

      let testimonialLock = false;
      if (loveSection && testimonialStep) {
        const step = testimonialStep;
        const next = loveSection.querySelector('button[aria-label^="Next"]');
        const previous = loveSection.querySelector('button[aria-label^="Previous"]');
        if (next) listen(next, "click", () => step(1));
        if (previous) listen(previous, "click", () => step(-1));
        let startX: number | null = null;
        listen(loveSection, "pointerdown", (event) => {
          startX = (event as PointerEvent).clientX;
        });
        listen(loveSection, "pointerup", (event) => {
          if (startX === null) return;
          const delta = (event as PointerEvent).clientX - startX;
          startX = null;
          if (Math.abs(delta) > 60) (delta < 0 ? next : previous)?.dispatchEvent(new Event("click"));
        });
        loveSection.style.touchAction = "pan-y";
      }

      projectRows.forEach((row, index) => {
        const enter = () => {
          projectHover = true;
          projectShow?.(index);
        };
        const leave = () => {
          projectHover = false;
        };
        const click = (event: Event) => {
          event.preventDefault();
          projectShow?.(index);
        };
        listen(row, "mouseenter", enter);
        listen(row, "focus", enter);
        listen(row, "mouseleave", leave);
        listen(row, "click", click);
      });

      if (logos) {
        const slide = logos;
        listen(slide.track.parentElement ?? root, "mouseenter", () => {
          slide.pause = true;
        });
        listen(slide.track.parentElement ?? root, "mouseleave", () => {
          slide.pause = false;
        });
      }

      root.querySelectorAll<HTMLElement>(".hv").forEach((card) => {
        listen(card, "mouseenter", () => {
          [...(card.parentElement?.children ?? [])].forEach((sibling) => {
            if (sibling !== card && sibling.classList.contains("hv")) sibling.classList.add("dim");
          });
        });
        listen(card, "mouseleave", () => {
          [...(card.parentElement?.children ?? [])].forEach((sibling) => sibling.classList.remove("dim"));
        });
      });

      listen(root, "pointerdown", (event) => {
        const pointer = event as PointerEvent;
        const target = pointer.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("a.pill:not(.ring), button");
        if (!(button instanceof HTMLElement) || !root.contains(button)) return;
        const box = button.getBoundingClientRect();
        const size = Math.max(box.width, box.height) * 2;
        const ripple = document.createElement("span");
        const style = getComputedStyle(button);
        if (style.position === "static") button.style.position = "relative";
        button.style.overflow = "hidden";
        const channels = style.backgroundColor.match(/\d+/g)?.map(Number) ?? [255, 255, 255];
        const dark = (channels[0] ?? 255) * 0.3 + (channels[1] ?? 255) * 0.6 + (channels[2] ?? 255) * 0.1 < 110;
        ripple.className = "rip";
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${pointer.clientX - box.left - size / 2}px;top:${pointer.clientY - box.top - size / 2}px;background:${dark ? "rgba(247,248,242,.28)" : "rgba(21,23,19,.16)"}`;
        button.append(ripple);
        window.setTimeout(() => ripple.remove(), 700);
      });

      root.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
        if (link.classList.contains("pill") || link.classList.contains("fl") || link.dataset.cursor) return;
        const text = link.textContent?.trim() ?? "";
        if (text.length > 3 && link.offsetHeight <= 48 && radiusOf(link) < 10 && !link.querySelector("h3")) {
          link.classList.add("ul");
        }
      });

      if (fine) {
        productCards.forEach((card) => {
          card.style.transition = "transform .4s cubic-bezier(.2,.7,.2,1)";
          listen(card, "mousemove", (event) => {
            const pointer = event as MouseEvent;
            const box = card.getBoundingClientRect();
            const x = (pointer.clientX - box.left) / box.width - 0.5;
            const y = (pointer.clientY - box.top) / box.height - 0.5;
            card.style.transform = `perspective(1000px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
          });
          listen(card, "mouseleave", () => {
            card.style.transform = "";
          });
        });
        root.querySelectorAll<HTMLElement>("#services .sv-grid > div").forEach((card) => {
          card.style.transition = "transform .4s cubic-bezier(.2,.7,.2,1)";
          listen(card, "mousemove", (event) => {
            const pointer = event as MouseEvent;
            const box = card.getBoundingClientRect();
            const x = (pointer.clientX - box.left) / box.width - 0.5;
            const y = (pointer.clientY - box.top) / box.height - 0.5;
            card.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
          });
          listen(card, "mouseleave", () => {
            card.style.transform = "";
          });
        });
        root.querySelectorAll<HTMLElement>("a.pill").forEach((pill) => {
          listen(pill, "mousemove", (event) => {
            const pointer = event as MouseEvent;
            const box = pill.getBoundingClientRect();
            const x = pointer.clientX - (box.left + box.width / 2);
            const y = pointer.clientY - (box.top + box.height / 2);
            pill.style.transform = `translate(${(x * 0.24).toFixed(1)}px, ${(y * 0.32).toFixed(1)}px)`;
          });
          listen(pill, "mouseleave", () => {
            pill.style.transform = "";
          });
        });
      }

      productCards[0] &&
        (() => {
          const row = [...productCards[0].querySelectorAll<HTMLElement>("div")].find(
            (node) =>
              node.children.length === 3 &&
              [...node.children].every(
                (child) => child.children.length === 2 && getComputedStyle(child).flexGrow === "1",
              ),
          );
          if (!row) return;
          const tiles = [...row.children].map((child) => child.children[0] as HTMLElement);
          tiles.forEach((tile) => {
            tile.classList.add("tl");
            listen(tile, "click", () => {
              const selected = tile.classList.contains("sel");
              tiles.forEach((item) => item.classList.remove("sel"));
              if (!selected) tile.classList.add("sel");
            });
          });
        })();

      productCards[1] &&
        (() => {
          const toggles = [...productCards[1].querySelectorAll<HTMLElement>("span")].filter((node) => {
            const style = getComputedStyle(node);
            return parseFloat(style.width) === 36 && parseFloat(style.height) === 20;
          });
          const onToggle = toggles.find((node) => node.firstElementChild instanceof HTMLElement && node.firstElementChild.style.right);
          const offToggle = toggles.find(
            (node) => node.firstElementChild instanceof HTMLElement && !node.firstElementChild.style.right,
          );
          const onBackground = onToggle ? getComputedStyle(onToggle).backgroundColor : null;
          const offBackground = offToggle ? getComputedStyle(offToggle).backgroundColor : "rgb(211,214,198)";
          toggles.forEach((toggle) => {
            const knob = toggle.firstElementChild;
            if (!(knob instanceof HTMLElement)) return;
            const on = Boolean(knob.style.right);
            knob.style.left = "auto";
            knob.style.right = "2px";
            knob.classList.add("knob");
            toggle.classList.add("tog");
            toggle.dataset.on = on ? "1" : "0";
            knob.style.translate = on ? "0 0" : "-16px 0";
            listen(toggle, "click", () => {
              const enabled = toggle.dataset.on === "1";
              toggle.dataset.on = enabled ? "0" : "1";
              knob.style.translate = enabled ? "-16px 0" : "0 0";
              if (onBackground) toggle.style.backgroundColor = enabled ? offBackground : onBackground;
            });
          });
        })();

      let chatTimer = 0;
      productCards[2] &&
        (() => {
          const column = [...productCards[2].querySelectorAll<HTMLElement>("div")].find(
            (node) => node.children.length === 3 && getComputedStyle(node).flexDirection === "column",
          );
          if (!column) return;
          const bubbles = [...column.children] as HTMLElement[];
          bubbles.forEach((bubble) => bubble.classList.add("chx"));
          const run = () => {
            bubbles.forEach((bubble) => bubble.classList.remove("on"));
            window.setTimeout(() => bubbles[0]?.classList.add("on"), 300);
            window.setTimeout(() => bubbles[1]?.classList.add("on"), 1400);
            window.setTimeout(() => bubbles[2]?.classList.add("on"), 2500);
          };
          run();
          chatTimer = window.setInterval(run, 6200);
          cleanups.push(() => window.clearInterval(chatTimer));
        })();

      productCards[3] &&
        (() => {
          const bars = [...productCards[3].querySelectorAll<HTMLElement>("span")].filter((node) =>
            node.style.animation.includes("incoming-wave"),
          );
          if (!bars.length) return;
          const group = bars[0].parentElement;
          const mic = group?.nextElementSibling;
          bars.forEach((bar) => {
            const match = bar.style.animation.match(/([\d.]+)s/);
            bar.dataset.d = match?.[1] ?? "1";
          });
          const setSpeed = (factor: number) => {
            bars.forEach((bar) => {
              bar.style.animationDuration = `${(parseFloat(bar.dataset.d ?? "1") * factor).toFixed(2)}s`;
            });
          };
          let listening = false;
          listen(productCards[3], "mouseenter", () => setSpeed(0.55));
          listen(productCards[3], "mouseleave", () => setSpeed(listening ? 0.3 : 1));
          if (mic instanceof HTMLElement) {
            mic.classList.add("mic");
            listen(mic, "click", () => {
              listening = !listening;
              mic.classList.toggle("mic-on", listening);
              bars.forEach((bar) => {
                bar.style.animationName = listening ? "incoming-wave2" : "incoming-wave";
              });
              setSpeed(listening ? 0.3 : 1);
            });
          }
        })();

      const tracker = process
        ? [...process.querySelectorAll<HTMLElement>("div")].filter((node) => {
            const dot = node.children[0];
            return (
              node.children.length === 2 &&
              dot instanceof HTMLElement &&
              dot.tagName === "SPAN" &&
              parseFloat(getComputedStyle(dot).width) === 12
            );
          })
        : [];
      tracker.forEach((item, index) => {
        item.style.cursor = "pointer";
        listen(item, "click", () => {
          const card = stack[index];
          if (card) goTo(card, -150);
        });
      });

      listen(root, "click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const link = target.closest("a");
        if (!(link instanceof HTMLAnchorElement)) return;
        const raw = link.getAttribute("href") ?? "";
        const hash = raw.startsWith("#") ? raw : raw.startsWith("/#") ? raw.slice(1) : "";
        if (!hash) return;
        if (hash === "#") {
          event.preventDefault();
          if (link.id === "totop") goTo(0);
          return;
        }
        const destination = document.querySelector(hash);
        if (!(destination instanceof HTMLElement)) return;
        event.preventDefault();
        goTo(destination, -80);
      });

      let lastY = window.scrollY;
      let ticking = false;
      let trackerNodes: HTMLElement[] | null = null;
      const frame = () => {
        ticking = false;
        const y = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.transform = `scaleX(${height > 0 ? y / height : 0})`;
        lastY = y;
        if (loveSection && testimonialStep) {
          const box = loveSection.getBoundingClientRect();
          const progress = clamp(
            (window.innerHeight * 0.8 - box.top) / (box.height * 0.9 + window.innerHeight * 0.1),
            0,
            0.999,
          );
          const target = Math.floor(progress * 3);
          if (!testimonialLock && target !== testimonialIndex && box.top < window.innerHeight && box.bottom > 0) {
            const direction = (target - testimonialIndex + 3) % 3;
            testimonialStep(direction === 1 ? 1 : -1);
            testimonialLock = true;
            window.setTimeout(() => {
              testimonialLock = false;
            }, 900);
          }
        }
        if (projectShow && !projectHover && projectRows.length) {
          const first = projectRows[0].getBoundingClientRect();
          const last = projectRows[projectRows.length - 1].getBoundingClientRect();
          const progress = clamp(
            (window.innerHeight * 0.55 - first.top) / (last.bottom - first.top + window.innerHeight * 0.1),
            0,
            0.999,
          );
          const index = Math.floor(progress * projectRows.length);
          if (first.top < window.innerHeight && last.bottom > 0 && index !== projectIndex) projectShow(index);
        }
        let current = 0;
        dotSections.forEach((section, index) => {
          if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) current = index;
        });
        dotLinks.forEach((link, index) => link.classList.toggle("on", index === current));
        parallax.forEach((element) => {
          const parent = element.parentElement;
          if (!parent) return;
          const box = parent.getBoundingClientRect();
          const center = box.top + box.height / 2 - window.innerHeight / 2;
          const shift = (-center * parseFloat(element.dataset.par ?? "0")).toFixed(1);
          if (element.dataset.pp === "t") element.style.translate = `0 ${shift}px`;
          else element.style.transform = `translate3d(0, ${shift}px, 0)`;
        });
        if (process && !trackerNodes) {
          trackerNodes = [...process.querySelectorAll<HTMLElement>("div")].filter((node) => {
            const dot = node.children[0];
            return (
              node.children.length === 2 &&
              dot instanceof HTMLElement &&
              dot.tagName === "SPAN" &&
              parseFloat(getComputedStyle(dot).width) === 12
            );
          });
        }
        if (trackerNodes?.length && stack.length) {
          let active = 0;
          stack.forEach((card, index) => {
            if (card.getBoundingClientRect().top <= window.innerHeight * 0.6) active = index;
          });
          trackerNodes.forEach((item, index) => {
            const dot = item.children[0] as HTMLElement;
            const label = item.children[1] as HTMLElement;
            dot.style.transition = "background .3s";
            dot.style.background = index <= active ? "#5A7508" : "#D3D6C6";
            label.style.color = index === active ? "#151713" : "#4B4F43";
          });
        }
        stack.forEach((card, index) => {
          const inner = card.querySelector<HTMLElement>(":scope > div");
          if (!inner) return;
          const next = stack[index + 1];
          let overlap = 0;
          if (next && window.innerWidth > 900) {
            const currentBox = card.getBoundingClientRect();
            const nextBox = next.getBoundingClientRect();
            overlap = clamp((currentBox.bottom - nextBox.top) / currentBox.height, 0, 1);
          }
          inner.style.transform = `scale(${(1 - overlap * 0.05).toFixed(3)})`;
          inner.style.transformOrigin = "top center";
          inner.style.filter = overlap > 0 ? `brightness(${(1 - overlap * 0.16).toFixed(2)})` : "";
        });
        if (rail && process) {
          const box = process.getBoundingClientRect();
          const progress = clamp((window.innerHeight * 0.65 - box.top) / (box.height * 0.8), 0, 1);
          rail.style.transform = `scaleY(${progress.toFixed(3)})`;
        }
        scrubHeadings.forEach((heading) => {
          const box = heading.getBoundingClientRect();
          const glyphs = [...heading.querySelectorAll<HTMLElement>(".w > span")];
          const progress = clamp(
            (window.innerHeight * 0.9 - box.top) / (window.innerHeight * 0.5 + box.height * 0.4),
            0,
            1,
          );
          glyphs.forEach((glyph, index) => {
            glyph.style.opacity = (0.16 + 0.84 * clamp(progress * (glyphs.length + 2) - index, 0, 1)).toFixed(2);
          });
        });
      };
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(frame);
      };
      listen(window, "scroll", onScroll, { passive: true });
      listen(window, "resize", () => {
        marquees.forEach((marquee) => {
          marquee.half = marquee.el.scrollWidth / 2;
        });
        layoutPins();
        layoutStack();
        onScroll();
      });
      onScroll();

      let velocity = 0;
      let previousScroll = window.scrollY;
      let raf = 0;
      const tick = () => {
        const scroll = window.scrollY;
        const delta = scroll - previousScroll;
        previousScroll = scroll;
        velocity += (delta - velocity) * 0.1;
        if (logos && !logos.pause) {
          const direction = velocity < -1 ? -1 : 1;
          logos.x -= (0.6 + Math.abs(velocity) * 0.5) * direction;
          const offset = ((logos.x % logos.total) + logos.total) % logos.total;
          logos.track.style.transform = `translateX(${-logos.total + offset}px)`;
        }
        root.style.setProperty("--sk", `${clamp(velocity * 0.04, -2, 2).toFixed(2)}deg`);
        marquees.forEach((marquee) => {
          const direction = (velocity < -1 ? -1 : 1) * marquee.dir;
          marquee.x -= (0.7 + Math.abs(velocity) * 0.4) * direction;
          if (marquee.x <= -marquee.half) marquee.x += marquee.half;
          if (marquee.x > 0) marquee.x -= marquee.half;
          marquee.el.style.transform = `translateX(${marquee.x.toFixed(1)}px) skewX(${clamp(-velocity * 0.3 * marquee.dir, -9, 9).toFixed(1)}deg)`;
        });
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      cleanups.push(() => cancelAnimationFrame(raf));

      return () => cleanups.forEach((cleanup) => cleanup());
    },
  };
}

export function startIncomingMotion(root: HTMLElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  let session = sessions.get(root);
  if (!session) {
    session = build(root);
    sessions.set(root, session);
  }
  return session.connect();
}
