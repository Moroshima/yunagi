import { useRouter } from "next/router";
import posts from "../pages/post/posts.json";

function Heading({ children, ...props }: any) {
  const router = useRouter();
  const postName = router.pathname.substring(1).split("/")[1];
  const post = posts.find((item) => item.name === postName);
  console.log(post);
  return (
    <>
      <h1>{children}</h1>
      <p>
        {post?.date}
        {post?.date === post?.updated ? "" : "（更新于 " + post?.updated + "）"}
        {post?.tags.map((value, index, array) => (
          <span key={`tag-${index}`}>{" " + value}</span>
        ))}
      </p>
    </>
  );
}

export default Heading;
