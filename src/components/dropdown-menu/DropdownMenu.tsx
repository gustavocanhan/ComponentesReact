"use client";

import { MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex gap-2 px-4 py-2 items-center justify-between rounded-md border border-muted-foreground/10 bg-background shadow cursor-pointer hover:bg-muted-foreground/5"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <p className="text-sm">Open</p>
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 rounded-md border border-muted-foreground/10 bg-background shadow text-accent-foreground animate-in fade-in zoom-in-95">
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Actions
          </div>
          <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm cursor-pointer select-none outline-none hover:bg-muted-foreground/10 transition focus:text-blue-800">
            Profile
          </button>
          <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm cursor-pointer select-none outline-none hover:bg-muted-foreground/10 transition focus:text-blue-800">
            Settings
          </button>
          <div className="my-1 h-px bg-border" />
          <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm cursor-pointer select-none outline-none hover:bg-muted-foreground/10 transition focus:text-destructive">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
