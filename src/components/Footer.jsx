import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-10 lg:pt-20 px-4">
      <div className="flex flex-wrap gap-10 lg:gap-20">
        {/* Column 1 */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col gap-10">
            <div className="flex gap-6">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                  Service
                </h2>
              </div>
              <div className="w-[70%] flex gap-3 flex-wrap">
                {["Home", "About us", "Service", "Contact us"].map((item, idx) => (
                  <Link
                    key={idx}
                    to="/"
                    className="text-[#888] text-base lg:text-[18px] leading-[28px] hover:text-white transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                  Book now
                </h2>
              </div>
              <div className="w-[70%]">
                <p className="text-[#888] text-base lg:text-[18px] leading-[28px] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                  Get Appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col gap-10">
            <div className="flex gap-6">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                  Quick Links
                </h2>
              </div>
              <div className="w-[70%] flex gap-3 flex-wrap">
                {["Home", "About us", "Service", "Contact us"].map((item, idx) => (
                  <Link
                    key={idx}
                    to="/"
                    className="text-[#888] text-base lg:text-[18px] leading-[28px] hover:text-white transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[30%]">
                <h2 className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                  Socials
                </h2>
              </div>
              <div className="w-[70%] flex flex-col gap-3">
                {["Facebook", "Instagram", "Linkedin"].map((platform, idx) => (
                  <Link
                    key={idx}
                    to="/"
                    className="text-[#888] text-base lg:text-[18px] leading-[28px] hover:text-white transition duration-300 ease-in-out"
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex gap-6">
            <div className="w-[30%]">
              <h2 className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                Open Hours
              </h2>
            </div>
            <div className="w-[70%] flex flex-col gap-3">
              <p className="text-[#888] text-base lg:text-[18px] leading-[28px]">
                Mon-Fri: 9 AM - 6 PM <br />
                Saturday: 9 AM - 4 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-b border-gray-800 my-6" />
      <p className="text-center text-sm lg:text-base leading-[25px] text-[#888] py-6">
        © 2025 Danta. All rights reserved. Designed by Ravi Shrestha
      </p>
    </div>
  );
};

export default Footer;
