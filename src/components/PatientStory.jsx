import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const PatientStory = () => {
  const slides = [
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
    { image: "/box1.png", title: "Root therapy Case", name: "Sam Smith" },
  ];

  return (
    <div className="flex justify-between lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full ">
        <div className="lg:py-30 py-10 px-8   border-e border-e-gray-300">
          <span className="text-[20px] leading-[28px] font-normal">
            / Patient Story
          </span>
          <h1 className=" lg:w-[80%] lg:text-[72px] text-[26px] lg:leading-[85px] lg:mt-5 mt-4 relative  overflow-hidden  ">
            Our cases & patient stories
          </h1>
          <p className="text-base leading-[28px] font-normal mt-4 text-[#888] text-justify ">
            We take pride in helping our patients overcome injuries, relieve
            pain & return to active their healthy lifestyles.
          </p>
          <button className="px-6 py-3 text-base leading-[16px] bg-[#004149] text-white rounded-md mt-10 cursor-pointer hover:bg-black">
            Contact Us
          </button>
        </div>
      </div>
      <div className="lg:w-1/2  h-auto flex justify-between items-center z-50 ms-2 lg:p-2 p-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000, // time in ms
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            430: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id || index}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src="/patient-04.png"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end text-white p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-sm">{slide.name}</p>
                  {slide.details && (
                    <p className="text-xs mt-1">{slide.details}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PatientStory;
