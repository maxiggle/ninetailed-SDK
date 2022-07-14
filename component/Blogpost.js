import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Blogpost({ text }) {
  console.log(">>>", { text });
  const v = { ...text, nt_variants: undefined };
  // if ("blog" in props) {
  const blog = v;
  const { articleTitle, slug, description, author } = blog;
  return (
    <>
      <div className="card">
        <div className={styles.inner}>
          <div className="info">
            <h3>{articleTitle}</h3>
            <h4>{description}</h4>
            <h5>{author}</h5>
          </div>
          <div className="details">
            <Link href={"/post/" + slug}>
              <a>Click me for full article</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  // }
  // return <></>

  return <>{JSON.stringify(v)}</>;
}
