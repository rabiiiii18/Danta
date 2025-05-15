import React from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import PatientStory from "../../PatientStory";
import Testomonials from '../../Testomonials'
import Footer from '../../Footer'

const Service = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="lg:text-[72px] text-[26px] lg:leading-[85px] text-center lg:mt-20 mt-10">
          We provide quality <br />
          dental care
        </h1>
        <div className="lg:mx-8 mx-6 lg:mt-15 mt-12 grid  lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="h-[280px] flex-1 rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-03.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover "
            />{" "}
            <div className="absolute inset-0 bg-black/55"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Teeth Protection
              </h2>
              <p className="text-base leading-[28px] mb-6 text-left">
                To detect any dental problems provide good treatments.
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[280px] flex-1 rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-02.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover bg-blend-darken"
            />
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Teeth Braces
              </h2>

              <p className="text-base leading-[28px]  mb-6 text-left">
                Effective methods for achieving a properly aligned smile
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[280px] flex-1  rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-09.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover bg-blend-darken "
            />{" "}
            <div className="absolute inset-0 bg-black/55"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className=" text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Alignment
              </h2>
              <p className="text-base leading-[28px]  mb-6 text-left">
                Focuses on the alignment and positioning of teeth & jaws.
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[280px] flex-1   rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-08.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover bg-blend-darken "
            />{" "}
            <div className="absolute inset-0 bg-black/55"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Root Therapy
              </h2>
              <p className="text-base leading-[28px]  mb-6 text-left">
                Dental procedure used to treat infection at centre tooth.
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[280px] flex-1  rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-05.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover bg-blend-darken "
            />{" "}
            <div className="absolute inset-0 bg-black/55"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className=" text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Teeth Whitening
              </h2>
              <p className="text-base leading-[28px]  mb-6 text-left">
                Removal of the stain chemicals reaction lighten tooth color.
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[280px] flex-1   rounded-2xl overflow-hidden z-10 relative group">
            <img
              src="/service-06.png"
              alt="Teeth Protection Service"
              className="w-full h-full object-cover bg-blend-darken "
            />{" "}
            <div className="absolute inset-0 bg-black/55"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">
              <h2 className="text-[30px] leading-[40px] w-fit pb-1 mb-3 relative underline-from-group">
                Dental Services
              </h2>
              <p className="text-base leading-[28px]  mb-6 text-left">
                Common way to replace missing teeth, just like a natural.
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-base font-medium">View More</span>
                <div className="bg-[#ece2da] h-[30px] w-[30px] rounded-full flex justify-center items-center p-1 transition-transform hover:rotate-45">
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
                    color="black"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-[#888]">
          Don’t hesitate, contact us for better help &{" "}
          <Link to="/appointment" className="text-black underline">
            Get appointment
          </Link>
        </p>
        <div>
          <PatientStory />
        </div>
        <Testomonials/>
        <Footer/>
      </div>
    </div>
  );
};

export default Service;
