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
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,delay:0.3, ease: 'easeIn' }}
          className="lg:text-[72px] text-[36px] lg:leading-[85px] font-nomal text-center  ">
          Are you facing any <br />
          problem in your teeth?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7,delay:0.5, ease: 'easeIn' }}
        >
          <button className="px-6 lg:py-3 py-4 lg:text-base text-[18px] leading-[16px] mt-8 bg-[#004149] text-white rounded-md cursor-pointer hover:bg-black">
            Contact Us Now
          </button>
        </motion.div>
        <img className="mt-10" src="/single-img-04.png" alt="" />
      </div>
    </div>
  );
};

export default OurTeam;
