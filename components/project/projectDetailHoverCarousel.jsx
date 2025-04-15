import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeIndex === images?.length * 2) {
      setActiveIndex(0);
      containerRef.current.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  }, [activeIndex, images?.length]);

  const handlePrev = () => {
    if (activeIndex === 0)
      setActiveIndex(activeIndex + duplicatedImages.length);
    setActiveIndex(activeIndex - 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex - 1) * containerRef.current.offsetWidth -
        (activeIndex - 1) * 50,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (activeIndex === duplicatedImages.length - 1) setActiveIndex(0);
    setActiveIndex(activeIndex + 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex + 1) * containerRef.current.offsetWidth -
        (activeIndex + 1) * 50,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div className="relative px-2 lg:px-12">
        <div
          className="whitespace-nowrap flex flex-col lg:flex-row project-detail-carousel"
          ref={containerRef}
          style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
        >
          {images?.map((image, index) => (
            <div
              className="inline-block m-2 lg:m-8 w-full lg:w-1/2 relative"
              key={image.id}
            >
              <Image  
         
                src={image.url}
                alt={`Image ${index + 1}`}
                width={700}
                height={700}
                className="rounded-3xl relative z-50 lg:hover:opacity-0 lg:top-[10%] ease-in-out duration-300"
              />
              <Image  
         
                src={image.hover}
                alt={`Image ${index + 1}`}
                width={700}
                height={700}
                className="rounded-3xl z-10 absolute top-8 hidden lg:block "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
