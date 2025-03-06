import { useState } from "react";

export function useScary() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleScary = async (postId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/post/${postId}/scary`, {
        method: "PATCH",
      });

      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 401) {
          throw new Error("ログインが必要です");
        }
        throw new Error(errorData.error || "Failed to update scary status");
      }

      const data = await res.json();
      return {
        scaryCount: data.scaryCount,
        isScary: data.isScary,
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Function to check if a user has marked a post as scary
  // We pass userId from the server component
  const checkScaryStatus = async (postId: string, userId: string | null) => {
    if (!userId) return false;

    try {
      const res = await fetch(`/api/post/${postId}/scary?userId=${userId}`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to check scary status");
      }

      const data = await res.json();
      return data.isScary;
    } catch (err) {
      console.error("Error checking scary status:", err);
      return false;
    }
  };

  return {
    toggleScary,
    checkScaryStatus,
    isLoading,
    error,
  };
}
