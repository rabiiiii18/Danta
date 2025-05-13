import React from "react";

const WorkingHour = () => {
  return (
    <div className="flex justify-between gap-30">
      <div className="w-[50%] flex justify-start items-center py-20 relative">
        
      </div>

      <div className="w-[35%] py-20 me-8">
        <h1 className="text-[72px] leading-[85px]">Working Hours</h1>
        <p className="text-base leading-[28px] poppins text-[#888] mt-8 text-justify pe-8">
          Our dental expert team has worked hard to create a fun, vibrant space
          where we can provide phenomenal patient care and customer service. Our
          patients are our family, and we hope you'll feel that way the second
          you walk through our door.
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="text-[24px] leading-[34px] font-normal">Monday - Friday</h1>
            <p className="text-base leading-[26px]">10 am - 6 pm</p>
          </div>
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="text-[24px] leading-[34px] font-normal">Saturday</h1>
            <p className="text-base leading-[26px]">10 am - 3 pm</p>
          </div>
          <div className="flex justify-between items-center h-20 border-b border-b-gray-300 pe-8">
            <h1 className="text-[24px] leading-[34px] font-normal">Sunday</h1>
            <p className="text-base leading-[26px]">Closed (Emergency Only)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHour;