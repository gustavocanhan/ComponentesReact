import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  variant?: "desktop" | "mobile";
};

export default function NavLinks({ variant }: NavLinksProps) {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/componentes" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        const base = "rounded-md transition-colors duration-200 cursor-pointer";
        const desktop =
          "px-2 py-1 text-sm font-semibold hover:bg-muted-foreground/10";
        const mobile =
          "px-3 py-2 hover:bg-muted-foreground/10 flex justify-start";
        const active = "bg-muted-foreground/10 font-bold";

        return (
          <button key={link.href}>
            <Link
              href={link.href}
              className={`${base} ${variant === "desktop" ? desktop : mobile} ${
                isActive ? active : ""
              } `}
            >
              {link.label}
            </Link>
          </button>
        );
      })}
    </>
  );
}
