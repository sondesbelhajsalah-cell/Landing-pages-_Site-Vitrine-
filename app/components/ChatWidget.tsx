"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[min(100vw-2.5rem,320px)] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-extrabold">Une question ?</p>
              <p className="text-sm text-muted">L’équipe MyScol vous répond.</p>
            </div>
            <button type="button" aria-label="Fermer le message" className="rounded-full p-1" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          {sent ? (
            <p className="mt-4 rounded-xl bg-sky-50 p-3 text-sm font-semibold text-brand-dark">
              Message noté. Nous vous recontactons rapidement.
            </p>
          ) : (
            <form
              className="mt-4 space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block text-sm font-bold" htmlFor="chat-name">
                Nom
              </label>
              <input id="chat-name" required className="h-11 w-full rounded-xl border border-slate-200 px-3" />
              <label className="block text-sm font-bold" htmlFor="chat-msg">
                Message
              </label>
              <textarea id="chat-msg" required rows={3} className="w-full rounded-xl border border-slate-200 px-3 py-2" />
              <button type="submit" className="h-11 w-full rounded-full bg-brand font-bold text-white">
                Envoyer
              </button>
            </form>
          )}
        </div>
      )}
      <button
        type="button"
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-lg shadow-sky-200"
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
          <path d="M5 16.5 3.5 20 8 18.2A8.5 8.5 0 1 0 5 16.5Z" />
        </svg>
      </button>
    </div>
  );
}
