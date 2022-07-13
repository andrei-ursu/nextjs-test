import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function TestRoute() {
  return (
    <>
      <Head>
        <title>Next.js Test Route</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>This is a test route</h1>
          <Link href="/">
            <a className={styles.link}>Go Back</a>
          </Link>
        </main>
      </div>
    </>
  );
}
