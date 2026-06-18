"use client";

import { useState } from "react";

// Paste your deployed Google Apps Script Web App URL here.
// See WAITLIST_SETUP.md for the 5-minute setup. It looks like:
// https://script.google.com/macros/s/AKfy.../exec
const WAITLIST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyfKACMlVrDgt944T8a3ebVwbryKF535zS8gpAbgkWQOjkXtaD58TOYNBey_y1A9b-5UA/exec";

const roles = ["Future user", "Builder", "Contributor"];

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const handle = String(data.get("handle") || "")
      .trim()
      .replace(/^@+/, "");
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      handle: handle ? `@${handle}` : "",
      role,
      attention: String(data.get("attention") || "").trim(),
    };

    if (!payload.name || !payload.email || !handle || !payload.attention) {
      setError(
        "Please share your name, email, the handle you want, and what caught your attention.",
      );
      return;
    }

    if (!/^[a-zA-Z0-9_]{2,30}$/.test(handle)) {
      setError(
        "Handles use letters, numbers, and underscores (2–30 characters).",
      );
      return;
    }

    if (!WAITLIST_ENDPOINT.startsWith("https://script.google.com")) {
      setError(
        "The waitlist isn’t connected yet — please check back shortly.",
      );
      return;
    }

    setStatus("submitting");
    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-nodods-white rounded-3xl p-8 md:p-12 border border-nodods-navy/5 text-center">
        <div className="w-14 h-14 rounded-2xl bg-nodods-navy/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-nodods-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-display font-semibold text-2xl text-nodods-navy mb-3">
          You&apos;re on the list.
        </h2>
        <p className="text-nodods-muted leading-relaxed max-w-sm mx-auto">
          Thank you for joining the Farmore community. We read every note — and
          we&apos;ll be in touch the moment handles open.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5 space-y-6"
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-nodods-navy mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-2xl border border-nodods-navy/15 bg-nodods-white px-5 py-4 text-nodods-navy placeholder:text-nodods-muted/60 focus:outline-none focus:border-nodods-navy focus:ring-2 focus:ring-nodods-navy/20 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-nodods-navy mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className="w-full rounded-2xl border border-nodods-navy/15 bg-nodods-white px-5 py-4 text-nodods-navy placeholder:text-nodods-muted/60 focus:outline-none focus:border-nodods-navy focus:ring-2 focus:ring-nodods-navy/20 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="handle"
          className="block text-sm font-medium text-nodods-navy mb-2"
        >
          The handle you want
        </label>
        <div className="flex items-center rounded-2xl border border-nodods-navy/15 bg-nodods-white focus-within:border-nodods-navy focus-within:ring-2 focus-within:ring-nodods-navy/20 transition-colors">
          <span className="pl-5 pr-1 text-nodods-muted text-xl font-display">
            @
          </span>
          <input
            id="handle"
            name="handle"
            type="text"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="amara"
            className="w-full bg-transparent py-4 pr-5 text-nodods-navy placeholder:text-nodods-muted/60 focus:outline-none"
          />
        </div>
        <p className="text-nodods-muted text-sm mt-2">
          One name for every chain and crypto address — we&apos;ll do our best
          to reserve it for you.
        </p>
      </div>

      <div>
        <span className="block text-sm font-medium text-nodods-navy mb-2">
          I&apos;m joining as{" "}
          <span className="text-nodods-muted font-normal">(optional)</span>
        </span>
        <div className="flex flex-wrap gap-3">
          {roles.map((option) => {
            const active = role === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setRole(active ? "" : option)}
                aria-pressed={active}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                  active
                    ? "bg-nodods-navy text-nodods-white border-nodods-navy"
                    : "bg-nodods-white text-nodods-navy border-nodods-navy/20 hover:bg-nodods-navy/5"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="attention"
          className="block text-sm font-medium text-nodods-navy mb-2"
        >
          What caught your attention about Farmore?
        </label>
        <textarea
          id="attention"
          name="attention"
          rows={4}
          placeholder="We love hearing from you — tell us what drew you in."
          className="w-full rounded-2xl border border-nodods-navy/15 bg-nodods-white px-5 py-4 text-nodods-navy placeholder:text-nodods-muted/60 focus:outline-none focus:border-nodods-navy focus:ring-2 focus:ring-nodods-navy/20 transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-full bg-nodods-navy text-nodods-white font-medium hover:bg-nodods-navy-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </button>
    </form>
  );
}
