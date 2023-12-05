import React from "react";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = ({ text }) => {
  return (
    <>
      <div className="title mb-10">
        <h1 className="text-blue-500 font-[700]">CONTACT</h1>
        <p className="text-2xl font-[700] mt-2 ">
          Don't be Shy! Hit me up! <span>👇</span>
        </p>
      </div>
      <div className="contact flex justify-around items-center flex-col mb-20 md:flex-row">
        <div className="location flex justify-start items-center flex-col md:flex-row mb-10 md:mb-0">
          <i className=" text-[30px] p-[20px] shadow border-2 rounded-full text-blue-600 mr-0 md:mr-6">
            <FaLocationDot />
          </i>
          <div className="title mt-3 md:mt-0  flex flex-col items-center justify-center ">
            <h1 className=" text-[17px] md:text-[20px] font-[700] mb-2">Location</h1>
            <p className={` text-[17px] md:text-[20px] ${text}`}>Gujarat , India</p>
          </div>
        </div>
        <div className="mail flex flex-col justify-center items-center md:flex-row">
          <i className=" text-[30px]  p-[20px] shadow border-2 rounded-full text-blue-600 mr-0 md:mr-6">
            <FaEnvelope />
          </i>
          <div className="title mt-3 md:mt-0  flex flex-col justify-center  items-center">
            <h1 className="text-[17px]  font-[700] mb-2">Mail</h1>
            <p className={`text-[17px] ${text}`}>Yahyamomin06@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
