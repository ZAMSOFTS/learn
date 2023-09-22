import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import "../index.css";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-b from-gray-800 to-black rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-transparent bg-gradient-to-r from-cyan-100 to-cyan-600 bg-clip-text">
              Generation
            </span>
            <br />
          </h1>
          <div className="ss:flex  hidden md:mr-4 mr-0 ">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          hi my name is zaeem and i am learning react and tailwind! Kaleem is a
          physiotherapist and this will be his website and faheem is also my
          brother who is almost 26 years old and this is a dummy paragraph so
          ALS PHYSIOS is the best
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] object-contain"
        />
        <div className="absolute z-[0] w-[90%] h-[90%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[100%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
