const BlogList = ({ blogs, title }) => {
  //we could add a function as props
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Writen by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
