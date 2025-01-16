"use client";

import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    username: string;
    iconUrl: string | null;
  };
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
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

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="author">
              <img
                src={post.user.iconUrl || "/default-icon.png"}
                alt="User Icon"
              />
              <span>{post.user.username}</span>
            </div>
            <time>{new Date(post.createdAt).toLocaleString()}</time>
          </li>
        ))}
      </ul>
    </div>
  );
}
