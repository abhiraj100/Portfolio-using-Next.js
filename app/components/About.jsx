import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[15%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 smm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I specialize in building scalable, high-performance web applications
            using the MERN Stack, Next.js, and DevOps tools. With a strong
            foundation in both frontend and backend development, I focus on
            clean architecture, optimized user experiences, and efficient
            deployment pipelines.
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-1">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  className="border-[0.5px] border-green-400 rounded-xl cursor-pointer p-6 hover:lightHover hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
                  key={index}
                >
                  {" "}
                  <Image className="w-7 mt-3" src={icon} alt={title} />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
            <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
