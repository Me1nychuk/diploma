import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
interface CustomCarouselProps {
  className?: string;
  size?: number;
}

const arr = [
  {
    url: "https://images.unsplash.com/photo-1553901753-215db344677a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1553748024-d1b27fb3f960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const CustomCarousel = ({
  size = 250,
  className,
}: CustomCarouselProps) => {
  return (
    <>
      <Carousel className={cn("  ", ` h-[${size}px]  max-w-[${size}px]`)}>
        <CarouselContent className={`max-w-[${size}px]  min-h-full`}>
          {arr.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                alt={"image" + index}
                src={item.url}
                className={`max-w-full  object-cover`}
                width={size}
                height={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="h-5 w-5 border-none hover:bg-secondary bg-transparent transition-all duration-200 -left-1 -translate-x-full" />
        <CarouselNext className="h-5 w-5  border-none hover:bg-secondary bg-transparent transition-all duration-200 -right-1 translate-x-full" />
      </Carousel>
    </>
  );
};
