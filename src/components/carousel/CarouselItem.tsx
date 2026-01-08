type CarouselItemProps = {
  children: React.ReactNode;
};

export default function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div className="min-w-60 h-70 snap-start rounded-lg bg-gray-100 p-6 flex items-center justify-center text-xl font-semibold">
      {children}
    </div>
  );
}
