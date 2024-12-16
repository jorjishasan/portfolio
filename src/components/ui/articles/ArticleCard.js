"use client";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { tagColors } from "./articleConfig";
import randomItemFrom from "@/utils/randomItemFrom";
import { articleReactions } from "./articleConfig";
import Link from "next/link";
import { useMemo } from "react";

const ArticleCard = ({ article }) => {
  const tagsArray = article.tags.split(",").map((tag) => "#" + tag.trim());

  // Memoize random values
  const randomReads = useMemo(() => randomItemFrom(1, 8), []);
  const randomReactions = useMemo(() => randomItemFrom(1, 10) * 10, []);

  return (
    <article className="group relative mx-auto h-fit w-[380px] cursor-pointer overflow-hidden rounded-xl border border-gray-900 p-4 lg:w-[400px]">
      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <button className="group/btn rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-purple-600">
          <Link
            href={article.url}
            target="__blank"
            className="flex items-center gap-1"
          >
            Play this article
            <GoArrowUpRight className="transition-all duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
          </Link>
        </button>
      </div>
      <div className="relative">
        {article.cover_image && (
          <Image
            src={article.cover_image}
            alt={article.title}
            width={400}
            height={0}
            sizes="(max-width: 768px) 380px, 400px"
            className="h-auto w-full"
            style={{ aspectRatio: "1000/420" }}
            priority={false}
          />
        )}
        <div className="mt-4 flex items-center gap-2 text-[9px]">
          <span>Blog</span>
          <span className="h-1 w-1 rounded-full bg-gray-500"></span>
          <span>{randomReads}k+ reads</span>
        </div>
        <h2 className="mt-2 text-xl font-bold">
          {article?.title.length > 26
            ? article.title.slice(0, 26) + "..."
            : article.title}
        </h2>

        <figcaption className="mt-4 flex justify-between gap-2">
          <div className="flex">
            {tagsArray.map((tag, index) => (
              <span
                key={tag}
                className="flex h-5 items-center justify-center self-end rounded-sm px-1 text-[9px] lg:text-xs"
                style={{ color: tagColors[index % tagColors.length] }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 overflow-hidden">
            <div className="flex items-center pr-2">
              {articleReactions.map((reaction) => (
                <span
                  key={reaction}
                  className="-mr-2 rounded-full border-[0.2px] border-gray-700 bg-gray-900 px-1 py-1 text-xs"
                >
                  {reaction}
                </span>
              ))}
            </div>
            <span className="text-xs font-bold text-gray-300">
              {randomReactions}
              {"+"}
            </span>
          </div>
        </figcaption>
      </div>
    </article>
  );
};

export default ArticleCard;
