import { SearchContext } from "@/provider/search-provider";
import Link from "next/link";
import { useContext } from "react";
import Loader from "@/components/Loader";

const AllBlogMap = () => {
  const { articles, isLoading } = useContext(SearchContext);
  return (
    <div className="grid grid-cols-3 gap-5 mt-8">
      {/* <h2>Hailt: {searchValue}</h2> */}
      {isLoading ? (
        <Loader />
      ) : (
        articles.map((blog) => (
          <Link href={"/blog/" + blog.id}>
            <div className=" w-[392px]  p-4 border-[1px] border-[#E8E8EA] rounded-xl">
              <img
                src={blog.cover_image}
                alt="photo"
                className="h-[240px] w-[360px] rounded-md"
              />

              <div className="flex gap-3">
                {blog.tag_list.map((t) => (
                  <h5 className="mt-6 text-[#4B6BFB] bg-[#4B6BFB0D] inline-block py-1 px-[10px] rounded-md text-sm truncate">
                    {t}
                  </h5>
                ))}
              </div>
              <p className="mt-4 text-2xl text-[#181A2A] font-semibold truncate">
                {blog.title}
              </p>
              <p className="mt-5 text-[#97989F] text-base">
                {blog.published_at}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AllBlogMap;
