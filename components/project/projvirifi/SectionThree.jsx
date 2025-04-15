import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <div className="py-8 relative flex flex-col justify-center bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group%206472.png')]">
      <div className="container">
        <h3 className="text-3xl lg:text-6xl text-center py-8 Gilroy-Bold">
          Design <span className="text-[#7600EB]"> Process</span>
        </h3>
        <div className="px-4 lg:px-48 lg:py-12">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6436.png"
            width={800}
            height={200}
            className="w-full"
            alt="Custom Software Development Company | Application Development Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
