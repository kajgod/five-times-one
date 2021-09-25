import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>5x1</title>
        <meta
          name="description"
          content="Jurica Starešinčić Kajgod's personal education portal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Have fun @ 5x1</h1>

        <p className={styles.description}>
          Personal education blog and diary of one
          <span className="vcard">
            <span className="fn">Jurica Starešinčić</span>
          </span>
          &apos;s
        </p>

        <div className={styles.grid}>
          <Link href="/jurica/blog">
            <a className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>Techology blog.</p>
            </a>
          </Link>

          <Link href="/jurica/diary">
            <a className={styles.card}>
              <h2>Diary &rarr;</h2>
              <p>
                Daily diary of notes and memos I type after learning something.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
       Bla bla
      </footer>
    </div>
  );
};

export default Home;
