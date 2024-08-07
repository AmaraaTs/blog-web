import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IoPersonCircleSharp } from "react-icons/io5";

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
      {/* <img src="/images/singleBlog.png" alt="photo" className="mt-8" />
      <div className="mt-8 flex flex-col gap-8 text-xl text-[#3B3C4A]">
        <p>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>
        <p>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h5 className="text-2xl text-[#181A2A] font-semibold">
          Research Your Destination
        </h5>
        <p>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h5 className="text-2xl text-[#181A2A] font-semibold">
          Plan Your Itinerary
        </h5>
        <p>
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
        </p>
        <p>
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div> */}
    </section>
  );
};

export default BlogDetail;
