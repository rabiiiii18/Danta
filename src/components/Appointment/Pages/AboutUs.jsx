import React from "react";
import Navbar from "../../Navbar";
import WorkingHour from "../../WorkingHour";
import Journey from "../../Journey";
import Footer from "../../Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto py-25 px-8 flex gap-10 bg-[#F7F7F7]">
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
          <div className="flex mt-20 gap-20 bg-white p-8 rounded-2xl shadow-md z-10">
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
      <div className="bg-white">
        <WorkingHour />
        <Journey />
      </div>
      <div className=" mt-20">
        <div className="flex justify-center items-center flex-col">
          <span className="text-[20px] leading-[28px] font-normal">
            / Work process
          </span>
          <h1 className="text-[72px] leading-[85px] mt-5 text-center">
            Discover the Power of <br />
            Your Smile.
          </h1>
        </div>
        <div className="mx-20 flex justify-between items-center my-10">
          <div className="h-96 shadow-xl z-100 rounded-2xl w-96 flex justify-center items-center flex-col px-10 hover:bg-[#004149] hover:text-white transition-colors duration-500 ease-in-out">
            <h3 className="text-[28px] leading-[38px]">Cosmetic dentistry</h3>
            <p className="leading-[28px] text-base text-center mt-8">We focus on cosmetic dentistry aims to improve the aesthetics of teeth overall smile.</p>
          </div>
          <div className="h-96 shadow-xl z-100 rounded-2xl w-96 flex justify-center items-center flex-col px-10 hover:bg-[#004149] hover:text-white transition-colors duration-500 ease-in-out">


            <h3 className="text-[28px] leading-[38px]">Pediatric dentistry</h3>
            <p className="leading-[28px] text-base text-center mt-8">Trained to address unique dental needs & challenges that young patients face as develop.</p>
          </div>

          <div className="h-96 shadow-xl z-100 rounded-2xl w-96 flex justify-center items-center flex-col px-10 hover:bg-[#004149] hover:text-white transition-colors duration-500 ease-in-out">

            <h3 className="text-[28px] leading-[38px]">Dental implants</h3>
            <p className="leading-[28px] text-base text-center mt-8">A common way to replace missing teeth. They look & feel just like natural teeth way fitted</p>
          </div>
        </div>

      </div>
      <Footer />


    </div>
  );
};

export default AboutUs;
