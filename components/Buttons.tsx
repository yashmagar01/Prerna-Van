import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  small?: boolean;
}

// ponytail: one shared shape; Primary/Secondary differ only in variant class.
function baseClass(small: boolean): string {
  return `inline-block font-semibold rounded-full ${
    small ? "px-5 py-2 min-h-[44px]" : "px-[26px] py-3 min-h-[48px]"
  }`;
}

export function PrimaryButton({ children, href, small, ...rest }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${baseClass(Boolean(small))} bg-forest text-white hover:bg-forest-deep`}
      {...rest}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  children,
  href,
  small,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${baseClass(Boolean(small))} bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-white`}
      {...rest}
    >
      {children}
    </a>
  );
}
