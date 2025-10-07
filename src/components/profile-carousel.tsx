"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const profileImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_fe93pzfe93pzfe93-wVNB0kOmh8lgkBtLrP213jMdwVI6bR.png",
    alt: "Jorge Meyrelles Jr. - Professional Photo 1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_hl1r6xhl1r6xhl1r-QPQx7v1ElVuxkYYf5xq93iG6qgw2kB.png",
    alt: "Jorge Meyrelles Jr. - Professional Photo 2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mysocsmysocsmyso-TI2B5S50n8qWNyGMNmZ0YoqMqz4CIe.png",
    alt: "Jorge Meyrelles Jr. - Professional Photo 3",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_g21q6ng21q6ng21q-oawlX4DrdMIdlpTox31xywFLW0p8mH.png",
    alt: "Jorge Meyrelles Jr. - Professional Photo 4",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7bhflk7bhflk7bhf-nZ25DJtgYn4ckOgWFWzvadfjMEzmYa.png",
    alt: "Jorge Meyrelles Jr. - Professional Photo 5",
  },
];

export function ProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % profileImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + profileImages.length) % profileImages.length
    );
  };

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
        {profileImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-contain p-4"
              priority={index === 0}
              sizes="(max-width: 768px) 320px, 384px"
            />
          </div>
        ))}

        {/* Indicadores de navegação */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {profileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay com gradiente sutil para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
