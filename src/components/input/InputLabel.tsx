"use client";

import { useState } from "react";

export function InputLabel() {
  const [value, setValue] = useState("");

  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <label>Nome:</label>
      <input
        type="text"
        placeholder="Digite um nome"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-auto h-10 px-3 rounded-md border border-border    bg-background text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
