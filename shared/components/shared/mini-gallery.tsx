import { cn } from "@/shared/lib/utils";
import React from "react";
import { Carousel } from "../ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { title } from "process";

interface MiniGalleryProps {
  className?: string;
  gallery: string[];
  title?: string;
}
export const MiniGallery = ({ className, gallery }: MiniGalleryProps) => {
  return (
    <div
      className={cn(
        "w-[300px] min-sm:w-[450px]  min-md:w-[900px] h-[180px] min-sm:h-[265px] min-md:h-[530px] mx-auto",
        className
      )}
    >
      <Carousel>
        <CarouselContent>
          {gallery.map((url, index) => (
            <CarouselItem key={index}>
              <div className="grid place-items-center  ">
                <img
                  src={url}
                  alt={"Фото для посту" + title ? " - " + title : ""}
                  className="w-[300px] min-sm:w-[450px]  min-md:w-[900px] h-[180px] min-sm:h-[265px] min-md:h-[530px] object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent hover:opacity-50   hover:bg-transparent" />
        <CarouselNext className="bg-transparent hover:opacity-50 hover:bg-transparent" />
      </Carousel>
    </div>
  );
};
