import React from "react";
import Image from "next/image";
const Index = ({ carouselImages }) => {
  return (
    <div className="container py-8 relative flex flex-col justify-center ">
      <h3 className="flex text-end justify-center text-3xl lg:text-6xl Gilroy-Bold lg:mx-44">
        Screen <span className="text-[#7600EB]"> Visuals</span>{" "}
      </h3>
      <div className="px-4 lg:px-48 lg:py-12">
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask+Group+275.png"
          width={900}
          height={600}
          alt="Custom Software Development Company | Application Development Company"
          className="m-auto block"
        />
      </div>
    </div>
  );
};

export default Index;
