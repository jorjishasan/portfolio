"use client";
import Image from "next/image";
import footerDecoration from "../../../../public/footer_decoration.svg";
const FooterLeft = () => {
  return (
    <div className="w-full md:w-auto">
      <Image
        src={footerDecoration}
        width={70}
        height={50}
        alt="footer decoration"
      />
      <InputBox />
    </div>
  );
};

const InputBox = () => {
  return (
    <div className="flex flex-col items-center gap-12 rounded-[16px] border border-gray-800 px-4 py-6 md:w-[500px] lg:w-[550px] lg:px-6 lg:py-8 xl:w-[650px] xl:gap-16">
      <input
        type="text"
        placeholder="Why microservice over monolith ?"
        className="w-full place-self-start text-wrap bg-transparent text-xl text-gray-300 placeholder-gray-500 outline-none"
      />
      <button className="rounded-lg bg-purple-600 px-8 py-3 text-lg text-white transition-colors hover:bg-purple-600 md:text-[24px] xl:px-16 xl:py-4">
        Send
      </button>
    </div>
  );
};

export default FooterLeft;
