"use client";
import { useState, useEffect } from "react";
import { devtoAPI } from "@/components/ui/articles/articleConfig";

const useGetArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://corsproxy.io/?url=${devtoAPI}`);
        console.log(response);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading };
};
export default useGetArticles;
