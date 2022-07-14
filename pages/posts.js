import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import Blogpost from "../component/Blogpost";
import { Personalize } from "@ninetailed/experience.js-next";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blog: response.items,
    },
  };
}

export default function Posts({ blog }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.postLeftContainer}>
          <div className={styles.flex}>
            <div className="w-45p">
              <h1>All Posts</h1>
              <div className={`${styles.card} ${styles.cardMargin}`}>
                <Personalize
                  id="fir"
                  component={Blogpost}
                  text={blog?.map((e) => e.fields).find((e) => !e.nt_audience)}
                  variants={blog
                    ?.map((e) => e.fields)
                    .filter((e) => e.nt_audience)
                    .map((e) => ({
                      text: e,
                      audience: { id: e.nt_audience.fields.nt_audience_id },
                    }))}
                ></Personalize>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postRightContainer}>
          <h1>Recent Posts</h1>
        </div>
      </main>
    </>
  );
}
