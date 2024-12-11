import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { maxContainerWidth } from "@/utils/constants";
import cn from "@/utils/cn";
import PlayPauseButton from "./PlayPauseButton";

const DesktopArticles = ({ articles }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div className="relative mx-auto" style={{ maxWidth: maxContainerWidth }}>
        <div
          className="overflow-x-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style jsx>{`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
          <div
            className="flex gap-6 px-4"
            style={{
              width: "fit-content",
              animation: "scroll 40s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...articles, ...articles].map((article, index) => (
              <div key={`${article.id}-${index}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[80px] bg-gradient-to-l from-transparent via-black/50 to-black"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[80px] bg-gradient-to-r from-transparent via-black/50 to-black"></div>
      </div>
      <PlayPauseButton
        isPaused={isPaused}
        onClick={() => setIsPaused(!isPaused)}
        className="mx-auto mt-12"
      />
    </>
  );
};

export default DesktopArticles;
