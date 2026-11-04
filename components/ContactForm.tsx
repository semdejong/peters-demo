"use client";

import { useState } from "react";
import Link from "next/link";

type Errors = Partial<Record<"naam" | "email" | "bericht" | "privacy", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const naam = String(data.get("naam") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    if (!naam) next.naam = "Vul uw naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
    if (bericht.length < 4) next.bericht = "Schrijf een kort bericht.";
    if (data.get("privacy") !== "ja") next.privacy = "Lees de privacyverklaring en vink het vakje aan.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDone(false);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="border border-ink bg-white p-5">
        <h2 className="display text-3xl">Bericht klaar in deze demo.</h2>
        <p className="measure mt-3">
          Er is niets verzonden. Bel 0591 39 38 28 of mail info@petersmetaaltechniek.nl. Voor een tekening gebruikt u de offertepagina.
        </p>
        <Link href="/offerte" data-cta="offerte" className="btn btn-solid mt-5">
          Naar de offerte
        </Link>
      </div>
    );
  }

  return (
    <form data-section="contact-formulier" onSubmit={onSubmit} noValidate className="grid gap-4">
      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="form-error border border-brand bg-white px-3 py-2">
          Controleer de gemarkeerde velden.
        </p>
      ) : null}
      <label className="field">
        <span>Naam *</span>
        <input name="naam" autoComplete="name" aria-invalid={errors.naam ? true : undefined} required />
        {errors.naam ? <span className="form-error">{errors.naam}</span> : null}
      </label>
      <label className="field">
        <span>E-mail *</span>
        <input name="email" type="email" autoComplete="email" aria-invalid={errors.email ? true : undefined} required />
        {errors.email ? <span className="form-error">{errors.email}</span> : null}
      </label>
      <label className="field">
        <span>Telefoon</span>
        <input name="telefoon" type="tel" autoComplete="tel" />
      </label>
      <label className="field">
        <span>Bericht *</span>
        <textarea name="bericht" aria-invalid={errors.bericht ? true : undefined} required />
        {errors.bericht ? <span className="form-error">{errors.bericht}</span> : null}
      </label>
      <label className="checkline">
        <input type="checkbox" name="privacy" value="ja" aria-invalid={errors.privacy ? true : undefined} />
        <span>
          Ik heb de <Link href="/privacy">privacyverklaring</Link> gelezen. *
          {errors.privacy ? <span className="form-error mt-1 block">{errors.privacy}</span> : null}
        </span>
      </label>
      <button type="submit" data-cta="offerte" className="btn btn-solid w-full md:w-auto">
        Versturen
      </button>
    </form>
  );
}
