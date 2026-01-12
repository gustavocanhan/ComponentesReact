import { Search, Slash } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-xl pb-4">404 - Not Found</h1>
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
