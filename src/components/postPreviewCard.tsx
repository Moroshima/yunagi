import Link from "next/link";

export default function PostPreviewCard({
  post,
}: {
  post: {
    slug: string;
    title: string;
    date: string;
    update: string | null;
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
      <span>{post.category}</span>
      <span>{post.lang}</span>
      {post.keywords.map((value, index) => (
        <span key={`tag-${index}`}>{value}</span>
      ))}
      <Link href={href}>Read more</Link>
    </div>
  );
}
