import { useEffect, useState, useCallback } from "react";
import { FetchPost } from "../_interfaces/fetchPostInterface";

const useFetchDetail = (postId: string) => {
  const [postDetail, setPostDetail] = useState<FetchPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/post_detail?id=${postId}`);
      const data = await response.json();
      setPostDetail(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  // refetch関数を追加
  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { postDetail, loading, refetch };
};

export default useFetchDetail;
