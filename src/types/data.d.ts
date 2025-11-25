declare module "@data/posts.json" {
  const posts: {
    slug: string;
    title: string;
    date: string;
    update?: string;
    lang: string;
    category: string;
    keywords: string[];
    description: string;
  }[];
  export default posts;
}
