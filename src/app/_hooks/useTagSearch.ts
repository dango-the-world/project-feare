import { useEffect, useState } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

export const useTagSearch = (tag: string | string[] | undefined) => {
  const [results, setResults] = useState<FetchPost[]>([]);
  const [tagLoading, setLoading] = useState(true);

  useEffect(() => {
    if (tag) {
      fetch(`/api/search/tag?tag=${tag}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setResults(data);
        })
        .catch((err) => console.error("Error fetching search results:", err))
        .finally(() => setLoading(false));
    }
  }, [tag]);

  return { results, tagLoading };
};
