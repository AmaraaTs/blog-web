import React from "react";
import { CiSquareChevRight } from "react-icons/ci";
import { CiSquareChevLeft } from "react-icons/ci";
import { useEffect, useState } from "react";

const Mainblog = () => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=1");
    const data = await response.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);
  return (
    <section className="relative max-w-[1240px] m-auto  p-8 ">
      <div>
        <div className="relative">
          <img
            src={articles[0].cover_image}
            alt="photo"
            className="w-full h-full rounded-xl"
          />
          <div className="absolute w-full h-full bg-black opacity-40 bottom-0 rounded"></div>
        </div>
        <div className="absolute bottom-[85px] left-[43px] bg-white rounded-xl p-10 border-[1px] border-[#E8E8EA] w-[598px]">
          <h5 className="bg-[#4B6BFB] text-white rounded-md py-1 px-[10px] text-sm inline-block">
            {articles[0].tags}
          </h5>
          <h3 className="mt-4 text-4xl text-[#181A2A] w-[518px] font-bold">
            {articles[0].title}
          </h3>
          <p className="mt-6 text-[#97989F] text-base">
            {" "}
            {articles[0].published_at}
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <CiSquareChevRight size={40} color="gray" />
        <CiSquareChevLeft size={40} color="gray" />
      </div>
    </section>
  );
};

export default Mainblog;
