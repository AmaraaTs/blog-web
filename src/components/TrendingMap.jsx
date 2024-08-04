const TrendingMap = ({ trendingBlog }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {trendingBlog.map((blog) => (
        <div className="relative h-[320px] w-[260px]">
          <img src={blog.img} alt="photo" className="h-[320px] w-[260px]" />
          <div className="absolute bottom-7 left-7 right-7">
            <h5 className="bg-[#4B6BFB] px-[10px] py-1 rounded-[6px] text-xs text-white inline-block">
              {blog.category}
            </h5>
            <p className="mt-4 text-lg text-white font-semibold ">
              {blog.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingMap;
