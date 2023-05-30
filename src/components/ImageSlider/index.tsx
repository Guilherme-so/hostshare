import { useState } from "react";
import ChevronLeft from "../Icons/chevronLeft";

const ImageSlider = ({
  slides,
  showBottons,
}: {
  slides: any;
  showBottons: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToCurrent = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="w-full h-full rounded-lg bg-cover bg-center relative">
      <div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className={`
          ${showBottons ? "flex" : "hidden"}
          absolute top-2/4 translate-y-[-50%] left-3 text-2xl text-white z-10 cursor-pointer
          h-7 w-7 rounded-full bg-white
            items-center justify-center
          `}
        >
          <ChevronLeft />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className={`
          ${showBottons ? "flex" : "hidden"}
          absolute top-2/4 translate-y-[-50%] right-3 text-2xl text-white z-10 cursor-pointer
          h-7 w-7 rounded-full bg-white
           items-center justify-center
          `}
        >
          <ChevronLeft className="rotate-180" />
        </div>
      </div>
      <div
        className="transition w-full h-full rounded-xl bg-cover bg-center"
        style={slideStylesWidthBackground}
      ></div>
      <div className="absolute bottom-2 translate-y-[-50%] flex justify-center">
        {slides.map((slide: any, slideIndex: number) => (
          <div
            className="hidden mx-[3px] text-white cursor-pointer text-[6px]"
            key={slideIndex}
            onClick={() => goToCurrent(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
