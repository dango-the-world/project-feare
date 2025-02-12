"use client";
import { useState } from "react";

interface PostData {
  title: string;
  content: string;
  tags: string;
}

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPost = async (postData: PostData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create_post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error("Failed to create post");
      }
      return await res.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading, error };
}
