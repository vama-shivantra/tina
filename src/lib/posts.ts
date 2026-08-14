const posts = import.meta.glob(
  "../../content/posts/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  publishedAt?: string;
  category?: string;
  tags?: string[];
  body: string;
};

function parseFrontmatter(content: string) {
  const match = content.match(
    /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/
  );

  if (!match) {
    return {
      data: {},
      body: content,
    };
  }

  const frontmatter = match[1];
  const body = match[2];

  const data: Record<string, string | string[]> = {};

  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");

    if (!key || rest.length === 0) return;

    let value = rest.join(":").trim();

    value = value.replace(/^["']|["']$/g, "");

    data[key.trim()] = value;
  });

  return {
    data,
    body,
  };
}

export function getPosts(): BlogPost[] {
  return Object.values(posts).map((file) => {
    const { data, body } = parseFrontmatter(
      file as string
    );

    return {
      slug: data.slug as string,
      title: data.title as string,
      excerpt: data.excerpt as string | undefined,
      coverImage: data.coverImage as string | undefined,
      author: data.author as string | undefined,
      publishedAt: data.publishedAt as string | undefined,
      category: data.category as string | undefined,
      tags: data.tags as string[] | undefined,
      body,
    };
  });
}

export function getPost(slug: string) {
  return getPosts().find(
    (post) => post.slug === slug
  );
}