import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <div className=" p-12 px-9 flex text-xl justify-center items-center sticky w-full font-bold">
        <ul className="flex justify-between w-[15%]">
            <li><FaGithub className="text-5xl hover:text-teal-800" /></li>
            <li><FaTwitter className="text-5xl hover:text-teal-800" /></li>
            <li><FaFacebook className="text-5xl hover:text-teal-800" /></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
