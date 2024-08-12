import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=${count}`
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };
  //   const handleChange = (text) => {
  //     setSearchValue(text);
  //     const setArticles = articles.filter((article) =>
  //       article.title.toLowerCase().includes(text.toLowerCase())
  //     );
  //     setUsers(setArticles);
  //   };

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
