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
    <div className="flex flex-col items-center gap-12 rounded-[16px] border border-gray-800 px-4 py-6 md:w-[500px] md:flex-row lg:px-6 lg:pb-12">
      <input
        type="text"
        placeholder="Why microservice over monolith ?"
        className="w-full place-self-start border-none bg-transparent text-gray-300 placeholder-gray-500 outline-none"
      />
      <button className="rounded-lg bg-purple-500 px-8 py-2 text-xl text-white transition-colors hover:bg-purple-600">
        Send
      </button>
    </div>
  );
};

export default FooterLeft;
