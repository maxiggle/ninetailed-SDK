import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  // console.log(blog)

  return (
    <div className={styles.container}>
      <Head>
        <title>Ninetailed Personalization</title>
        <meta
          name="description"
          content="Learning how to use Nextjs and Ninetailed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <div>
            <h1 className={`${styles.fonts} large`}>
              Welcome to a library where{" "}
              <span className="text-accent">
                Readers are rewarded for reading
              </span>{" "}
              with so much Elegance!!
            </h1>
            <article className="line-height-2">
              There is no better place find excellence and better advance your
              knowledge than being on Raeder. Get the best articles from only
              the top writers. s simply dummy text of the printing and
              typesetting industry.
            </article>

            <button className={styles.homeButton} onClick>
              Let's get Reading
            </button>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img src="/post.svg" alt="post" className={styles.imgSize} />
        </div>
      </main>
    </div>
  );
}

// Personalize
//     component={Headline}
//     variants={variants}
//     text="We build websites for everbody" // this is the baseline for user which are not in a audience.
//   />
