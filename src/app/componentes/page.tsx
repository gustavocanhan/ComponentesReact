"use client";

export default function Componentes() {
  const data = [
    "Theme",
    "Accordion",
    "Alert",
    "Dialog",
    "Input",
    "Search",
    "Radio",
    "Button",
    "Calendar",
    "Card",
    "Carousel",
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2 py-4 md:min-w-xl md:px-0 px-4">
        <h1 className="text-4xl font-semibold py-6">Components</h1>
        <p className="text-muted-foreground pb-6">
          Here you will find various components <br />
          that I created as a basis for study and practice.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.sort().map((item, key) => (
            <div className="w-fit">
              <p
                key={key}
                className="font-semibold cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent-foreground after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
