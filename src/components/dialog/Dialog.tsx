import { X } from "lucide-react";

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
        className="bg-background w-100 p-4 flex flex-col gap-2 absolute rounded-md shadow-lg max-w-md space-y-2 border border-border transition-all duration-200 ease-out"
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
