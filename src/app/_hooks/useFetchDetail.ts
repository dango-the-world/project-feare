import { useEffect, useState } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

const useFetchDetail = (postId: string) => {
  const [postDetail, setPostDetail] = useState<FetchPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post_detail?id=${postId}`);
        const data = await response.json();
        setPostDetail(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  return { postDetail, loading };
};

export default useFetchDetail;
