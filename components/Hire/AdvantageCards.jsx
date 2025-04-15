import React from "react";

export default function KeySkill({ title, subhead, benefitsList }) {
  return (
    <div>
      <div className="container padding-left-all-section-1 lg:pb-12 max-w-full">
        <div className="p-8 advantage-para lg:m-0 my-6">
          <h3 className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold mb-8 leading-10">
            Advantages of Hiring a{" "}
            <span className="text-[#7600EB]">{title}</span>
          </h3>
          <p className="Gilroy-Light text-xs text-white w-full lg:w-[100%] tracking-wide leading-8">
            {subhead}
          </p>
          <div className="">
            <div>
              <div className="flex flex-col lg:flex-row justify-between w-full py-8">
                {" "}
                {benefitsList?.map((ele, index) => (
                  <div
                    className={`bg-customer p-8 ${
                      benefitsList.length > 3 ? "lg:w-[30%]" : "lg:w-[45%]"
                    } my-8 mx-4 hover:scale-[1.05] duration-150 ease-in-out`}
                    key={index}
                  >
                    <p className="opacity-50">{ele}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
