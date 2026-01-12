export default function Radio() {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
        />
        JavaScript
      </label>
      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
          disabled
        />
        TypeScript
      </label>
      <label className="flex gap-1 items-center text-sm">
        <input
          type="radio"
          name="tech"
          value="JavaScript"
          className="accent-accent-foreground"
        />
        C#
      </label>
    </div>
  );
}
