import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <div className="relative">
      <img
        className="w-full lg:h-[110vh] h-[35vh] object-cover object-fit"
        src="/bg_2.jpg"
        alt=""
      />
      <div className="absolute bottom-0 right-0  top-[2%] lg:w-[52%] lg:mr-8 flex flex-col lg:items-end items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-6"
        >
          <div className="lg:h-26 h-18 lg:w-26 w-18 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/chair.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:h-26 h-18 lg:w-26 w-18 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/dental-care.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:h-26 h-18 lg:w-26 w-18 bg-white flex justify-center items-center rounded-xl ">
            <img
              className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/revslider/dentist-demo-main-home-slider/implant.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:h-26 h-18 lg:w-26 w-18 bg-[#004149] flex justify-center items-center rounded-xl p-1 hover:bg-black  cursor-pointer">
            <h2 className="lg:text-[16px] text-[12px] lg:leading-[30px] text-white text-center ">
              Explore More
            </h2>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-[110px] text-[30px] lg:leading-[140px] leading-13 lg:text-end text-justify font-normal mt-10"
        >
          Smiling with Healthy teeth
        </motion.h1>
        <motion.p
        initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 ,delay
            : 0.5
          }}
        className="lg:text-[22px] text-base leading-[32px] text-center lg:text-end lg:mt-8 mt-2 lg:mx-1 mx-4">
          We have the specialists, the expertise & the equipment to help. We
          have fully integrated technology service.
        </motion.p>
      </div>
    </div>
  );
};

export default Carousel;
