"use client";

import { SearchIcon, X } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        placeholder="searching a name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-100 h-10 px-8 bg-background border border-border text-foreground rounded-md placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <X
        onClick={() => setValue("")}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer hover:text-accent-foreground transition-colors duration-200"
      />
    </div>
  );
}
