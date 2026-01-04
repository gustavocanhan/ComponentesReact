import { SearchIcon, X } from "lucide-react";

type SearchProps = {
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Search({ type, value, placeholder, onChange }: SearchProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-100 h-10 px-8 bg-background border border-border text-foreground rounded-md placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <X onClick={() => onChange("")} className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer hover:text-accent-foreground transition-colors duration-200"/>
    </div>
  );
}
