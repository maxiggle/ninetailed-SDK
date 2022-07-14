import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NinetailedProvider } from "@ninetailed/experience.js-next";
import { NinetailedGoogleAnalyticsPlugin } from "@ninetailed/experience.js-plugin-google-analytics";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className="large text-white">Raeder</h1>
        <nav className={styles.navbar}>
          <ul>
            <div className={styles.menu}>
              <li>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">posts</Link>
              </li>
              <div>
                <li>
                  <a href="/">About us</a>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </header>

      <NinetailedProvider clientId="fa3ab8ec-95ae-44dc-b7ae-96cd5a50f219">
        <Component {...pageProps} />
        plugins=
        {[
          NinetailedGoogleAnalyticsPlugin({
            trackingId: "UA-123003597-2",
            actionTemplate: "Audience",
            labelTemplate: "",
          }),
        ]}
      </NinetailedProvider>
      <footer className={styles.footer}>
        <a
          href="https://ninetailed.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/ninetailed.jpeg"
              alt="ninetailed"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </>
  );
}
export default MyApp;
