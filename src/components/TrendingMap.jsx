const TrendingMap = ({ trendingBlog }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {trendingBlog.map((blog) => (
        <div className="relative h-[320px] w-[260px]">
          <div className="h-[320px] w-[260px]  rounded-xl flex">
            <img
              // style={{ backgroundPosition: "center", backgroundSize: "contain" }}
              src={blog.cover_image}
              alt="photo"
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl"
            />
            <div className="absolute bg-black opacity-40 h-full w-full rounded-xl"></div>
          </div>
          <div className="absolute bottom-7 left-7 right-7 truncate ">
            {blog.tag_list.map((t) => (
              <h5 className="bg-[#4B6BFB] px-[10px] py-1 rounded-[6px] text-xs text-white inline-block truncate mr-2">
                {t}
              </h5>
            ))}
            <p className="mt-4 text-lg text-white font-semibold ">
              {blog.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingMap;
