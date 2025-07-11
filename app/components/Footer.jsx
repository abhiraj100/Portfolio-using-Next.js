import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-60 mx-auto mb-2 " />

        <div className="flex w-max items-center gap-2 mx-auto text-black font-semibold">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          abhiraj100right@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Abhiraj Yadav. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/abhiraj100">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abhiraj-yadav-86a232215/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://discord.com/channels/@me/1344735343768899705"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/user/abhiraj100right/"
            >
              GFG
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
