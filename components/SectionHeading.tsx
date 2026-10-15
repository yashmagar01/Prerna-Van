import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleId: string;
  sub?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  sub,
}: SectionHeadingProps) {
  return (
    <>
      <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-earth mb-3">
        {eyebrow}
      </p>
      <h2 id={titleId}>{title}</h2>
      {sub ? <p className="text-muted text-[1.05rem]">{sub}</p> : null}
    </>
  );
}
