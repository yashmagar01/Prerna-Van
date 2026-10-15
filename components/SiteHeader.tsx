import MobileNav from "@/components/MobileNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-ivory/95 border-b border-border">
      <div className="wrap relative flex items-center justify-between gap-4 py-3">
        <a href="#top" aria-label="Prerna Tirth — home" className="flex items-center gap-3 text-forest-deep">
          <span aria-hidden="true" className="font-mr grid place-items-center w-11 h-11 rounded-full bg-forest text-ivory text-[1.3rem]">
            प्रे
          </span>
          <span className="font-display text-[1.25rem] leading-[1.1]">
            Prerna Tirth
            <small className="block font-sans text-[0.68rem] tracking-[0.08em] text-muted uppercase">
              Inspire · Connect · Transform
            </small>
          </span>
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
