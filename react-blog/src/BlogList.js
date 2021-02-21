import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  //we could add a function as props
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            {/*use the link tag to go another page what created in App component Route path=/blogs/:id */}
            <h2>{blog.title}</h2>
            <p> Writen by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
