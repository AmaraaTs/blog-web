import React from "react";

const Contact = () => {
  return (
    <section className="max-w-[895px] m-auto  p-8 my-[100px] px-[126px]">
      <div className="mt-[14px]">
        <h3 className=" text-black text-4xl font-semibold">Contact Us</h3>
        <p className="mt-5 text-[#696A75] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="mt-5 flex justify-between py-[10px]  mb-10">
        <div className="border-[1px] border-[#E8E8EA] rounded-xl p-4 w-[294px]">
          <h5 className="text-2xl font-semibold">Address</h5>
          <p className="mt-[10px] text-[#696A75] text-[18px]">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="border-[1px] border-[#E8E8EA] rounded-xl p-4 w-[294px]">
          <h5 className="text-2xl font-semibold">Contact</h5>
          <p className="mt-[10px] text-[#696A75] text-[18px]">
            313-332-8662 <br />
            info@email.com
          </p>
        </div>
      </div>
      <div className="mb-[66px] bg-[#F6F6F7] rounded-[10px] px-[35px] py-[30px]">
        <h5 className="text-lg font-semibold">Leave a Message</h5>
        <div className="  flex mt-6 flex-col gap-6">
          <div className="flex gap-7 text-[#97989F] text-base">
            <input
              type="text"
              placeholder="Your Name"
              className="placeholder-[#97989F] border-[1px] border-[#DCDDDF] bg-white rounded-[5px] pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-1/2"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="placeholder-[#97989F] border-[1px] border-[#DCDDDF] bg-white rounded-[5px] pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="placeholder-[#97989F] border-[1px] border-[#DCDDDF] bg-white rounded-[5px] pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-full"
          />
          <input
            type="text"
            placeholder="Write a message"
            className="placeholder-[#97989F] border-[1px] border-[#DCDDDF] bg-white rounded-[5px] pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-full h-[134px]"
          />
        </div>
        <button className="mt-[29px] bg-[#4B6BFB] rounded-[6px] px-4 py-[10px] text-white text-sm">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
