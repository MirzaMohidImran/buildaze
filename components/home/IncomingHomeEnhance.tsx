"use client";

import { useEffect, useLayoutEffect } from "react";
import { submitWeb3FormsInquiry } from "@/lib/contact/web3forms";
import { startIncomingMotion } from "./incoming-motion";

/** Homepage motion and the inquiry form. The existing hero is not touched. */
export function IncomingHomeEnhance() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>(".incoming-home");
    if (!root) return;
    return startIncomingMotion(root);
  }, []);

  useEffect(() => {
    const root = document.querySelector(".incoming-home");
    if (!root) return;

    const nameInput = root.querySelector<HTMLInputElement>("#c-name");
    const emailInput = root.querySelector<HTMLInputElement>("#c-mail");
    const messageInput = root.querySelector<HTMLTextAreaElement>("#c-msg");
    const send = [...root.querySelectorAll("button")].find(
      (button) => button.textContent?.trim() === "Send message",
    );
    if (!nameInput || !emailInput || !messageInput || !send) return;

    let note = root.querySelector<HTMLParagraphElement>(".form-note");
    if (!note) {
      note = document.createElement("p");
      note.className = "form-note";
      note.setAttribute("role", "status");
      send.insertAdjacentElement("afterend", note);
    }

    const onSend = async () => {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const details = messageInput.value.trim();
      if (!name || !email || !details) {
        note.textContent = "Add your name, email, and project details.";
        return;
      }
      const label = send.textContent;
      send.textContent = "Sending…";
      send.setAttribute("disabled", "true");
      const result = await submitWeb3FormsInquiry({
        name,
        email,
        details,
        service: "Not sure yet",
        source: "homepage",
      });
      send.textContent = label;
      send.removeAttribute("disabled");
      if (result.ok) {
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        note.textContent = "Message sent. We reply within one working day.";
        return;
      }
      note.textContent = result.message || "Could not send just now. Email team@buildaze.com.";
    };

    send.addEventListener("click", onSend);
    return () => send.removeEventListener("click", onSend);
  }, []);

  return null;
}
