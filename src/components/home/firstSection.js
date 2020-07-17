import React from "react";
import blackImg from "../../assets/imgs/black.png";
import orangeImg from "../../assets/imgs/orange.png";

function FirstSection() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="w-1/2 items-center">
          <div className="border-primary border-0 sm:pr-8 sm:border-r-2">
            <div className="text-2xl mx-6 text-center sm:text-right md:text-right text-primary">
              Best shoes in Pakistan
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-full w-64 min-w-0 mt-12 mx-auto h-64 bg-gray-900">
          <div className="">
            <img className="img-bx" src={blackImg} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex md:flex-row flex-col justify-between items-center">
        <div className="w-1/2 items-center">
          <div className="border-primary border-0  sm:pr-8 sm:border-r-2">
            <div className="text-2xl mx-6 text-center sm:text-right text-primary">
              So what are you waiting for?
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-full w-64 min-w-0 mt-12 mx-auto h-64 bg-orange-900">
          <div className="">
            <img className="img-bx" src={orangeImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
