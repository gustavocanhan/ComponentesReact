export default function Skeleton() {
  return (
    <div className="flex gap-2 w-full">
      <div>
        <div className="h-12 w-12 rounded-full bg-muted-foreground/20 animate-pulse" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="h-4 w-3/4 rounded bg-muted-foreground/20 animate-pulse" />
        <div className="h-4 w-full rounded bg-muted-foreground/20 animate-pulse" />
        <div className="h-4 w-5/6 rounded bg-muted-foreground/20 animate-pulse" />
      </div>
    </div>
  );
}
