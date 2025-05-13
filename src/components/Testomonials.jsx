import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Testomonials = () => {
  return (
    <div className="bg-[rgb(1,57,63)] relative mt-8">
      <img
        className="absolute inset-0 w-full h-auto object-cover opacity-70"
        src="/row-bgimage-2.png"
        alt=""
      />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-400 dark:text-white">
                  “Booking my appointment was incredibly easy. The clinic was
                  super professional, and I loved how I got reminders before my
                  visit. Highly recommended!”
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center flex-col mt-6 space-x-3">
                <svg
                  width="130px"
                  height="130px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="circleClip">
                      <path d="M12 17.5C13.5 17.5 14.5 20.5 15.5 20.5C17.5 20.5 20.5 12 20.5 8C20.5 6.08134 19 4.5 17 4.5C15 4.5 13.5 6.5 12 6.5C10.5 6.5 9 4.5 7 4.5C5 4.5 3.5 6 3.5 8C3.5 12 6.5 20.5 8.5 20.5C9.5 20.5 10.5 17.5 12 17.5Z" />
                    </clipPath>
                  </defs>

                  <image
                    href="/doctor-01.png"
                    width="24"
                    height="24"
                    clipPath="url(#circleClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div>
                  <div className="flex  flex-col items-center">
                    <div className=" font-medium text-[19px] leading-[32px] text-gray-400 ">
                      Micheal Gough
                    </div>
                    <div className=" text-[14px] leading-[28px] font-light text-gray-400">
                      CEO at Danta
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-400 dark:text-white">
                  “Booking my appointment was incredibly easy. The clinic was
                  super professional, and I loved how I got reminders before my
                  visit. Highly recommended!”
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center flex-col mt-6 space-x-3">
                <svg
                  width="130px"
                  height="130px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="circleClip">
                      <path d="M12 17.5C13.5 17.5 14.5 20.5 15.5 20.5C17.5 20.5 20.5 12 20.5 8C20.5 6.08134 19 4.5 17 4.5C15 4.5 13.5 6.5 12 6.5C10.5 6.5 9 4.5 7 4.5C5 4.5 3.5 6 3.5 8C3.5 12 6.5 20.5 8.5 20.5C9.5 20.5 10.5 17.5 12 17.5Z" />
                    </clipPath>
                  </defs>

                  <image
                    href="/doctor-01.png"
                    width="24"
                    height="24"
                    clipPath="url(#circleClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div>
                  <div className="flex  flex-col items-center">
                    <div className=" font-medium text-[19px] leading-[32px] text-gray-400 ">
                      Micheal Gough
                    </div>
                    <div className=" text-[14px] leading-[28px] font-light text-gray-400">
                      CEO at Google
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testomonials;
