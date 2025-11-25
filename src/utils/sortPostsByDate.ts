export default function sortPostsByDate(
  posts: {
    slug: string;
    title: string;
    date: string;
    update?: string;
    lang: string;
    category: string;
    keywords: string[];
    description: string;
  }[],
) {
  return posts
    .toSorted((a, b) => a.slug.localeCompare(b.slug, "en"))
    .toSorted(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}
