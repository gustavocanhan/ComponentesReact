"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollNext() {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }

  function scrollPrev() {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }

  return (
    <div className="relative w-full">
      <button
        onClick={scrollPrev}
        className="absolute -left-15 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background text-accent-foreground hover:bg-muted-foreground/20 p-2 shadow"
      >
        <ChevronLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
      >
        {children}
      </div>

      <button
        onClick={scrollNext}
        className="absolute -right-15 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow bg-background text-accent-foreground hover:bg-muted-foreground/20"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
