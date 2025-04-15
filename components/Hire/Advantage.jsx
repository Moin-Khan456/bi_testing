import React from "react";

export default function Advantage({
  subhead = null,
  title,
  enableBtn = true,
  advantages,
  btn = null,
}) {
  return (
    <div className="lg:mt-52">
      <div className="container padding-left-all-section-1 lg:mt-24">
        <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6 mt-[200px]">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            {subhead ? subhead : "Advantages to Hiring"}{" "}
            <span className="text-[#7600EB]">{title}</span>
          </h2>
          {advantages?.map((ele, index) => (
            <p className="Gilroy-Light pb-6" key={index}>
              {ele}
            </p>
          ))}
          {enableBtn && (
            <a href="#talk">
              <button className="rounded-2xl bg-contact-c py-4 w-full px-4">
                <p className="p-0 pb-0 text-xs">Got a project in mind?</p>
                <p className="p-0 Gilroy-Bold text-white !opacity-100 text-xl pt-3">
                  {btn ?? "Contact Us!"}
                </p>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
