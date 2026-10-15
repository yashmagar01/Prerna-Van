"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/content/site";
import { PrimaryButton } from "@/components/Buttons";

// ponytail: the only client component — menu state + Escape handling, nothing else.
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="md:hidden w-12 h-12 cursor-pointer bg-transparent border-2 border-forest rounded-lg"
        aria-expanded={open}
        aria-controls="siteNav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true" className="block h-[2px] bg-forest mx-[10px] my-[6px]" />
        <span aria-hidden="true" className="block h-[2px] bg-forest mx-[10px] my-[6px]" />
        <span aria-hidden="true" className="block h-[2px] bg-forest mx-[10px] my-[6px]" />
      </button>
      <nav
        id="siteNav"
        aria-label="Primary"
        className={
          open
            ? "flex flex-col absolute top-full left-0 right-0 bg-ivory border-b border-border px-6 pt-4 pb-5 md:static md:flex-row md:items-center md:gap-6 md:border-0 md:p-0"
            : "hidden md:flex md:flex-row md:items-center md:gap-6"
        }
      >
        {NAV_LINKS.map((link) =>
          link.cta ? (
            <span key={link.href} className={open ? "mt-3 text-center" : ""}>
              <PrimaryButton href={link.href} small onClick={() => setOpen(false)}>
                {link.label}
              </PrimaryButton>
            </span>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink font-medium hover:text-forest hover:underline py-3 min-h-[48px] border-t border-border md:py-0 md:min-h-0 md:border-0"
            >
              {link.label}
            </a>
          ),
        )}
      </nav>
    </>
  );
}
