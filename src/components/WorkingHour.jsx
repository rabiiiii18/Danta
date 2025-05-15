import React from "react";

const WorkingHour = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col-reverse  lg:mx-0 mx-6 lg:gap-30 ">

      <div className="relative w-full lg:w-[50%] overflow-visible lg:py-20 ">
        <div className="absolute left-0 sm:left-10 md:left-14 lg:left-20 w-full sm:w-[110%] md:w-[115%] lg:w-[105%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] z-10 rounded-2xl bg-black">
          <video className="w-full h-full object-cover rounded-2xl" controls>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="lg:w-[35%] w-full lg:py-20 py-10 lg:me-8">
        <h1 className="lg:text-[72px] text-[26px] lg:leading-[85px]">Working Hours</h1>
        <p className="text-base leading-[28px] poppins text-[#888] lg:mt-8 mt-4 text-justify lg:pe-8">
          Our dental expert team has worked hard to create a fun, vibrant space
          where we can provide phenomenal patient care and customer service. Our
          patients are our family, and we hope you'll feel that way the second
          you walk through our door.
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="lg:text-[24px] text-[19px] lg:leading-[34px] font-normal">Monday - Friday</h1>
            <p className="text-base leading-[26px]">10 am - 6 pm</p>
          </div>
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="lg:text-[24px] text-[19px] lg:leading-[34px] font-normal">Saturday</h1>
            <p className="text-base leading-[26px]">10 am - 3 pm</p>
          </div>
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="lg:text-[24px] text-[19px] lg:leading-[34px] font-normal">Sunday</h1>
            <p className="text-base leading-[26px]">Closed (Emergency Only)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHour;