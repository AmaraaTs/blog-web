import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#F6F6F7]">
      <div className="max-w-[1200px] m-auto  p-8 mt-8">
        <div className="flex justify-between">
          <div className="w-[289px]">
            <h6 className="text-[#181A2A] text-lg font-semibold">About</h6>
            <p className="mt-3 text-base text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-6 text-base text-[#3B3C4A]">
              <span className="text-[#181A2A]">Email :</span>{" "}
              info@jstemplate.net
            </p>
            <p className="mt-1 text-base text-[#3B3C4A]">
              <span className="text-[#181A2A]">Phone :</span> 880 123 456 789
            </p>
          </div>
          <div>
            <ul className="gap-2 flex flex-col text-base text-[#3B3C4A]">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-[26px]">
            <FaFacebook size={16} color="gray" />
            <FaTwitter size={16} color="gray" />
            <FaInstagram size={16} color="gray" />
            <FaLinkedin size={16} color="gray" />
          </div>
        </div>
        <div className="mt-[25px] py-[20.5px] flex justify-between border-t-[1px] border-[#DCDDDF]">
          <div className="flex gap-[10px] items-center">
            <img src="/images/meta-logo.png" alt="" className="w-12 h-12" />
            <div>
              <h5 className="text-[#141624] text-xl">
                Meta<span className="font-extrabold">Blog</span>
              </h5>
              <p className="text-[#3B3C4A] text-base">© All Rights Reserved.</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-8 text-base text-[#3B3C4A]">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
