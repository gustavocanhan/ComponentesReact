type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
};

export function Input({
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className="
    w-auto h-10 px-3
    rounded-md
    border border-border
    bg-background
    text-foreground
    placeholder:text-muted-foreground
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
    />
  );
}
