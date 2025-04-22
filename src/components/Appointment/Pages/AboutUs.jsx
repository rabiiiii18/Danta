import React from "react";
import Navbar from "../../Navbar";
import WorkingHour from "../../WorkingHour";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto py-25 px-5 flex gap-10">
        <div className="w-[55%]">
          <span className="text-[20px] leading-[28px] font-normal">
            / Welcome to the Danta
          </span>
          <h1 className="text-[72px] leading-[85px] mt-5">
            About Our <br />
            Dentist Clinic
          </h1>
          <p className="text-base leading-[28px] mt-8 poppins text-justify  text-[#888] ">
            Our dental expert team has worked hard to create fun, vibrant space
            where we can provide phenomenal patient care and customer service.
            Our patients are our family, and we hope you’ll feel that way the
            second you walk through our door..
          </p>
          <div className="flex mt-20 gap-20">
            <div>
              <h1 className="text-[30px] leading-[35px] font-normal">
                Who we are ?
              </h1>
              <p className="poppins text-base leading-[28px] text-justify mt-8 text-[#888]">
                We combine a cutting- edge dentistry with team who treats you
                like family a, relaxing environment & an amenities that delight
                your dental health.
              </p>
              <p className="leading-base text-base text-[#004149] mt-5 hover:text-black cursor-pointer">
                View More
              </p>
            </div>
            <div>
              <h1 className="text-[30px] leading-[35px] font-normal">
                Our mission
              </h1>
              <p className="poppins text-base leading-[28px] text-justify mt-8 text-[#888]">
                Provide comprehensive & high-quality oral health -care services
                to patients. This includes promoting oral health, preventing
                dental diseases
              </p>
              <p className="leading-base text-base text-[#004149] mt-5 hover:text-black cursor-pointer">
                View More
              </p>
            </div>
          </div>
        </div>
        <div className="w-[45%]  ">
          <div className="flex justify-end h-full">
            <img className="rounded-3xl" src="/about-single-01.jpg" alt="" />
          </div>
        </div>
      </div>
      <WorkingHour/>
    </div>
  );
};

export default AboutUs;
