"use client";
import ThemeToggle from "@/theme/ThemeToggle";
import { ComponentIcon, SearchIcon, XIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="bg-background flex justify-between items-center py-4 px-4 md:px-8 text-foreground">
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted-foreground/10 transition md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="text-sm font-medium">Menu</span>
        </button>

        {/* Desktop Logo + Menu */}
        <div className="md:flex items-center hidden">
          <ComponentIcon className="h-8 w-8 p-2 hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 rounded-md cursor-pointer transition" />
          <nav className="flex gap-4 font-semibold px-4 text-sm">
            <NavLinks />
          </nav>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="flex items-center gap-6">
        {/* SEARCH DESKTOP ONLY */}
        <div className="relative hidden md:block">
          <SearchIcon className="absolute h-4 w-4 top-1/2 -translate-y-1/2 left-2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components"
            className="border border-muted dark:border-accent shadow-sm w-auto pl-8 pr-8 py-1 rounded-md outline-none placeholder:text-sm placeholder:text-muted-foreground"
          />
          {search && (
            <XIcon
              onClick={() => setSearch("")}
              className="absolute h-4 w-4 top-1/2 -translate-y-1/2 right-2 hover:text-accent-foreground cursor-pointer"
            />
          )}
        </div>

        <ThemeToggle />
      </div>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
}
