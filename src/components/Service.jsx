import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="relative bg-[rgb(1,57,63)] text-white text-center py-20 px-4 h-auto">
      <div className="absolute inset-0 bg-[url('/row-bgimage-1.png')] bg-cover bg-fixed opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="text-[20px] leading-[28px]"
        >
          / Our Service
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
          className="lg:text-[72px] text-[26px] lg:leading-[85px] "
        >
          Discover the dental clinic
        </motion.h1>
      </div>
      <div className="mt-10 flex justify-between gap-8  flex-wrap">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        className="lg:h-[340px] lg:w-[48%] rounded-2xl overflow-hidden z-10 relative group">
          <img
            src="/service-03.png"
            alt="Teeth Protection Service"
            className="w-full h-full object-cover "
          />{" "}
          <div className="absolute inset-0 bg-black/55"></div>{" "}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
              Teeth Protection
            </h2>
            <p className="text-base leading-[28px] mb-6 text-left">
              To detect any dental problems provide good treatments.
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-base font-medium">View More</span>
              <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="black"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        className="lg:h-[340px] lg:w-[48%] rounded-2xl overflow-hidden z-10 relative group">
          <img
            src="/service-02.png"
            alt="Teeth Protection Service"
            className="w-full h-full object-cover bg-blend-darken"
          />
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
              Teeth Braces
            </h2>

            <p className="text-base leading-[28px]  mb-6 text-left">
              Effective methods for achieving a properly aligned smile
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-base font-medium">View More</span>
              <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="black"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        className="lg:h-[340px] lg:w-[48%] rounded-2xl overflow-hidden z-10 relative group">
          <img
            src="/service-09.png"
            alt="Teeth Protection Service"
            className="w-full h-full object-cover bg-blend-darken "
          />{" "}
          <div className="absolute inset-0 bg-black/55"></div>{" "}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className=" text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
              Alignment
            </h2>
            <p className="text-base leading-[28px]  mb-6 text-left">
              Focuses on the alignment and positioning of teeth & jaws.
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-base font-medium">View More</span>
              <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="black"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        className="lg:h-[340px] lg:w-[48%] rounded-2xl overflow-hidden z-10 relative group">
          <img
            src="/service-08.png"
            alt="Teeth Protection Service"
            className="w-full h-full object-cover bg-blend-darken "
          />{" "}
          <div className="absolute inset-0 bg-black/55"></div>{" "}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
              Root Therapy
            </h2>
            <p className="text-base leading-[28px]  mb-6 text-left">
              Dental procedure used to treat infection at centre tooth.
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-base font-medium">View More</span>
              <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  color="black"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="mt-15 text-[16px] leading-[28x] text-[#ffffff80]">
        Don’t hesitate, contact us for better help and services.{" "}
        <span className="underline text-white">Explore al service</span>
      </p>
    </div>
  );
};

export default Service;
