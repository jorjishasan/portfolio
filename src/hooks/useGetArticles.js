"use client";
import { useState, useEffect } from "react";
import { devtoAPI } from "@/components/ui/articles/articleConfig";
import fallbackArticleData from "@/components/ui/articles/fallbackArticleData";

const useGetArticles = () => {
  const [articles, setArticles] = useState(fallbackArticleData);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://corsproxy.io/?url=${devtoAPI}`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return articles;
};
export default useGetArticles;
