import { useEffect, useState } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

const useFetchPost = () => {
  const [newPost, setPosts] = useState<FetchPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/post");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { newPost, loading };
};

export default useFetchPost;
