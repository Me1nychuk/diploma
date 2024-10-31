import { cn } from "@/shared/lib/utils";
import React from "react";

type photo = {
  url: string;
  alt: string;
};
interface MiniGalleryProps {
  className?: string;
  gallery?: photo[];
}
const photos = [
  {
    url: "https://images.wallpaperscraft.ru/image/single/kompiuter_materinskaia_plata_kuler_201602_1280x720.jpg",
    alt: "IT FOTO",
  },
  {
    url: "https://images.wallpaperscraft.ru/image/single/bukvy_staryj_pechatnaia_mashinka_290439_1280x720.jpg",
    alt: "IT FOTO",
  },
  {
    url: "https://images.wallpaperscraft.ru/image/single/kod_simvoly_programmirovanie_178845_1280x720.jpg",
    alt: "IT FOTO",
  },
];
export const MiniGallery = ({
  className,
  gallery = photos,
}: MiniGalleryProps) => {
  return (
    <>
      <ul className={cn("mini-gallery", className)}>
        {gallery?.map((photo, index) => (
          <li key={index} className="mini-gallery-item">
            <img src={photo.url} alt={photo.alt} />
          </li>
        ))}
      </ul>
    </>
  );
};
