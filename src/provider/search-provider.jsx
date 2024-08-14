import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${count}`
      );
      const data = await response.json();

      setArticles((prevArticles) => {
        console.log("prevArticles", prevArticles);
        const newArticles = data.filter(
          (article) =>
            !prevArticles.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prevArticles, ...newArticles];
      });
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
      toast.success("Алдаа гарлаа. Та дахин оролдоно уу");
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getArticleData();
  }, [count]);
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        count,
        setCount,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
