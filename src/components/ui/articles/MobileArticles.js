import { useState } from "react";
import ArticleCard from "./ArticleCard";

const MobileArticles = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(2);

  const showMoreArticles = () => {
    setVisibleCount((prev) => Math.min(prev + 1, articles.length));
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-1 gap-4">
        {articles.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {visibleCount < articles.length && (
        <button
          onClick={showMoreArticles}
          className="mx-auto mt-4 rounded-lg bg-purple-500 px-6 py-2 text-sm text-white transition-all hover:bg-purple-600"
        >
          {articles.length - visibleCount} Add 1+
        </button>
      )}
    </div>
  );
};

export default MobileArticles;
