import { INSTAGRAM_URL, NAV_LINKS } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-ivory py-12">
      <div className="wrap flex justify-between gap-6 flex-wrap">
        <div>
          <p className="font-display text-[1.25rem] text-ivory">
            Prerna Tirth <span lang="mr">· प्रेरणा तीर्थ</span>
          </p>
          <p className="text-[0.9rem] text-sage border-l-[3px] border-sage pl-3 max-w-[62ch]">
            Prototype V0.1 — exploratory, pending stakeholder review. Content
            from working documents, not approved official statements.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-4 flex-wrap content-start">
          {NAV_LINKS.filter((l) => !l.cta).map((link) => (
            <a key={link.href} href={link.href} className="text-ivory hover:underline">
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="text-ivory hover:underline"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
