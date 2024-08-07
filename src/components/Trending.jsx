import React from "react";
import TrendingMap from "./TrendingMap";

// const trendingBlogs = [
//   {
//     img: "/images/blog-2.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     img: "/images/blog-2.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     img: "/images/blog-2.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     img: "/images/blog-2.png",
//     category: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
// ];

import { useEffect, useState } from "react";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=4");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };
  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <section className="relative max-w-[1240px] m-auto  p-8 mt-9">
      <h5 className="text-2xl text-[#181A2A] font-bold">Trending</h5>
      <div className="mt-[30px]">
        {/* <TrendingMap trendingBlog={trendingBlogs} /> */}
        <TrendingMap trendingBlog={articles} />
      </div>
    </section>
  );
};

export default Trending;
