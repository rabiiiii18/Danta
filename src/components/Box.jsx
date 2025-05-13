import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with safe and effective whitening treatments.",
    img: "/box1.png",
  },
  {
    title: "Root Therapy",
    description: "Save your natural tooth and relieve pain with expert root therapy.",
    img: "/box2.png",
  },
  {
    title: "Teeth Braces",
    description: "Straighten your teeth and improve your bite with modern braces.",
    img: "/box3.png",
  },
  {
    title: "Teeth Protection",
    description: "Shield your teeth from damage with expert preventive care.",
    img: "/box4.png",
  },
];

const Box = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-5 mx-4 lg:mx-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group flex-1 basis-full sm:basis-[calc(50%-1.25rem)] lg:basis-auto h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-xl"
        >
          <img
            className="absolute object-cover h-full w-full rounded-xl scale-95 group-hover:scale-100 transition-transform duration-500"
            src={service.img}
            alt={service.title}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition duration-300 rounded-xl" />
          <div className="absolute bottom-0 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 p-6 text-white">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-medium">{service.title}</h4>
            <p className="text-sm sm:text-base mt-4">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
