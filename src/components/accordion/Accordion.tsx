import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
                className={`
                  h-4 w-4 transition-transform duration-500 ease-in-out
                  ${isOpen ? "rotate-180" : ""}
                `}
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
