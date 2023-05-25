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
      <p className="heading">
        {post?.date.replace("T", " ")}
        {post?.date === post?.updated
          ? ""
          : post?.updated === null
          ? ""
          : "（更新于 " + post?.updated.replace("T", " ") + "）"}

        {post?.tags.map((value, index, array) => (
          <span key={`tag-${index}`}>{value}</span>
        ))}
      </p>
    </>
  );
}

export default Heading;
