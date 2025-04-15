import React from "react";

export default function Advantage({
  title,
  reasons,
  subhead,
  subhead1 = false,
}) {
  return (
    <div className="container px-4 lg:px-12 py-10">
      <h3 className="text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10">
        Advantages of Hiring {subhead1 ? subhead1 : null}{" "}
        <span className="text-[#7600EB]">{title}</span>
      </h3>
      <p className="Gilroy-Semibold font-semibold leading-7 tracking-wider text-lg p-4 lg:p-10 opacity-60 lg:pt-8">
        {subhead}
      </p>
      <div className="flex flex-col my-8 h-auto ">
        {reasons?.map((ele, index) => (
          <div
            key={index}
            className="bg-customer px-6 py-8 mx-8 text-start text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider"
          >
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
