import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import Blogpost from "../component/Blogpost";
import { Personalize } from "@ninetailed/experience.js-next";
import { useId } from "react";

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

export default function Home({ blog }) {
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
        <h1 className={styles.title}>Welcome to Raeder!!</h1>

        <p className={styles.description}>
          An article library where readers are recognized for always reading
        </p>
        <div className={styles.flex}>
          <div className="w-45p">
            <div className={styles.card}>
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// Personalize
//     component={Headline}
//     variants={variants}
//     text="We build websites for everbody" // this is the baseline for user which are not in a audience.
//   />
