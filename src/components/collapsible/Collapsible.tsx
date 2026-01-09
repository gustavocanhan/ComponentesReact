"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-full rounded-md border border-muted-foreground/10 shadow">
        {/* Trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer flex w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-muted transition"
          aria-expanded={open}
        >
          {title}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {/* Content */}
      <div
        className={`pb-6 grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden mt-2 shadow rounded-md p-4 text-sm text-muted-foreground flex flex-col gap-2 border border-muted-foreground/10 ${
            !open ? "pb-8" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
