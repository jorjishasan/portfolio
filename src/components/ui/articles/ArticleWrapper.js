"use client";
import useGetArticles from "@/hooks/useGetArticles";
import MobileArticles from "./MobileArticles";
import DesktopArticles from "./DesktopArticles";
import IntroStarter from "../IntroStarter";
import { sectionIntros } from "@/utils/constants";
const ArticleWrapper = () => {
  const articles = useGetArticles();

  const filteredArticles = articles
    .filter((article) => article.cover_image)
    .sort((a, b) => b.public_reactions_count - a.public_reactions_count);

  return (
    <div className="w-full">
      <IntroStarter {...sectionIntros.articles} />
      <div className="hidden md:block">
        <DesktopArticles articles={filteredArticles} />
      </div>
      <div className="block md:hidden">
        <MobileArticles articles={filteredArticles} />
      </div>
    </div>
  );
};

export default ArticleWrapper;
