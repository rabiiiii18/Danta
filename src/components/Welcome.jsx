import React from "react";

const Welcome = () => {
  return (
    <div className="h-[130vh] flex border-b border-b-gray-300 ">
      <div className="w-[65%] relative z-0 ">
        <div className="pt-20 ms-5 z-10 relative  ">
          <span className="text-[20px] leading-[28px] font-normal">
            / Welcome to the Danta
          </span>
          <h1 className="text-[72px] leading-[85px] mt-5">
            Welcome to Danta hospital & healthcare
          </h1>
          <div className="relative mt-16  w-[112%] overflow-hidden rounded-3xl shadow-md z-0">
            <img
              className="w-full h-[400px] object-fit"
              src="/single-01.png"
              alt="Doctors smiling"
            />
          </div>
        </div>
      </div>

      <div className="w-[55%]  border-l border-l-gray-300 flex pt-20 items-end flex-col">
        <div className="me-5">
          <img
            className="rounded-3xl shadow-lg"
            src="/after-img.png"
            alt="Before treatment"
          />
        </div>
        <p className="text-[22px] leading-[32px] w-[70%] mt-10 ">
          We have the specialists, the expertise & the equipment to help. We
          have fully integrated technology service.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
