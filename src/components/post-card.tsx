import Link from "next/link";

export default function PostCard({
  post,
}: {
  post: {
    slug: string;
    title: string;
    date: string;
    update?: string;
    lang: string;
    category: string;
    keywords: string[];
    description: string;
  };
}) {
  const href = `/post/${post.slug}`;
  return (
    <div>
      <Link href={href}>{post.title}</Link>
      <span>{post.date}</span>
      <Link href={"/category/" + post.category}>{post.category}</Link>
      <span>{post.lang}</span>
      {post.keywords.map((value, index) => (
        <Link key={`tag-${index}`} href={"/keyword/" + value}>
          {value}
        </Link>
      ))}
    </div>
  );
}
