import React from "react";
import Navbar from "../../Navbar";
import WorkingHour from "../../WorkingHour";
import Journey from "../../Journey";
import Footer from "../../Footer";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto lg:py-25 py-10 lg:px-8 px-6 flex lg:flex-row flex-col gap-10 bg-[#F7F7F7]">
        <div className="lg:w-[55%] w-full">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="text-[20px] leading-[28px] font-normal">
            / Welcome to the Danta
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeIn' }}
            className="lg:text-[72px] text-[26px] lg:leading-[85px] mt-5">
            About Our
            Dentist Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeIn' }}
            className="text-base leading-[28px] lg:mt-8 mt-2 poppins text-justify  text-[#888] ">
            Our dental expert team has worked hard to create fun, vibrant space
            where we can provide phenomenal patient care and customer service.
            Our patients are our family, and we hope you’ll feel that way the
            second you walk through our door..
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeIn' }}
            className="flex lg:flex-row flex-col lg:mt-20 mt-10 lg:gap-20 gap-10 bg-white p-8 rounded-2xl shadow-md z-10">
            <div>
              <h1 className="text-[30px] leading-[35px] font-normal">
                Who we are ?
              </h1>
              <p className="poppins text-base leading-[28px] text-justify lg:mt-8 mt-2 text-[#888]">
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
              <p className="poppins text-base leading-[28px] text-justify lg:mt-8 mt-2 text-[#888]">
                Provide comprehensive & high-quality oral health -care services
                to patients. This includes promoting oral health, preventing
                dental diseases
              </p>
              <p className="leading-base text-base text-[#004149] mt-5 hover:text-black cursor-pointer">
                View More
              </p>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-[45%] w-full  ">
          <div className="flex justify-end h-full">
            <img className="rounded-3xl" src="/about-single-01.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white h-auto">
        <WorkingHour />
        <Journey />
      </div>
      <div className=" lg:mt-20 mt-10">
        <div className="flex justify-center items-center flex-col">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="text-[20px] leading-[28px] font-normal">
            / Work process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeIn' }}
            className="lg:text-[72px] text-[26px] lg:leading-[85px] lg:mt-5 mt-2 text-center lg:w-[60%]">
            Discover the Power of
            Your Smile.
          </motion.h1>
        </div>
        <div className="mx-20 flex justify-between lg:flex-row flex-col items-center my-10 gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="h-86 shadow-xl z-100 rounded-2xl w-86 flex justify-center items-center flex-col px-10 hover:bg-[#004149] lg:bg-white bg-[#004149] hover:text-white  lg:text-black  text-white transition-colors duration-500 ease-in-out">
            <h3 className="text-[28px] leading-[38px]">Cosmetic dentistry</h3>
            <p className="leading-[28px] text-base text-center mt-8">We focus on cosmetic dentistry aims to improve the aesthetics of teeth overall smile.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
            className="h-86 shadow-xl z-100 rounded-2xl w-86 flex justify-center items-center flex-col px-10 hover:bg-[#004149] lg:bg-white bg-[#004149] hover:text-white  lg:text-black  text-white  transition-colors duration-500 ease-in-out">
            <h3 className="text-[28px] leading-[38px]">Pediatric dentistry</h3>
            <p className="leading-[28px] text-base text-center mt-8">Trained to address unique dental needs & challenges that young patients face as develop.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
            className="h-86 shadow-xl z-100 rounded-2xl w-86 flex justify-center items-center flex-col px-10 hover:bg-[#004149] lg:bg-white bg-[#004149] hover:text-white  lg:text-black  text-white  transition-colors duration-500 ease-in-out">
            <h3 className="text-[28px] leading-[38px]">Dental implants</h3>
            <p className="leading-[28px] text-base text-center mt-8">A common way to replace missing teeth. They look & feel just like natural teeth way fitted</p>
          </motion.div>
        </div>
      </div>
      <Footer />


    </div>
  );
};

export default AboutUs;
