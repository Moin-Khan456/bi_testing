import Image from "next/image";
import React from "react";

function staffBanner() {
  return (
    <div className="lg:h-screen relative">
      <Image
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/staffbanner.png"
        alt="Hire dedicated developers from Brain Inventory"
        width={700}
        height={700}
        priority="high"
        fetchPriority="high"
        className="w-full object-cover"
      />

      <div className="relative top-[-300px] container padding-left-all-section-1">
        <div className="grid lg:grid-cols-1x grid-cols-1">
          <div>
            <h1 className="lg:text-7xl text-4xl Gilroy-Bold">
              Hire Best Remote Developers by Brain Inventory
            </h1>
            <p className="pt-6 lg:pr-[14rem] pb-6 color-light text-lg ">
              If you want to increase your efficiency and speed up your product
              development, then you need to hire experienced developers.
            </p>
            <p className="lg:pr-[14rem] pb-6 color-light text-lg ">
              With our team of experienced developers, you can build large
              products faster than ever before. We&apos;re experienced in
              building apps for both enterprise and consumer markets, so we know
              how to take on any app project.
            </p>
            <p className="lg:pr-[14rem] pb-6 color-light text-lg ">
              We&apos;ll help you build a product that&apos;s ready for launch
              in no time at all and will be fully functional from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default staffBanner;
