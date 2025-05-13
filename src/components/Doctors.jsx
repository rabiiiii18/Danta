import React from "react";

const Doctors = () => {
  return (
    <div className=" px-10 border-t border-t-gray-300">
      <div className="flex justify-between gap-15 py-10">
        <div className="w-[65%] h-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-md px-3 py-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border-t border-t-gray-300 h-full min-h-32 flex justify-between items-center px-4 py-4 rounded-xl"
                >
                  <div className="w-[60%]">
                    <h3 className="text-[24px] leading-[34px]">
                      Dr. Natalia Rose
                    </h3>
                    <span className="text-[16px] leading-[28px] text-[#888]">
                      Dentist (BPT)
                    </span>
                  </div>
                  <div className="w-[40%] flex justify-end">
                    <img
                      className="rounded-full h-[80px] w-[80px] object-cover"
                      src="/doctor-01.png"
                      alt="Doctor"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-[35%]">
          <span className="text-[20px] leading-[28px] font-normal">
            / Meet Our Doctor
          </span>
          <h1 className="text-[48px] leading-[58px] mt-5 relative overflow-hidden  ">
            Our specialists
          </h1>
          <span className="text-[24px] leading-[34px] font-normal mt-16 ">
            Expert care with a compassionate touch.
          </span>
          <p className="text-[20px] leading-[30px] mt-5">
            Available at a convenient time for you. Associates have decades of
            experience. Provide community continuity of care. Perfect suit for
            minimal waiting times.
          </p>

          <button className="px-6 py-3 text-base leading-[16px] bg-[#004149] text-white rounded-md mt-10 cursor-pointer hover:bg-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
