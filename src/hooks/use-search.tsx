import { useState } from 'react';

const useSearch = () => {
  const [query, setQuery] = useState("");

  const getSearchValue = (searchValue: string) => {
    setQuery(searchValue);
  };

  return {
    query,
    getSearchValue,
  };
};

export default useSearch;
