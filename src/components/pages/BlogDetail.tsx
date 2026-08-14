import {
  Link,
  useParams,
} from "react-router-dom";
import { getPost } from "../../lib/posts";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = getPost(
    slug || ""
  );

  if (!post) {
    return (
      <main>
        <h1>
          Blog not found
        </h1>

        <Link to="/blog">
          Back to Blogs
        </Link>
      </main>
    );
  }

  return (
    <article>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
        />
      )}

      <h1>
        {post.title}
      </h1>

      <p>
        {post.excerpt}
      </p>

      <div>
        {post.author && (
          <span>
            {post.author}
          </span>
        )}

        {post.category && (
          <span>
            {" · "}
            {post.category}
          </span>
        )}
      </div>

      <div>
        {post.body}
      </div>
    </article>
  );
}