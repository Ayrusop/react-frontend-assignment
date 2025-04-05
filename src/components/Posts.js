import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/Api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
