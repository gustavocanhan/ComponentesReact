type buttonProps = {
  value: string;
  variant?: string;
};

export default function Button({ value, variant = "default" }: buttonProps) {
  const buttonDefault =
    "bg-accent-foreground text-accent hover:bg-muted-foreground";

  const buttonPrimary = "bg-primary text-accent hover:bg-blue-600";

  const buttonDestructive = "bg-destructive text-accent hover:bg-red-800";

  const buttonGhost =
    "bg-background text-accent-foreground hover:bg-muted-foreground/10";

  return (
    <button
      className={`flex justify-center items-center py-2 px-4 rounded-md text-sm transition cursor-pointer   ${
        variant === "primary"
          ? buttonPrimary
          : variant === "destructive"
          ? buttonDestructive
          : variant === "ghost"
          ? buttonGhost
          : buttonDefault
      }`}
    >
      {value}
    </button>
  );
}
