import { useEffect, useState } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

const useFetchPopular = () => {
  const [popularPost, setPopularPost] = useState<FetchPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/popular");
        const data = await response.json();
        setPopularPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { popularPost, loading };
};

export default useFetchPopular;
