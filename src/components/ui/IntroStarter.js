const IntroStarter = ({ tag, title, description }) => {
  return (
    <div className="mx-auto mb-16 w-full text-center">
      <span className="mb-2 inline-block bg-purple-500/10 px-4 py-2 text-[10px] font-bold uppercase text-purple-800">
        {tag}
      </span>
      <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xs text-center text-sm text-gray-500/80 md:max-w-sm md:text-left md:text-sm lg:max-w-md lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default IntroStarter;
