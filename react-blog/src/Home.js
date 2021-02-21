import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  //one line of code is able to use the custom hook
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );

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
