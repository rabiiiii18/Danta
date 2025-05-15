import { MoveUpRight } from "lucide";
import React from "react";
import { motion } from "framer-motion";

const MidCol = () => {
  return (
    <div className="h-auto flex lg:flex-row flex-col lg:mt-[1%] mt-[40%] lg:mb-8 mb-4">
      <div className="flex-1 ">
        <div className="flex flex-col h-full lg:pt-20 pt-10 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex-1  mx-10 flex h-[300px] border-b border-b-gray-300 lg:mb-5 "
          >
            <div className="flex gap-10">
              <div className="w-[30%]">
                <span className="lg:lg:text-[78px] text-[40px] leading-[98px] font-semibold">
                  10
                </span>
                <span>
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                  </svg>
                </span>
              </div>
              <div className="lg:mt-0 mt-6">
                <span className="text-[22px] leading-[32px]">
                  Certified dentists
                </span>
                <p className="text-[16px] leading-[28px] text-[#888]">
                  Skilled dental professionals at service
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="flex-1 mx-10 flex  h-[300px]  border-b border-b-gray-300  mb-5"
          >
            <div className="flex  gap-10">
              <div className="w-[30%]">
                <span className="lg:lg:text-[78px] text-[40px] leading-[98px] font-semibold">
                  15
                </span>
                <span>
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                  </svg>
                </span>
              </div>
              <div className="lg:mt-0 mt-6">
                <span className="text-[22px] leading-[32px]">
                  Treated patients
                </span>
                <p className="text-[16px] leading-[28px] text-[#888]">
                  Give excellence in orthodontic dentistry
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
            className="flex-1  mx-10 flex  h-[300px]  border-b border-b-gray-300  mb-5"
          >
            <div className="flex  gap-10">
              <div className="w-[30%]">
                <span className="lg:lg:text-[78px] text-[40px] leading-[98px] font-semibold">
                  63
                </span>
                <span>
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                  </svg>
                </span>
              </div>
              <div className="lg:mt-0 mt-6">
                <span className="text-[22px] leading-[32px]">
                  Organized chairty
                </span>
                <p className="text-[16px] leading-[28px] text-[#888]">
                  Dedicated development on global scale
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
            className="flex-1  mx-10 flex h-[300px]   mb-5"
          >
            <div className="flex  gap-10">
              <div className="w-[30%]">
                <span className="lg:text-[78px] text-[40px] leading-[98px] font-semibold">
                  25
                </span>
                <span>
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                  </svg>
                </span>
              </div>
              <div className="lg:mt-0 mt-6">
                <span className="text-[22px] leading-[32px]">
                  Overseas clinics
                </span>
                <p className="text-[16px] leading-[28px] text-[#888]">
                  Healthcare located over many countries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 border-x border-x-gray-300">
        <div className="lg:pt-20 pt-10 flex flex-col justify-center items-center lg:mx-10 mx-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="lg:text-[48px] text-[26px] lg:leading-[58px] font-normal"
          >
            We creating bright beautiful smiles happen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
            className="lg:mt-8  mt-2 text-base leading-[28px] text-justify text-[#888]"
          >
            Expanding group of dental practices across the World. With the
            skills and knowledge we have gathered over many years of working
            privately and within the ABC, we ensure your care remains at the
            heart of everything we do and make your beautiful smile.
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
            className="rounded-3xl  h-60 mt-10"
            src="/single-img-02.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex-1 ">
        <div className="lg:pt-25 pt-8  lg:mx-12 mx-6 ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="rounded-3xl h-60 w-full"
            src="/single-img-03.jpg"
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
            className="text-[22px] leading-[32px] font-normal mt-8 lg:text-justify text-center"
          >
            Skilled dental professionals conduct high-quality treatments
            covering all specialities, striving for excellent patient care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
            className="lg:my-8 my-4 flex gap-3 lg:justify-start justify-center items-center"
          >
            <p className="text-[16px] leading-[16px] font-normal hover:text-[#00272c]">
              What we Do
            </p>
            <div className="bg-[#ece2da] h-[35px] w-[35px] rounded-full flex justify-center items-center p-1 cursor-pointer transition-transform group">
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
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right transform transition-transform duration-300 group-hover:rotate-45"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MidCol;
