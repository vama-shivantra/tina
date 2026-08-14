import { Link } from "react-router-dom";
import { getPosts } from "../../lib/posts";

export default function Blog() {
  const posts = getPosts();
  console.log("getPosts",getPosts);
  

  return (
    <div>
      <h1>Blogs</h1>

      <div>
        {posts.map((post) => (
          <article key={post.slug}>
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
              />
            )}

            <h2>{post.title}</h2>

            <p>{post.excerpt}</p>

            <p>{post.category}</p>

            <Link to={`/blog/${post.slug}`}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}