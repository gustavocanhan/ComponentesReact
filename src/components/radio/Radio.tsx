type RadioProps = {
  label: string;
  value: string;
  nameGroup: string;
};

export default function Radio({ label, value, nameGroup }: RadioProps) {
  return (
    <label className="flex gap-1 items-center text-sm">
      <input
        type="radio"
        name={nameGroup}
        value={value}
        className="accent-accent-foreground"
      />
      {label}
    </label>
  );
}
