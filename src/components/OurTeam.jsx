import React from "react";
import { motion } from "framer-motion";
const OurTeam = () => {
  return (
    <div className="flex justify-center items-center pt-20 flex-col  ">
      {/* <motion.h1
        className="text-[200px] leading-[180px] text-[#EEE2D9] text-center "
        animate={{
          x: [0, -5, 2, -1, 1, 0],
        }}
        transition={{
          duration: 5,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        We're <br />
        stronger
      </motion.h1> */}
      <div className="flex justify-center items-center flex-col ">
        <p className="text-[72px] leading-[85px] font-nomal text-center  ">
          Are you facing any <br />
          problem in your teeth?
        </p>
        <button className="px-6 py-3 text-base leading-[16px] mt-8 bg-[#004149] text-white rounded-md cursor-pointer hover:bg-black">
          Contact Us Now
        </button>
        <img className="mt-10" src="/single-img-04.png" alt="" />
      </div>
    </div>
  );
};

export default OurTeam;
