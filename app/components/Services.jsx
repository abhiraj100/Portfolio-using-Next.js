import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[15%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Passionate MERN Stack Developer and DevOps from Daltonganj, Jharkhand,
        India, with 1+ years of immersive internship experience across dynamic
        tech environments — including Physics Wallah, Codes For Tomorrow, Affy
        Cloud IT Solutions, Techugo and Stocai. Skilled in building scalable,
        performance-driven web applications with clean architecture and modern
        design principles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:bg-lightHover hover:-translate-y-2 duration-500"
          >
            <Image src={icon} alt="" className="w-12" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />{" "}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
