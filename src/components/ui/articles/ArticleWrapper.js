"use client";
import useGetArticles from "@/hooks/useGetArticles";
import MobileArticles from "./MobileArticles";
import DesktopArticles from "./DesktopArticles";
import IntroStarter from "../IntroStarter";
import { sectionIntros } from "@/utils/constants";
import { useApp } from "@/contexts/AppContext";

const ArticleWrapper = () => {
  const articles = useGetArticles();
  const { isDesktop } = useApp();

  const filteredArticles = articles
    .filter((article) => article.cover_image)
    .sort((a, b) => b.public_reactions_count - a.public_reactions_count);

  return (
    <div className="w-full">
      <IntroStarter {...sectionIntros.articles} />
      {isDesktop ? (
        <DesktopArticles articles={filteredArticles} />
      ) : (
        <MobileArticles articles={filteredArticles} />
      )}
    </div>
  );
};

export default ArticleWrapper;
