import React from "react";
import Posts from "../components/Posts";
import Weather from "../components/Weather";

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Welcome to React Frontend Assignment</h2>
      <p>This application demonstrates API integration in React.</p>

      {/* Fetch and display posts */}
      <h3 className="mt-4">Latest Posts</h3>
      <Posts />

      {/* Fetch and display weather info */}
      <h3 className="mt-4">Weather Information</h3>
      <Weather />
    </div>
  );
};

export default Home;
