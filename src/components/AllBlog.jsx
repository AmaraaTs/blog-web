import React from "react";
import AllBlogMap from "./AllBlogMap";
import Link from "next/link";

// const AllBlogs = [
//   {
//     img: "/images/blog-1.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-2.png",
//     category: "Design",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-3.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-4.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-5.png",
//     category: "Software",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-6.png",
//     category: "Design",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-7.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-8.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/images/blog-9.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
// ];

import { useEffect, useState } from "react";

const AllBlog = () => {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=${count}`
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, [count]);
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
        <AllBlogMap allBlog={articles} />
      </div>
      <div className="flex justify-center mt-[100px]">
        <button
          className="border-[1px] border-[#696A754D] px-5 py-3 rounded-md text-base text-[#696A75]"
          onClick={() => setCount(count + 3)}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default AllBlog;
