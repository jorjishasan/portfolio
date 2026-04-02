"use client";
import { useState, useEffect } from "react";
import { devtoAPI } from "@/components/ui/articles/articleConfig";
import fallbackArticleData from "@/components/ui/articles/fallbackArticleData";

const useGetArticles = () => {
  const [articles, setArticles] = useState(fallbackArticleData);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?url=${devtoAPI}`
        );
        if (!response.ok) {
          // corsproxy.io often returns non-2xx with a payload like: { "error": "..." }
          throw new Error(`Articles request failed (${response.status})`);
        }

        const data = await response.json();

        // `ArticleWrapper` expects an array; fall back gracefully if the API
        // returns an error object instead.
        setArticles(Array.isArray(data) ? data : fallbackArticleData);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles(fallbackArticleData);
      }
    };

    fetchArticles();
  }, []);

  return articles;
};
export default useGetArticles;
