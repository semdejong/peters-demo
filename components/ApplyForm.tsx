"use client";

import { useState } from "react";
import Link from "next/link";
import { content } from "@/content";

type Errors = Partial<Record<"naam" | "email" | "telefoon" | "privacy", string>>;

export function ApplyForm({ vacancy }: { vacancy?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [fileName, setFileName] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const naam = String(data.get("naam") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    if (!naam) next.naam = "Vul je naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
    if (telefoon.length < 6) next.telefoon = "Vul je telefoonnummer in.";
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
      <div role="status" data-section="sollicitatie-bevestiging" className="border border-ink bg-white p-5">
        <h2 className="display text-3xl">Sollicitatie klaar in deze demo.</h2>
        <p className="measure mt-3">
          Er is niets verzonden en je cv is niet geüpload. Mail je cv naar {content.contact.jobsEmail} of bel Herman Peters op {content.contact.phone}.
        </p>
      </div>
    );
  }

  return (
    <form data-section="sollicitatieformulier" onSubmit={onSubmit} noValidate className="grid gap-4">
      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="form-error border border-brand bg-white px-3 py-2">
          Controleer de gemarkeerde velden.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
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
          <span>Telefoon *</span>
          <input name="telefoon" type="tel" autoComplete="tel" aria-invalid={errors.telefoon ? true : undefined} required />
          {errors.telefoon ? <span className="form-error">{errors.telefoon}</span> : null}
        </label>
        <label className="field">
          <span>Woonplaats</span>
          <input name="woonplaats" autoComplete="address-level2" />
        </label>
        <label className="field">
          <span>Vacature</span>
          <select name="vacature" defaultValue={vacancy ?? content.vacancies[0].title}>
            {content.vacancies.map((item) => (
              <option key={item.slug}>{item.title}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Jaren ervaring</span>
          <input name="ervaring" inputMode="numeric" />
        </label>
      </div>
      <label className="field">
        <span>CV</span>
        <input
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
        <span className="text-sm text-steel">
          PDF, DOC of DOCX. In deze demo wordt het bestand niet verstuurd.
          {fileName ? ` Gekozen: ${fileName}.` : ""}
        </span>
      </label>
      <label className="field">
        <span>Motivatie</span>
        <textarea name="motivatie" />
      </label>
      <label className="checkline">
        <input type="checkbox" name="privacy" value="ja" aria-invalid={errors.privacy ? true : undefined} />
        <span>
          Ik heb de <Link href="/privacy">privacyverklaring</Link> gelezen. *
          {errors.privacy ? <span className="form-error mt-1 block">{errors.privacy}</span> : null}
        </span>
      </label>
      <button type="submit" data-cta="solliciteren" className="btn btn-solid w-full md:w-auto">
        Sollicitatie versturen
      </button>
    </form>
  );
}
