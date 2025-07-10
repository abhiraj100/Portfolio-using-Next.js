import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[15%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web development portfolio — a curated showcase of projects
        that highlight my skills in front-end development and the MERN Stack.
        From responsive user interfaces to full-stack applications, each project
        reflects my passion for clean code, modern design, and seamless user
        experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-auto gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square object-cover bg-no-repeat bg-cover rounded-lg relative cursor-pointer group hover:shadow-[5px_5px_0_#000] duration-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="flex bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm font-medium text-gray-700">
                  {project.description}
                </p>
              </div>

              <div className="border rounded-full border-black w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send-icon"
                  className="w-5 -translate-x-0.5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <a
        href=""
        className="flex w-max items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover hover:bg-[#d9aaea]"
      >
        Show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="right-arrow"
          className="w-4"
        />{" "}
      </a>
    </div>
  );
};

export default Work;
