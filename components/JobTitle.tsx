/** Breaks the long compound at the word boundary, only when the line is too narrow. */
export function JobTitle({ title }: { title: string }) {
  const at = title.indexOf("bankwerker");
  if (at < 0) return title;
  return (
    <>
      {title.slice(0, at)}
      <wbr />
      {title.slice(at)}
    </>
  );
}
