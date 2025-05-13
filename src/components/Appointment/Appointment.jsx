import React from "react";
import Navbar from "../Navbar";
import { Asterisk, ChevronRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Box from "../Box";
import Footer from "../Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Appointment = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    if (firstError) {
      toast.error(firstError.message || "* Fields are mandatory.");
    }
  };
  
  const onSubmit = (data) => {
    toast.success("Form submitted succeessfully.");
  };
  
  return (
    <div>
      <Navbar />
      <div className="h-[40vh] flex justify-center items-center flex-col relative overflow-hidden">
        <img
          src="/floatingbar-bg-img.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          alt="background"
        />
        <h1 className="text-[54px] leading-[64px]">Book Appointment </h1>
        <div className="flex justify-center items-center mt-3 gap-1">
          <p className="text-base leading-[22px] text-[#888] ">Danta </p>
          <ChevronRight size={18} className="mt-1 text-[#888] " />
          <p className="text-[#004149] font-bold"> Book Appointment</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className=" h-auto mx-20 mt-20">
          <div className="flex gap-20">
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                First Name <Asterisk size={12} color="red" />
              </label>
              <input
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                placeholder="Enter Fist Name"
                {...register("firstname", { required: true })}
                />
                
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                Last Name <Asterisk size={12} color="red" />
              </label>
              <input
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                placeholder="Enter Last Name"
                {...register("lastname", { required: true })}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                Email <Asterisk size={12} color="red" />
              </label>
              <input
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                Phone <Asterisk size={12} color="red" />
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country="np"
                    inputStyle={{ width: "100%", border: "none" }}
                    buttonStyle={{ border: "none" }}
                    containerClass="border border-[#888] rounded-md mt-2 poppins text-base text-[#888]"
                  />
                )}
              />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <label
              className="poppins text-base font-normal leading-[28px] "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter description"
              {...register("message")}
              className="border border-[#888] rounded-md  outline-0  px-3 py-1 mt-2 poppins text-base text-[#888]"
              id=""
              rows={8}
            ></textarea>
          </div>

          <div className="flex gap-20 mt-8">
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex  "
              >
                Booking Date <Asterisk size={12} color="red" />
              </label>

              <input
                type="date"
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                placeholder="Enter Fist Name"
                {...register("date", { required: true })}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                Booking Time <Asterisk size={12} color="red" />
              </label>
              <select
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                {...register("time")}
              >
                <option value="" className="text-[#888]">
                  Select Booking Time
                </option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="05:00 AM">05:00 PM</option>
                <option value="07:00 AM">07:00 PM</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                No. of Person <Asterisk size={12} color="red" />
              </label>
              <input
                type="number"
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                placeholder="Enter no. of person"
                {...register("number", { required: true })}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex"
              >
                Service <Asterisk size={12} color="red" />
              </label>
              <select
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                {...register("service")}
              >
                <option value="" className="text-[#888]">
                  Select Dental Service
                </option>
                <option value="Preventive Dentistry">
                  Preventive Dentistry
                </option>
                <option value="Restorative Dentistry">
                  Restorative Dentistry
                </option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Orthodontics">Orthodontics</option>
                <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                <option value="Oral Surgery">Oral Surgery</option>
              </select>
            </div>
          </div>

          <div className="flex gap-20 mt-8">
            <div className="flex flex-col basis-1/5">
              <label
                htmlFor=""
                className="poppins text-base font-normal leading-[28px] flex "
              >
                Payment Method <Asterisk size={12} color="red" />
              </label>

              <select
                className="border border-[#888] outline-0 rounded-md px-3 py-1 mt-2 poppins text-base text-[#888]"
                {...register("methods")}
              >
                <option value="" className="text-[#888]">
                  Select Payment Method
                </option>
                <option value="Pay on locally">Pay on locally</option>
                <option value="Pay via online">Pay via online</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="px-5 py-2 text-white rounded-md bg-[#004149] cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-26">
        <div className="flex justify-center flex-col items-center">
          <span className="text-[18px] leading-[28px]">/ Our Service</span>
          <h1 className="text-[72px] leading-[85px] ">
            Discover the dental clinic
          </h1>
        </div>
        <div className="my-20">
          <Box />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Appointment;
