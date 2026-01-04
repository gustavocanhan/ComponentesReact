type InputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
};

export function InputLabel({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <label htmlFor={id}>{label}</label>
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
    </div>
  );
}
