import React from "react";

const notFound = () => {
  return (
    <section className="max-w-[640px] m-auto py-[100px] flex items-center gap-[58.5px]">
      <div className="text-7xl text-black">404</div>
      <div className="pl-[58.5px] border-l-[1px] border-gray">
        <h5 className="text-2xl font-semibold">Page Not Found</h5>
        <p className="mt-5 text-[#696A75] text-lg">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <button className="mt-5 bg-[#4B6BFB] rounded-[6px] px-4 py-[10px] text-white text-sm">
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default notFound;
