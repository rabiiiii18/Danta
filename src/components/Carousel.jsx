import React from "react";

const Carousel = () => {
  return (
    <div className="relative">
      <img   className="w-full h-[110vh] object-cover object-fit" src="/bg_2.jpg" alt="" />
      <div className="absolute bottom-0 right-0 top-[22%] w-[52%] mr-8 flex flex-col items-end">
        <div className="flex gap-6">
          <div className="h-26 w-26 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="w-[60px] h-[60px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/chair.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-26 w-26 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="w-[60px] h-[60px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/dental-care.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-26 w-26 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="w-[60px] h-[60px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/implant.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-26 w-26 bg-[#004149] flex justify-center items-center rounded-xl p-1 hover:bg-black  cursor-pointer">
            <h2 className="text-[16px] leading-[30px] text-white text-center ">
              Explore More
            </h2>
          </div>
        </div>
        <h1 className="text-[110px] leading-[140px] text-end font-normal ">
          Smiling with Healthy teeth
        </h1>
        <p className="text-[22px] leading-[32px] text-end mt-8">
          We have the specialists, the expertise & the equipment to help. <br /> We
          have fully integrated technology service.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
