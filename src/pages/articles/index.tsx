import Link from "next/link";
import list from "./list.json";

export default function Article() {
  console.log(list);
  return (
    <>
      <>articles</>
      <ul>
        {list.articles.map((element, index, array) => {
          return (
            <li key={index}>
              <Link key={index} href={"articles/" + element.title}>
                {element.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
