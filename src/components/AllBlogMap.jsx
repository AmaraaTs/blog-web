const AllBlogMap = ({ allBlog }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-8">
      {allBlog.map((blog) => (
        <div className=" w-[392px]  p-4 border-[1px] border-[#E8E8EA] rounded-xl">
          <img src={blog.img} alt="photo" className="h-[240px] w-[360px]" />

          <h5 className="mt-6 text-[#4B6BFB]   text-sm ">{blog.category}</h5>
          <p className="mt-4 text-2xl text-[#181A2A] font-semibold ">
            {blog.text}
          </p>
          <p className="mt-5 text-[#97989F] text-base">{blog.date}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBlogMap;
