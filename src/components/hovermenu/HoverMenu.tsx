export default function HoverMenu() {
  return (
    <nav className="relative">
      <ul className="flex gap-8 border border-muted-foreground/10 shadow px-4 py-1 rounded-md">
        <li className="font-medium cursor-pointer">Home</li>
        <li className="relative group">
          <span className="cursor-pointer font-medium">Components</span>
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
        <li className="font-medium cursor-pointer">About</li>
      </ul>
    </nav>
  );
}
