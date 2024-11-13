import AllBlogMap from "./AllBlogMap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchContext } from "@/provider/search-provider";
import React, { useContext } from "react";

const AllBlog = () => {
  const { count, setCount, setPerPage } = useContext(SearchContext);

  return (
    <section className=" max-w-[1240px] m-auto  p-8 my-9">
      <h5 className="text-2xl text-[#181A2A] font-bold">All Blog Post</h5>
      <div className="flex justify-between mt-8 text-xs font-bold text-[#495057]">
        <ul className="flex gap-5">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <Link href="/blog">
          <div>View All</div>
        </Link>
      </div>
      <div className="mt-[30px]">
        <AllBlogMap />
      </div>
      <div className="flex justify-center mt-[100px]">
        <button
          className="border-[1px] border-[#696A754D] px-5 py-3 rounded-md text-base text-[#696A75]"
          onClick={() => {
            setPerPage(3);
            setCount(count + 1);
          }}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default AllBlog;
