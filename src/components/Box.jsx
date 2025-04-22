import React from "react";
import { motion } from "framer-motion";
const Box = () => {
  return (
    <div className="flex gap-5 mx-8">
      <div className="h-90 flex-1 flex relative group">
        <img
          className="absolute object-cover rounded-xl h-full w-full scale-95 group-hover:scale-100 transition-transform duration-500"
          src="/box1.png"
          alt=""
        />
        <div className="absolute inset-0 transition duration-400 rounded-xl ease-in-out group-hover:bg-black/55"></div>
        <div className="absolute opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-40 px-6">
          <h4 className="text-[24px] leading-[34px] text-white font-normal">
            Teeth Whitening
          </h4>
          <p className="text-base leading-[28px] mt-6 text-white">
            Brighten your smile with safe and effective whitening treatments.
          </p>
        </div>
      </div>

      <div className=" h-90 flex-1 flex relative group ">
        <img
          className="absolute object-cover rounded-xl h-full w-full scale-95 group-hover:scale-100 transition-transform duration-300"
          src="/box2.png"
          alt=""
        />

        <div className="absolute inset-0 transition duration-400 rounded-xl ease-in-out group-hover:bg-black/55"></div>
        <div className="absolute opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-40 px-6">
          <h4 className="text-[24px] leading-[34px] text-white font-normal">
            Root Therapy
          </h4>
          <p className="text-base leading-[28px] mt-6 text-white">
            Save your natural tooth and relieve pain with expert root therapy.
          </p>
        </div>
      </div>

      <div className=" h-90 flex-1 flex relative group">
        <img
          className="absolute object-cover rounded-xl h-full w-full scale-95 group-hover:scale-100 transition-transform duration-300"
          src="/box3.png"
          alt=""
        />

        <div className="absolute inset-0 transition duration-400 rounded-xl ease-in-out group-hover:bg-black/55"></div>
        <div className="absolute opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-40 px-6">
          <h4 className="text-[24px] leading-[34px] text-white font-normal">
            Teeth Braces
          </h4>
          <p className="text-base leading-[28px] mt-6 text-white">
            Straighten your teeth and improve your bite with modern braces.
          </p>
        </div>
      </div>
      
      <div className=" h-90 flex-1 flex relative group">
        <img
          className="absolute object-cover rounded-xl h-full w-full scale-95 group-hover:scale-100 transition-transform duration-300"
          src="/box4.png"
          alt=""
        />
        <div className="absolute inset-0 transition duration-400 rounded-xl ease-in-out group-hover:bg-black/55"></div>
        <div className="absolute opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-40 px-6">
          <h4 className="text-[24px] leading-[34px] text-white font-normal">
            Teeth Protection
          </h4>
          <p className="text-base leading-[28px] mt-6 text-white">
            Shield your teeth from damage with expert preventive care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
