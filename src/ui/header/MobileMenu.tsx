import { X, Menu } from "lucide-react";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};

export default function MobileMenu({ openMenu, setOpenMenu }: MobileMenuProps) {
  return (
    <>
      {/* OVERLAY - MOBILE MENU */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR - MOBILE MENU */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b text-accent-foreground">
          <span className="font-semibold">Menu</span>
          <X onClick={() => setOpenMenu(false)} className="cursor-pointer" />
        </div>

        <nav className="flex flex-col gap-2 p-4 text-sm font-medium">
          <NavLinks />
        </nav>
      </aside>
    </>
  );
}
