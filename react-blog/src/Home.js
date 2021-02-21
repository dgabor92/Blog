import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true); //creating a loading message for the users if they have to wait for the data
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = 'http://localhost:8000/blogs';
    fetch(URL)
      .then((response) => {
        //handle the fetch error
        if (!response.ok) {
          throw Error('Could not fetch the data');
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false); //set the isPending state to FALSE when you get the data
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        //catch the fetch error
        setError(err.message);
      });
  }, []);
  return (
    <div className="home">
      {/* conditional template for error if we have */}
      {error && <div>{error}</div>}
      {/* conditional template for loading message which will run when the isPending state is TRUE */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
