import React from "react";

const Welcome = () => {
  return (
    <div className="h-[110vh] flex lg:flex-row  flex-col border-b border-b-gray-300 ">
      <div className="lg:w-[65%] w-full relative z-0 ">
        <div className="pt-20 lg:ms-5 mx-4 z-10 relative  ">
          <span className="text-[20px] leading-[28px] font-normal">
            / Welcome to the Danta
          </span>
          <h1 className="lg:text-[72px] text-[26px] lg:leading-[85px] lg:mt-5 mt-3">
            Welcome to Danta hospital & healthcare
          </h1>
          <div className="relative mt-16  lg:w-[112%] w-full overflow-hidden rounded-3xl shadow-md z-0">
            <img
              className="w-full lg:h-[400px] h-[300px] object-fit"
              src="/single-01.png"
              alt="Doctors smiling"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[55%]  border-l border-l-gray-300 flex pt-20 lg:items-end items-center flex-col">
        <div className="lg:me-5">
          <img
            className="rounded-3xl shadow-lg"
            src="/after-img.png"
            alt="Before treatment"
          />
        </div>
        <p className="text-[22px] leading-[32px] lg:w-[70%] text-center lg:items-end mt-10 ">
          We have the specialists, the expertise & the equipment to help. We
          have fully integrated technology service.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
