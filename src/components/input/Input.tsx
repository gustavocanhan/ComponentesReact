"use client";

import { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      placeholder="Searching a name..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-auto h-10 px-3 rounded-md border border-border bg-background text-foreground    placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
