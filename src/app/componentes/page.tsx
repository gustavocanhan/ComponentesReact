"use client";
import ThemeToggle from "@/theme/ThemeToggle";
import { ComponentIcon, HomeIcon, InfoIcon, MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Componentes() {
  const [openMenu, setOpenMenu] = useState(false);

  const data = ["Theme", "Accordion", "Alert", "Dialog", "Input", "Search"];

  return (
    <header className="bg-background flex justify-between items-center py-4 px-8 text-foreground">
      <div className="flex items-center">
        <ComponentIcon className="h-8 w-8 p-2 hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 rounded-md cursor-pointer transition-all duration-300 ease-in-out" />
        <ul className="flex gap-4 px-4 font-semibold text-sm">
          <li className="px-2 py-1 hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            Home
          </li>
          <li className="px-2 py-1 hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            Componets
          </li>
          <li className="px-2 py-1 hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            About
          </li>
        </ul>
      </div>
      <div className="flex w-80 justify-between items-center">
        <input
          type="text"
          placeholder="Search components"
          className="border border-muted shadow-md w-auto pl-4 py-1 rounded-2xl"
        />
        <ThemeToggle />
      </div>
    </header>
  );
}
