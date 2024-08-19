import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogDetail = () => {
  const { query } = useRouter();
  const [blogDetail, setBlogDetail] = useState([]);
  const getBlogById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setBlogDetail(data);
  };

  useEffect(() => {
    getBlogById(query.id);
  }, []);

  return (
    <section className="max-w-[800px] m-auto py-[100px]">
      <h3 className="text-4xl text-[#181A2A] font-semibold">
        {blogDetail.title}
      </h3>
      <div className="mt-5 flex gap-6 items-center">
        <div className="flex gap-3 items-center">
          <img
            src={blogDetail?.user?.profile_image}
            alt="photo"
            className="h-7 w-7 rounded-full"
          />
          <p className="text-sm text-[#696A75]">{blogDetail?.user?.name}</p>
        </div>
        <p className="text-sm text-[#696A75]">{blogDetail?.published_at}</p>
      </div>
      <div>
        <div
          className="flex flex-col gap-8 mt-8  blog-detail"
          dangerouslySetInnerHTML={{ __html: blogDetail?.body_html }}
        ></div>
      </div>
    </section>
  );
};

export default BlogDetail;
