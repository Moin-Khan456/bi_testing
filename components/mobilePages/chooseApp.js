import Link from "next/link";
import React, { Component } from "react";

const ChooseApp = () => {
  return (
    <div className="px-4 lg:px-14">
      <div className="container">
        <div>
          <h2 className="Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8">
            why choose brain inventory for <br /> mobile app development
          </h2>
          <p className="mb-8">
            Being a well-known{" "}
            <Link href="javascript:void(0)" className="text-[#2186ff]">
              mobile application development company
            </Link>
            , Brain Inventory is recognized for serving modern business needs
            and delivering the best-in-class solutions at a competitive cost
            across the globe. Here’s why we can be the best choice when it comes
            to building mobile apps:
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-4 gap-0">
          <div className="bg-development-simply-culture mb-4 lg-mb-0">
            <h2>Customer Satisfaction</h2>
            <p>
              We work on the latest frameworks and technologies to deliver you
              user-friendly, scalable, secure, and new business solutions as per
              your need.
            </p>
          </div>

          <div className="bg-development-simply-culture mb-4 lg-mb-0">
            <h2>Agile Procedure</h2>
            <p>
              We work on the latest frameworks and technologies to deliver you
              user-friendly, scalable, secure, and new business solutions as per
              your need.
            </p>
          </div>

          <div className="bg-development-simply-culture mb-4 lg-mb-0">
            <h2>Dedicated Teams</h2>
            <p>
              We have a dedicated{" "}
              <Link
                href="/hire-dedicated-remote-developers"
                className="text-[#2186ff]"
              >
                team of mobile app developers
              </Link>{" "}
              who are well versed in delivering high-end business solutions on
              several frameworks and technologies.
            </p>
          </div>

          <div className="bg-development-simply-culture mb-4 lg-mb-0">
            <h2>Integrity & Transparency</h2>
            <p>
              We respect your ideas and vision, provide you every small project
              detail regularly, and consider your worthy advice when and as
              needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseApp;
