"use client";

import { useEffect, useRef, useState } from "react";

type ContextMenuProps = {
  items: {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
  }[];
  children: React.ReactNode;
};

export default function ContextMenu({ items, children }: ContextMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const x = Math.min(e.clientX, window.innerWidth - 160);
    const y = Math.min(e.clientY, window.innerHeight - 120);

    setPos({ x, y });
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;

    function handleMouseDown(e: MouseEvent) {
      // ignora clique direito (para não fechar ao abrir outro)
      if (e.button === 2) return;

      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleScroll() {
      setOpen(false);
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div onContextMenu={handleContextMenu} className="inline-block">
      {children}

      {open && (
        <div
          ref={menuRef}
          style={{ top: pos.y, left: pos.x }}
          className="fixed z-50 min-w-40 rounded-md border border-muted-foreground/10 bg-background p-1 shadow-md"
        >
          {items.map((item, i) => (
            <button
              key={i}
              disabled={item.disabled}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-muted disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
            >
              <p>{item.label}</p>
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
