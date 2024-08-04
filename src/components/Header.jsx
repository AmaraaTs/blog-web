import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex max-w-[1200px] m-auto justify-between p-8 items-center">
      <img src="./images/metaLogo.png" alt="logo" className="w-[158px] h-8" />
      <ul className="flex gap-10 text-base text-[#3B3C4A]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-solid bg-[#F4F4F5] rounded-[5px] pl-4 pt-2 pr-2 pb-2 w-[166px]"
        />
        <CiSearch className="absolute left-[140px] bottom-[15px]" size={16} />
      </div>
    </header>
  );
};

export default Header;
