"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const bewerkingen = ["Ponsnibbelen", "CNC-kanten", "Lassen", "Constructiewerk", "Weet ik nog niet"] as const;
const materialen = ["Staal", "RVS", "Aluminium", "Anders"] as const;

const bewerkingParam: Record<string, (typeof bewerkingen)[number]> = {
  ponsnibbelen: "Ponsnibbelen",
  kanten: "CNC-kanten",
  lassen: "Lassen",
  constructiewerk: "Constructiewerk",
};

type Errors = Partial<Record<"naam" | "email" | "telefoon" | "privacy", string>>;

export function QuoteForm() {
  const params = useSearchParams();
  const preset = bewerkingParam[params.get("bewerking") ?? ""] ?? null;
  const initial = useMemo(() => new Set(preset ? [preset] : []), [preset]);
  const [checked, setChecked] = useState<Set<string>>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [fileName, setFileName] = useState("");

  function toggle(value: string) {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const naam = String(data.get("naam") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    if (!naam) next.naam = "Vul uw naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
    if (telefoon.length < 6) next.telefoon = "Vul uw telefoonnummer in.";
    if (data.get("privacy") !== "ja") next.privacy = "Lees de privacyverklaring en vink het vakje aan.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDone(false);
      return;
    }
    setDone(true);
    event.currentTarget.reset();
    setChecked(new Set());
  }

  if (done) {
    return (
      <div role="status" data-section="offerte-bevestiging" className="border border-ink bg-white p-5">
        <h2 className="display text-3xl">Aanvraag klaar in deze demo.</h2>
        <p className="measure mt-3">
          Er is niets verzonden en er is geen tekening geüpload. Op de echte site bekijken we uw aanvraag en nemen we contact met u op. U kunt ook bellen met 0591 39 38 28.
        </p>
        <button type="button" className="btn mt-5" onClick={() => setDone(false)}>
          Nog een aanvraag invullen
        </button>
      </div>
    );
  }

  return (
    <form data-section="offerte-formulier" onSubmit={onSubmit} noValidate className="grid gap-5">
      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="form-error border border-brand bg-white px-3 py-2">
          Controleer de gemarkeerde velden.
        </p>
      ) : null}

      <fieldset className="grid gap-2">
        <legend className="mb-2 font-medium">Bewerking(en)</legend>
        {bewerkingen.map((item) => (
          <label key={item} className="checkline">
            <input
              type="checkbox"
              name="bewerking"
              value={item}
              checked={checked.has(item)}
              onChange={() => toggle(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="grid gap-2">
        <legend className="mb-2 font-medium">Materiaal</legend>
        {materialen.map((item) => (
          <label key={item} className="checkline">
            <input type="radio" name="materiaal" value={item} />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>Plaatdikte</span>
          <input name="dikte" type="text" autoComplete="off" />
        </label>
        <label className="field">
          <span>Aantal (stuks)</span>
          <input name="aantal" type="text" inputMode="numeric" autoComplete="off" />
        </label>
        <label className="field">
          <span>Serie of eenmalig</span>
          <select name="serie" defaultValue="">
            <option value="">Kies</option>
            <option>Serie</option>
            <option>Eenmalig</option>
            <option>Weet ik nog niet</option>
          </select>
        </label>
        <label className="field">
          <span>Gewenste leverdatum</span>
          <input name="leverdatum" type="date" />
        </label>
        <label className="field">
          <span>Montage nodig</span>
          <select name="montage" defaultValue="">
            <option value="">Kies</option>
            <option>Ja</option>
            <option>Nee</option>
            <option>Weet niet</option>
          </select>
        </label>
        <label className="field">
          <span>Tekening of bestand</span>
          <input
            name="bestand"
            type="file"
            accept=".pdf,.dxf,.dwg,.step,.stp,.jpg,.png"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
          />
          <span className="text-sm text-steel">
            PDF, DXF, DWG, STEP, STP, JPG of PNG. In deze demo wordt het bestand niet verstuurd.
            {fileName ? ` Gekozen: ${fileName}.` : ""}
          </span>
        </label>
      </div>

      <label className="field">
        <span>Omschrijving</span>
        <textarea name="omschrijving" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>Bedrijfsnaam</span>
          <input name="bedrijf" type="text" autoComplete="organization" />
        </label>
        <label className="field">
          <span>Naam *</span>
          <input name="naam" type="text" autoComplete="name" aria-invalid={errors.naam ? true : undefined} required />
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
      </div>

      <label className="checkline">
        <input type="checkbox" name="privacy" value="ja" aria-invalid={errors.privacy ? true : undefined} />
        <span>
          Ik heb de <Link href="/privacy">privacyverklaring</Link> gelezen. *
          {errors.privacy ? <span className="form-error mt-1 block">{errors.privacy}</span> : null}
        </span>
      </label>

      <button type="submit" data-cta="offerte" className="btn btn-solid w-full md:w-auto">
        Aanvraag versturen
      </button>
    </form>
  );
}
