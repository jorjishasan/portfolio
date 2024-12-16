"use client";

const Notification = ({ name, description, icon, color, index }) => {
  return (
    <figure
      className={`relative mx-auto min-h-fit w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-transparent p-4 pr-16 backdrop-blur-md transition-all duration-200 ease-in-out [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:scale-[103%]`}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-2">·</span>
            <span className="text-xs text-gray-500">{"#" + (index + 1)}</span>
          </figcaption>
          <p className="text-xs font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default Notification;
