import React from "react";
import { motion } from "framer-motion";

const Partnering = () => {
  return (
    <div className="flex justify-between bg-[#f7f7f7] ">
      <div className="py-30 px-8  w-[50%] border-e border-e-gray-300">
        <span className="text-[20px] leading-[28px] font-normal">
          / Partnering in health
        </span>
        <h1 className="text-[72px] leading-[85px] mt-5 relative  w-[112%] overflow-hidden  ">
          Intellec presentation
        </h1>
        <span className="text-[24px] leading-[34px] font-normal mt-16 ">
          Preventative & restorative dental treatments
        </span>
      </div>
      <div className="w-[55%] pt-25">
        <motion.h1
          className="text-[330px] leading-[260px] text-[#EEE2D9] text-center  overflow-hidden"
          animate={{
            x: [0, -2, -1, 1, 0],
          }}
          transition={{
            duration: 5,
            delay:2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          1997
        </motion.h1>
        
      </div>
    </div>
  );
};

export default Partnering;
