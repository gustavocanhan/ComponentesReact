import Accordion from "@/components/accordion/Accordion";
import AlertPreview from "@/components/alert/AlertPreview";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";
import CarouselItem from "@/components/carousel/CarouselItem";
import CheckBoxPreview from "@/components/checkbox/CheckBoxPreview";
import Collapsible from "@/components/collapsible/Collapsible";
import ContextMenu from "@/components/contextmenu/ContextMenu";
import DatePicker from "@/components/date/DatePicker";
import DialogPreview from "@/components/dialog/DialogPreview";
import DropdownMenu from "@/components/dropdown-menu/DropdownMenu";
import HoverMenu from "@/components/hovermenu/HoverMenu";
import { Input } from "@/components/input/Input";
import { InputLabel } from "@/components/input/InputLabel";
import NotFound from "@/components/notfound/NotFound";
import Radio from "@/components/radio/Radio";
import Search from "@/components/search/Search";
import SkeletonLoading from "@/components/skeleton-loading/Skeleton";
import Table from "@/components/table/Table";
import Tabs from "@/components/tabs/Tabs";
import { Copy, Edit, Trash } from "lucide-react";

export const componentsConfig = {
  accordion: {
    title: "Accordion",
    description: "Show and hide sections of related content.",
    preview: (
      <Accordion
        items={[
          {
            id: "1",
            title: "O que é este sistema?",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tellus ut efficitur fermentum. Proin molestie eros quam, eu varius turpis hendrerit quis. In nibh ante, consectetur quis nisi porttitor, consectetur eleifend metus. Aliquam non odio ac eros molestie porta. Etiam odio ipsum, aliquam quis venenatis vitae, blandit nec nulla. Ut rutrum odio et convallis mattis. Sed lobortis, sem vitae condimentum rutrum, mi orci ultricies diam, ut scelerisque nisl sapien at lacus.",
          },
          {
            id: "2",
            title: "Quem pode acessar?",
            content: "Apenas usuários autorizados.",
          },
        ]}
      />
    ),
    code: `import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="w-200 rounded-md border border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b border-border last:border-b-0">
            <button
              onClick={() => toggle(item.id)}
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-foreground hover:bg-muted"
            >
              <span className="font-medium">{item.title}</span>
              <ChevronDown
                className={\`
                  h-4 w-4 transition-transform duration-500 ease-in-out
                  \${isOpen ? "rotate-180" : ""}
                \`}
              />
            </button>

            {isOpen && (
              <div className="px-4 py-4 text-sm text-muted-foreground">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
`,
  },

  alert: {
    title: "Alert",
    description: "Display important messages to the user.",
    preview: <AlertPreview />,
    code: `import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

type AlertProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Alert({ isOpen, onClose }: AlertProps) {
  const [visible, setVisible] = useState(isOpen);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen) return;

    setVisible(true);
    setProgress(100);

    requestAnimationFrame(() => {
      setProgress(0);
    });

    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={\`relative bg-background border border-border rounded-md p-4 shadow-lg flex items-center z-50 w-100 gap-2 transition-all duration-200 ease-in-out \${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}\`}
      >
        <div className="absolute top-0 left-0 h-1 w-full overflow-hidden rounded-t-md bg-muted">
          <div
            className="h-full bg-primary transition-all linear"
            style={{
              width: \`\${progress}%\`,
              transitionDuration: \`\${4000}ms\`,
            }}
          ></div>
        </div>
        <AlertCircle className="h-4 w-4" />
        <p>This Alert a title and an icon.</p>
        <p>4 Secs.</p>
      </div>
    </div>
  );
}
`,
  },

  button: {
    title: "Button",
    description: "Trigger an action or event.",
    preview: (
      <div className="flex flex-col gap-2">
        <Button value="Button" variant="default" />
        <Button value="Button" variant="primary" />
        <Button value="Button" variant="destructive" />
        <Button value="Button" variant="ghost" />
      </div>
    ),
    code: `type ButtonProps = {
  value: string;
  variant?: string;
};

export default function Button({ value, variant = "default" }: ButtonProps) {
  const buttonDefault =
    "bg-accent-foreground text-accent hover:bg-muted-foreground";

  const buttonPrimary = "bg-primary text-accent hover:bg-blue-600";

  const buttonDestructive = "bg-destructive text-accent hover:bg-red-800";

  const buttonGhost =
    "bg-background text-accent-foreground hover:bg-muted-foreground/10";

  return (
    <button
      className={\`flex justify-center items-center py-2 px-4 rounded-md text-sm transition cursor-pointer \${ 
        variant === "primary"
          ? buttonPrimary
          : variant === "destructive"
          ? buttonDestructive
          : variant === "ghost"
          ? buttonGhost
          : buttonDefault
      }\`}
    >
      {value}
    </button>
  );
}
`,
  },

  card: {
    title: "Card",
    description: "Display content inside a container.",
    preview: <Card />,
    code: `export default function Card() {
  return (
    <div className="flex flex-col border border-muted-foreground/10 rounded-md p-6 bg-card shadow-md gap-2 md:w-sm">
      <header className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm pb-2">
            Login to your account
          </p>

          <p className="text-muted-foreground text-sm">
            Enter your email below to login to <br /> your account
          </p>
        </div>

        <p className="text-sm cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-[width] after:duration-300 hover:after:w-full">
          Sign Up
        </p>
      </header>

      <main className="flex flex-col">
        <label className="flex flex-col gap-1 py-2 text-sm">
          Email
          <input
            type="email"
            className="w-full border border-muted-foreground/10 shadow-sm rounded-md py-1.5 px-2 placeholder:text-muted-foreground/80 bg-card-foreground"
            placeholder="m@example.com"
          />
        </label>

        <label className="flex flex-col gap-1 py-2 text-sm">
          <div className="flex justify-between items-center pb-1">
            <p>Password</p>

            <p className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-[width] after:duration-300 hover:after:w-full">
              Forgot your password?
            </p>
          </div>

          <input
            type="password"
            className="w-full border border-muted-foreground/10 shadow-sm rounded-md py-1.5 px-2 placeholder:text-muted-foreground/80 bg-card-foreground"
          />
        </label>
      </main>

      <footer className="flex flex-col gap-2">
        <button className="bg-accent-foreground text-accent text-sm font-semibold py-1.5 rounded-md cursor-pointer hover:bg-accent-foreground/80">
          Login
        </button>

        <button className="border border-muted-foreground/10 bg-card-foreground text-sm font-semibold py-1.5 rounded-md cursor-pointer hover:bg-muted-foreground/50">
          Login with Google
        </button>
      </footer>
    </div>
  );
}
`,
  },

  carousel: {
    title: "Carousel",
    description: "Cycle through content slides.",
    preview: (
      <Carousel>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
        <CarouselItem>6</CarouselItem>
      </Carousel>
    ),
    code: `"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollNext() {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }

  function scrollPrev() {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }

  return (
    <div className="relative w-full">
      <button
        onClick={scrollPrev}
        className="absolute -left-15 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background text-accent-foreground hover:bg-muted-foreground/20 p-2 shadow"
      >
        <ChevronLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
      >
        {children}
      </div>

      <button
        onClick={scrollNext}
        className="absolute -right-15 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow bg-background text-accent-foreground hover:bg-muted-foreground/20"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

type CarouselItemProps = {
  children: React.ReactNode;
};

export function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div className="min-w-60 h-70 snap-start rounded-lg bg-gray-100 p-6 flex items-center justify-center text-xl font-semibold">
      {children}
    </div>
  );
}
`,
  },

  checkbox: {
    title: "Checkbox",
    description: "Select one or multiple options.",
    preview: <CheckBoxPreview />,
    code: `type CheckBoxProps = {
  nameChk: string;
  valueChk: string;
  labelChk: string;
  isDisabled: boolean;
};

export default function CheckBox({
  nameChk,
  valueChk,
  labelChk,
  isDisabled,
}: CheckBoxProps) {
  return (
    <label className="flex gap-2">
      <input
        type="checkbox"
        name={nameChk}
        value={valueChk}
        className="accent-accent-foreground"
        disabled={isDisabled}
      />
      {labelChk}
    </label>
  );
}
`,
  },

  collapsible: {
    title: "Collapsible",
    description: "Toggle visibility of content.",
    preview: (
      <Collapsible title="Detalhes">
        <p>Conteúdo um</p>
        <p>Conteúdo dois</p>
        <p>Conteúdo tres</p>
        <p>Conteúdo quatro</p>
      </Collapsible>
    ),
    code: `"use client";

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
            className={\`h-4 w-4 transition-transform duration-200 \${open ? "rotate-180" : ""}\`}
          />
        </button>
      </div>

      {/* Content */}
      <div
        className={\`pb-6 grid transition-[grid-template-rows] duration-200 \${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}\`}
      >
        <div
          className={\`overflow-hidden mt-2 shadow rounded-md p-4 text-sm text-muted-foreground flex flex-col gap-2 border border-muted-foreground/10 \${!open ? "pb-8" : ""}\`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
`,
  },

  contextmenu: {
    title: "Context Menu",
    description: "Display actions on right click.",
    preview: (
      <ContextMenu
        items={[
          {
            label: "Editar",
            icon: <Edit className="w-4 h-4" />,
            onClick: () => alert("Editar"),
          },
          {
            label: "Duplicar",
            icon: <Copy className="w-4 h-4" />,
            onClick: () => alert("Duplicar"),
          },
          {
            label: "Excluir",
            icon: <Trash className="w-4 h-4" />,
            onClick: () => alert("Excluir"),
          },
        ]}
      >
        <div className="rounded-md border p-6">
          Clique com botao direito aqui
        </div>
      </ContextMenu>
    ),
    code: `"use client";

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
`,
  },

  calendar: {
    title: "Calendar",
    description: "Select a date from a calendar.",
    preview: <DatePicker />,
    code: `"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DatePicker() {
  const pickerRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const CURRENT_YEAR = new Date().getFullYear();
  const YEARS = Array.from({ length: 11 }, (_, i) => CURRENT_YEAR - 5 + i);

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayofMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({
    length: firstDayofMonth + daysInMonth,
  });

  useEffect(() => {
    if (!YEARS.includes(currentDate.getFullYear())) {
      const today = new Date();
      setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={pickerRef} className="relative w-72">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-md border px-3 py-2 text-left text-sm flex justify-between items-center cursor-pointer"
      >
        <span>
          {selectedDate
            ? selectedDate.toLocaleDateString("pt-BR")
            : "Selecione uma data"}
        </span>
        <Calendar className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border bg-background p-4 shadow-lg">
          <div className="mb-3 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              className="rounded p-1 hover:bg-muted-foreground/10 cursor-pointer"
            >
              <ChevronLeft />
            </button>

            <select
              value={month}
              onChange={(e) =>
                setCurrentDate(new Date(year, Number(e.target.value), 1))
              }
              className="rounded border px-2 py-1 text-sm cursor-pointer"
            >
              {MONTHS.map((m, index) => (
                <option key={m} value={index}>
                  {m}
                </option>
              ))}
            </select>

            <select
              onChange={(e) =>
                setCurrentDate(new Date(Number(e.target.value), month, 1))
              }
              className="rounded border px-2 py-1 text-sm cursor-pointer"
              value={year}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <button
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              className="rounded p-1 hover:bg-muted-foreground/10 cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 text-center text-xs text-muted-foreground">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {days.map((_, index) => {
              const day = index - firstDayofMonth + 1;
              const isValidDay = day > 0 && day <= daysInMonth;

              return (
                <button
                  key={index}
                  disabled={!isValidDay}
                  onClick={() => {
                    setSelectedDate(new Date(year, month, day));
                    setOpen(false);
                  }}
                  className={\`h-8 rounded cursor-pointer \${isValidDay ? "hover:bg-muted-foreground/30" : "cursor-default"} \${selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === month &&
                  selectedDate.getFullYear() === year
                    ? "bg-accent-foreground text-accent"
                    : ""}\`}
                >
                  {isValidDay ? day : ""}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
`,
  },

  dialog: {
    title: "Dialog",
    description: "Display modal content over the page.",
    preview: <DialogPreview />,
    code: `import { X } from "lucide-react";

type DialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Dialog({ isOpen, setIsOpen }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 flex justify-center items-center bg-foreground/50 dark:bg-black/80 z-50 transition-opacity duration-200 ease-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-card w-100 p-4 flex flex-col gap-2 absolute rounded-md shadow-lg max-w-md space-y-2 border border-border transition-all duration-200 ease-out"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg">Titulo</h1>

          <button
            className="cursor-pointer"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="text-left text-accent-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            tellus ut efficitur fermentum. Proin molestie eros quam, eu varius
            turpis hendrerit quis. In nibh ante, consectetur quis nisi
            porttitor, consectetur eleifend metus. Aliquam non odio ac eros
            molestie porta. Etiam odio ipsum, aliquam quis venenatis vitae,
            blandit nec nulla. Ut rutrum odio et convallis mattis. Sed lobortis,
            sem vitae condimentum rutrum, mi orci ultricies diam, ut scelerisque
            nisl sapien at lacus.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-foreground text-accent px-4 py-2 rounded-md cursor-pointer"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
`,
  },

  "dropdown-menu": {
    title: "Dropdown Menu",
    description: "Display a list of actions or options.",
    preview: <DropdownMenu />,
    code: `"use client";

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
`,
  },

  hovermenu: {
    title: "Hover Menu",
    description: "Reveal actions on hover.",
    preview: <HoverMenu />,
    code: `export default function HoverMenu() {
  return (
    <nav className="relative">
      <ul className="flex gap-8 border border-muted-foreground/10 shadow px-4 py-1 rounded-md">
        <li className="font-medium cursor-pointer">Home</li>

        <li className="relative group">
          <span className="cursor-pointer font-medium">
            Components
          </span>

          <div className="absolute left-0 top-full w-48 border border-muted-foreground/10 shadow rounded-md opacity-0 invisible translate-y-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-200 ease-out mt-2">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-muted-foreground/10 cursor-pointer">
                Input
              </li>
              <li className="px-4 py-2 hover:bg-muted-foreground/10 cursor-pointer">
                Button
              </li>
              <li className="px-4 py-2 hover:bg-muted-foreground/10 cursor-pointer">
                Card
              </li>
            </ul>
          </div>
        </li>

        <li className="font-medium cursor-pointer">
          About
        </li>
      </ul>
    </nav>
  );
}
`,
  },

  input: {
    title: "Input",
    description: "Collect user text input.",
    preview: <Input />,
    code: `"use client";

import { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      placeholder="Searching a name..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-auto h-10 px-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
`,
  },

  input_label: {
    title: "Input Label",
    description: "Collect user text input and label.",
    preview: <InputLabel />,
    code: `"use client";

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
        className="w-auto h-10 px-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
`,
  },

  notfound: {
    title: "Not Found",
    description: "Display a not found state.",
    preview: <NotFound />,
    code: `import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-xl pb-4">
        404 - Not Found
      </h1>

      <p className="text-sm text-muted-foreground/70">
        The page you're looking for doesn't exist.
      </p>

      <p className="text-sm text-muted-foreground/70">
        Try searching for what you need below
      </p>

      <div className="relative my-4">
        <Search className="absolute w-3 h-3 top-1/2 -translate-y-1/2 text-muted-foreground left-2" />

        <input
          type="text"
          placeholder="Try searching for pages..."
          className="border border-muted-foreground/10 shadow rounded-md placeholder:text-sm text-sm py-1.5 px-6 w-full outline-none text-muted-foreground"
        />
      </div>

      <div className="flex justify-center items-center gap-1 text-sm text-muted-foreground/70">
        <p>Need help?</p>

        <a
          href="/"
          className="border-b border-muted-foreground/70 transition hover:border-accent-foreground hover:text-accent-foreground"
        >
          Contact support
        </a>
      </div>
    </div>
  );
}
`,
  },

  radio: {
    title: "Radio",
    description: "Select a single option from a group.",
    preview: <Radio />,
    code: `export default function Radio() {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
        />
        JavaScript
      </label>

      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
          disabled
        />
        TypeScript
      </label>

      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
        />
        C#
      </label>
    </div>
  );
}
`,
  },

  search: {
    title: "Search",
    description: "Search through content or data.",
    preview: <Search />,
    code: `"use client";

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
        className="w-100 h-10 px-8 bg-background border border-border text-foreground rounded-md placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <X
        onClick={() => setValue("")}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer hover:text-accent-foreground transition-colors duration-200"
      />
    </div>
  );
}
`,
  },

  "skeleton-loading": {
    title: "Skeleton",
    description: "Show loading placeholders.",
    preview: (
      <div className="w-md p-2">
        <SkeletonLoading />
      </div>
    ),
    code: `export default function Skeleton() {
  return (
    <div className="flex gap-2 w-full">
      <div>
        <div className="h-12 w-12 rounded-full bg-muted-foreground/20 animate-pulse" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="h-4 w-3/4 rounded bg-muted-foreground/20 animate-pulse" />
        <div className="h-4 w-full rounded bg-muted-foreground/20 animate-pulse" />
        <div className="h-4 w-5/6 rounded bg-muted-foreground/20 animate-pulse" />
      </div>
    </div>
  );
}
`,
  },

  table: {
    title: "Table",
    description: "Display structured data in rows.",
    preview: (
      <Table
        items={[
          {
            id: 1,
            product: "Arroz",
            price: 29.8,
          },
          {
            id: 2,
            product: "Carne",
            price: 299.8,
          },
          {
            id: 3,
            product: "TV",
            price: 29.9998,
          },
        ]}
      />
    ),
    code: `import { SquarePen, Trash } from "lucide-react";

type TableProps = {
  items: {
    id: number;
    product: string;
    price: number;
  }[];
};

export default function Table({ items }: TableProps) {
  return (
    <table className="w-2xl">
      <colgroup>
        <col className="w-16" />
        <col className="w-1/2" />
        <col className="w-32" />
        <col className="w-32" />
      </colgroup>

      <thead>
        <tr className="border-b border-muted-foreground/20">
          <th className="py-4 text-center">#</th>
          <th className="py-4 text-center">Product</th>
          <th className="py-4 text-center">Price</th>
          <th className="py-4 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, key) => (
          <tr key={key} className="border-b border-muted-foreground/20">
            <td className="py-4 text-center">{item.id}</td>
            <td className="py-4 text-center">{item.product}</td>
            <td className="py-4 text-center">{item.price}</td>
            <td className="py-4 text-right">
              <div className="flex justify-end items-center gap-6">
                <SquarePen className="h-6 w-6 cursor-pointer bg-muted-foreground/10 p-1 rounded-md text-green-500 hover:text-green-700 shadow transition" />
                <Trash className="h-6 w-6 cursor-pointer bg-muted-foreground/10 p-1 rounded-md text-red-500 hover:text-red-700 shadow transition" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
`,
  },

  tabs: {
    title: "Tabs",
    description: "Switch between content sections.",
    preview: (
      <div>
        <Tabs />
      </div>
    ),
    code: `"use client";

import { useState } from "react";

const tabs = [
  {
    id: "account",
    title: "Account",
  },
  {
    id: "password",
    title: "Password",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="w-full max-w-xl">
      <div className="p-1 bg-muted-foreground/10 rounded-full shadow w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-4 py-1 text-sm font-medium rounded-full transition duration-200 \${activeTab == tab.id ? "bg-background" : "cursor-pointer"}\`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="border border-muted-foreground/10 shadow bg-background mt-4 px-6 py-4 w-sm rounded-xl">
        <h1 className="font-semibold py-2">
          {activeTab === "account" ? "Account" : "Password"}
        </h1>

        <p className="text-muted-foreground text-sm pb-6">
          {activeTab === "account"
            ? "Make changes to your account here. Click save when you're done."
            : "Change your password here. After saving, you'll be logged out."}
        </p>

        <label className="flex flex-col pb-4">
          <p className="pb-1 text-sm font-medium">
            {activeTab === "account" ? "Name" : "Current password"}
          </p>

          <input
            type="text"
            className="outline-none border border-border rounded-md px-2 py-1"
          />
        </label>

        <label className="flex flex-col pb-8">
          <p className="pb-1 text-sm font-medium">
            {activeTab === "account" ? "Username" : "New password"}
          </p>

          <input
            type="text"
            className="outline-none border border-border rounded-md px-2 py-1"
          />
        </label>

        <button className="bg-accent-foreground text-accent px-4 py-2 text-sm rounded-md hover:bg-accent-foreground/80 cursor-pointer flex">
          Save changes
        </button>
      </div>
    </div>
  );
}
`,
  },
} as const;
