import { useEffect, useState } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

export const useSearchResults = (query: string | undefined, page: number) => {
  const [results, setResults] = useState<FetchPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      fetch(`/api/search/keyword?query=${query}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setResults(data.results);
          setTotalPages(data.totalPages);
        })
        .catch((err) => console.error("Error fetching search results:", err));
    }
  }, [query, page]);

  return { results, totalPages };
};
