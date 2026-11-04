export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="ruled border-y border-ink/15">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="font-mono text-sm text-steel group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden font-mono text-sm text-steel group-open:inline">
              –
            </span>
          </summary>
          <p className="measure pb-4 text-steel">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
