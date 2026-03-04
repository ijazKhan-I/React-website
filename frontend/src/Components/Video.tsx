import React from "react";

type GifOverlayProps = {
  gifUrl: string;
  title: string;
  paragraph: string;
  alt?: string;
  className?: string;
};

const GifOverlay: React.FC<GifOverlayProps> = ({
  gifUrl,
  title,
  paragraph,
  alt = "animation",
  className = "",
}) => {
  return (
    <div className={`relative group overflow-hidden shadow-2xl ${className}`}>
      
      {/* GIF */}
      <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-video lg:aspect-[16/7] overflow-hidden">
        <img
          src={gifUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 "
          loading="lazy"
        />
      </div>

      {/* Overlay background */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 z-20">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default GifOverlay;