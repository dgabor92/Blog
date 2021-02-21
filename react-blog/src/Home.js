import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const URL = 'http://localhost:8000/blogs';
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
