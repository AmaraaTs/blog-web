import React from "react";
import TrendingMap from "./TrendingMap";

const trendingBlogs = [
  {
    img: "/images/blog-2.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-2.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-2.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-2.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

const Trending = () => {
  return (
    <section className="relative max-w-[1240px] m-auto  p-8 mt-9">
      <h5 className="text-2xl text-[#181A2A] font-bold">Trending</h5>
      <div className="mt-[30px]">
        <TrendingMap trendingBlog={trendingBlogs} />
      </div>
    </section>
  );
};

export default Trending;
