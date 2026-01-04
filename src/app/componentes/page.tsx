import ThemeToggle from "@/theme/ThemeToggle";

export default function Componentes() {
  const data = ["Theme", "Accordion", "Alert", "Dialog", "Input", "Search"];

  return (
    <div className="bg-background w-screen h-screen flex flex-col space-y-2">
      <div className="flex justify-between items-center p-4 border-b-2 border-border">
        <h1 className="text-xl">Componentes</h1>
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((d, key) => (
          <p key={key}>{d}</p>
        ))}
      </div>
    </div>
  );
}
