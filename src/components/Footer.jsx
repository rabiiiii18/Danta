import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black pt-20 ">
      <div className="flex gap-20 ms-8">
        <div className="flex-1  h-86">
          <div className="flex  flex-col gap-15">
            <div className="flex gap-20">
              <div className="w-[30%]">
                <h2 className="text-[#888]  text-[18px] leading-[28px]">
                  Service
                </h2>
              </div>
              <div className="w-[70%] flex gap-3 flex-wrap">
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Home</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >About us</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Service</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Contact us</Link>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-[18px] leading-[28px]">
                  Book now
                </h2>
              </div>
              <div className="w-[70%]">
                <p className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out">
                  Get Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  h-86 ">
          <div className="flex  flex-col gap-15">
            <div className="flex gap-20">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-[18px] leading-[28px]">
                  Quick Links
                </h2>
              </div>
              <div className="w-[70%] flex gap-3 flex-wrap">
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Home</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >About us</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Service</Link>
                <Link to='/' className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out" >Contact us</Link>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-[18px] leading-[28px]">
                  Socials
                </h2>
              </div>
              <div className="w-[70%] flex flex-col gap-5">
                <Link className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out">
                  Facebook
                </Link>
                <Link className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out">
                  Instagram
                </Link>
                <Link className="text-[#888] text-[18px] leading-[28px] hover:text-white transition transition-300 ease-in-out">
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  h-86 ">
          <div>
            <div className="flex gap-10">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-[18px] leading-[28px]">
                  Open Hours
                </h2>
              </div>
              <div className="w-[70%] flex flex-col gap-8">
                <p className="text-[#888] text-[18px] leading-[28px]">
                  Mon-Fri: 9 AM - 6 PM <br />
                   Saturday: 9 AM - 4 PM  <br />Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-100"></div>
      <p className="text-center text-base leading-[25px] text-[#888] py-8">Copyright © 2025 Danta. All rights reserved. Designed By Ravi Shrestha</p>
    </div>
  );
};

export default Footer;
