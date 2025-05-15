import React from 'react';

const Journey = () => {
  return (
    <div className="relative bg-[rgb(1,57,63)] text-white py-20 px-4">
      <div className="absolute inset-0 bg-[url('/row-bgimage-1.png')] bg-cover bg-fixed opacity-20 pointer-events-none"></div>

      {/* Year Row */}
      <div className="flex justify-between border-y border-y-gray-300 py-10 mx-4 sm:mx-8 lg:mx-20">
        <div className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-[1]">2002</div>
        <div className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-[1] text-[#888]">08</div>
        <div className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-[1] text-[#888]">19</div>
      </div>

      {/* Journey Section */}
      <div className="flex flex-col lg:flex-row gap-10 mx-4 sm:mx-8 lg:mx-20 mt-16">
        {/* Left Side Heading */}
        <div className="lg:w-[30%] flex items-center">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[78px] leading-tight">
            Our Journey
          </h1>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-[70%]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] text-start">
            Our journey Established For Oral Health
          </h2>
          <p className="text-justify mt-6 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            Years ago, fresh out of dental school, Dr. Medica envisioned a dental practice that went beyond just treating dental issues. We dreamed of a place where patients felt at ease, where their fears were understood, and where their smiles were valued as much as their dental health. Armed with her determination, she took a leap of faith and founded Smile Haven Dental Clinic.
            <br /><br />
            Nothing is more important to us than delivering high-quality, accessible care. Dr. Main and our team remain at the forefront of modern dentistry. We’ll help you feel at home in our easy-going environment. We also offer sedation & relaxation amenities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
