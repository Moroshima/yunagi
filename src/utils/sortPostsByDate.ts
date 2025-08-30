export default function sortPostsByDate(
  posts: {
    slug: string;
    title: string;
    date: string;
    update: string | null;
    lang: string;
    category: string;
    keywords: string[];
    description: string;
  }[],
) {
  return posts
    .sort((a, b) => a.slug.localeCompare(b.slug, "en"))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
