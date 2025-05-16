import Maps from "../../Maps";
import Navbar from "../../Navbar";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Footer from "../../Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Navbar />
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="lg:w-1/2 w-ful  lg:h-auto h-96 lg:mx-1 mx-6">
          <Maps />
        </div>
        <div
        
        className="lg:w-1/2 w-full lg:ms-20 lg:p-0 p-6">
          <div className="lg:w-[70%] w-full lg:my-1 my-1 ">
            <motion.h1
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, ease: 'easeIn' }}
            className="lg:text-[72px] text-[26px] lg:leading-[85px] lg:mt-20">
              Drop Us a Line
            </motion.h1>
            <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7,delay:0.3, ease: 'easeIn' }}
            className="text-base leading-[28px] text-[#888] text-justify mt-4">
              We provide a wide range of medical treatments for both local and
              international patients, and we’re very proud of the results our
              patients achieve during their recovery.
            </motion.p>
            <motion.form action=""
                 initial={{ opacity: 0, scale: 0.1 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.7,delay:0.5, ease: 'easeIn' }}
            >
              <div
          
              className="flex justify-between items-center mt-5">
                <input
                  type="text"
                  className="border border-[#888] outline-0 rounded-md px-3 py-2 mt-2 poppins text-base text-[#888] w-[45%]"
                  placeholder=" Fist Name"
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  className="border border-[#888] outline-0 rounded-md px-3 py-2 mt-2 poppins text-base text-[#888] w-[45%]"
                  placeholder=" Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Type your message"
                  {...register("message")}
                  className="border border-[#888] rounded-md  outline-0  p-3 mt-8 poppins text-base text-[#888] w-full"
                  id=""
                  rows={8}
                ></textarea>
              </div>

              <button className="px-6 py-3 mt-8 text-[16px] leading-4 lg:w-full  bg-[#004149] text-white rounded-md hover:bg-black transition-all duration-300 cursor-pointer">
                Send Your Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <div className="lg:mt-16">
        <div className="">
          <motion.h1
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           
           transition={{
             duration: 0.7,
             ease: "easeInOut",
           }}
            className="lg:text-[200px] text-[60px] lg:leading-[200px] text-[#EEE2D9] text-center "
          >
            Contact Us
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mx-4 md:mx-12 my-8 mb-20">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            
            transition={{
              duration: 0.7,
              delay:0.1,
              ease: "easeInOut",
            }}
            className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-360">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="0 0 189.655 189.654"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M181.017,135.642c-0.456-1.398-1.853-2.176-3.184-2.18c-9.084-11.336-26.941-31.829-43.641-29.404
		c-17.2,2.498-19.03,21.641-16.938,35.499c0.541,3.584,1.323,7.096,1.577,10.72c0.65,9.285-18.72,2.325-22.662,0.641
		c-14.161-6.049-26.037-17.867-34.953-30.139c-9.043-12.449-14.216-29.216-7.141-43.832c3.385-6.994,26.519-1.517,32.716-1.768
		c2.72-0.11,5.12-2.724,4.211-5.528c-8.073-24.925-31.087-37.67-43.435-59.488c-1.493-2.637-5.481-1.045-5.126,1.744
		C7.984,18.17,2.803,59.558,8.742,87.584c6.534,30.832,25.476,58.929,51.56,76.362c23.821,15.921,55.439,28.263,84.479,25.254
		C170.429,186.542,189.401,161.335,181.017,135.642z M37.914,19.821c1.816-1.533,3.666-3.067,5.529-4.641
		c7.054,19.678,27.882,31.89,36.895,51.174c-3.192-0.157-6.392-0.435-9.505-0.634c-6.78-7.24-13.413-13.821-19.169-22.26
		c-1.448-2.122-13.463-23.376-14.282-23.072C37.653,20.287,37.824,20.065,37.914,19.821z M173.27,149.021
		c-0.122-0.098-0.213-0.214-0.366-0.293c-15.048-7.751-28.879-13.744-39.383-27.79c-1.651-2.208-5.364-0.211-3.791,2.217
		c9.295,14.343,24.975,25.109,41.266,30.101c0.629,0.193,1.199,0.099,1.683-0.148c-0.94,5.674-2.538,11.143-6.444,16.164
		c-6.881,8.846-18.693,11.092-29.224,11.35c-24.354,0.597-49.481-10.452-69.811-22.923c-23.061-14.148-38.19-36.647-46.931-61.959
		c-5.084-14.725-7.026-30.668-3.651-45.962c2.631-11.927,9.508-19.616,17.648-26.811c0.253,4.307,4.119,9.905,5.836,12.968
		c4.236,7.558,9.173,14.671,14.47,21.517c1.81,2.34,4.049,5.457,6.607,8.183c-9.097,0.689-16.202,4.502-18.038,18.361
		c-3.924,29.618,18.253,54.982,41.631,70.109c10.881,7.041,41.849,18.25,42.568-3.829c0.357-10.942-5.236-20.704-0.026-31.476
		c9.58-19.809,37.008,12.9,44.558,20.643c0.764,0.783,1.586,1.178,2.389,1.292C173.884,143.517,173.606,146.285,173.27,149.021z"
                      />
                      <path
                        d="M153.932,85.528c-4.195-17.858-20.096-34.172-32.973-46.312c-5.921-5.582-13.099-11.917-20.825-14.833
		c-6.003-2.266-7.385-1.624-12.067,1.037c-0.663,0.377-0.2,1.327,0.499,1.183c2.13-0.439,8.58,4.214,10.448,5.369
		c6.612,4.084,12.325,9.827,17.742,15.34c11.145,11.343,23.108,25.317,27.786,40.805C146.36,94.132,155.37,91.641,153.932,85.528z"
                      />
                      <path
                        d="M151.961,41.038C136.067,22.715,112.812,8.994,90.497,0.143c-2.133-0.846-3.05,2.291-1.453,3.447
		c16.938,12.257,34.144,23.441,49.398,37.89c7.346,6.959,13.301,15.013,18.152,23.853c4.825,8.791,4.812,18.183,8.059,27.34
		c1.259,3.549,6.514,3.956,7.599,0C177.283,74.329,163.367,54.184,151.961,41.038z"
                      />
                      <path
                        d="M130.69,1.147c-2.712-0.955-4.379,3.218-1.931,4.578c10.264,5.704,19.39,12.75,26.556,22.121
		c6.225,8.141,9.022,17.33,13.93,26.094c2.12,3.786,9.229,2.391,8.654-2.344C174.998,27.742,151.979,8.645,130.69,1.147z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-base text-[#888] mb-1">
                    Have any questions?
                  </h4>
                  <h3 className="text-[22px] text-[#888] hover:text-[#004149] transition-colors">
                    <a href="tel:98131313131">+977-9813131313</a>
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              transition={{
                duration: 0.7,
                delay:0.3,
                ease: "easeInOut",
              }}
            className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-360">
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>email-line</title>
                    <path
                      class="clr-i-outline clr-i-outline-path-1"
                      d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"
                    ></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-base text-[#888] mb-1">
                    Any Questions? Email us
                  </h4>
                  <h3 className="text-[22px] text-[#888] hover:text-[#004149] transition-colors">
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              transition={{
                duration: 0.7,
                delay:0.5,
                ease: "easeInOut",
              }}
            className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-360">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 -0.5 68 68"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="11"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M37.6,34.5 L4,26.3 L66,2 L40.8,63.1 L33,34.1"
                        stroke="#000"
                        strokeWidth="3"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-base text-[#888] hover:text-[#004149] transition-colors">
                    Shikali Marg, Sanepa Lalitpur 44600, Nepal
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
