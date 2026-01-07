type buttonProps = {
  value: string;
  variant?: string;
};

export default function Button({ value, variant = "default" }: buttonProps) {
  const buttonDefault =
    "bg-accent-foreground text-accent flex justify-center items-center py-2 px-4 rounded-md text-sm";

  return (
    <button className={variant === "default" ? buttonDefault : "bg-red-200"}>
      {value}
    </button>
  );
}
