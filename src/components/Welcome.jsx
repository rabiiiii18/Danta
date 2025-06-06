import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="h-[110vh] flex lg:flex-row  flex-col border-b border-b-gray-300 ">
      <motion.div
       initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.5}}
      className="lg:w-[65%] w-full relative z-0 ">
        <div className="lg:pt-20 pt-10 lg:ms-5 mx-6 z-10 relative  ">
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
      </motion.div>

      <motion.div 
       initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.5}}
      className="lg:w-[55%] lg:border-l lg:border-l-gray-300 flex pt-20 lg:items-end items-center lg:mx-0 mx-6 flex-col">
        <div className="lg:me-5">
          <img
            className="rounded-3xl shadow-lg w-full object-fit"
            src="/after-img.png"
            alt="Before treatment"
          />
        </div>
        <p className="text-[22px] leading-[32px] lg:w-[70%] text-center lg:text-center mt-10 ">
          We have the specialists, the expertise & the equipment to help. We
          have fully integrated technology service.
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;
