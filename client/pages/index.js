import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { apiGet } from "../services/api";
import classnames from "classnames";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [message, setMessage] = useState("");

  async function fetchApi(event) {
    event.preventDefault();
    const input = event.target.name.value;
    const response = await apiGet(input);
    setMessage(response.message);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Test Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Next.js and Azure Test Webapp
        </h1>
        <form onSubmit={fetchApi}>
          <div className={styles.formWrap}>
            <input type="text" id="name" name="name" className={styles.input} />
            <button type="submit" className={styles.button}>
              Call API
            </button>
          </div>
        </form>
        <div className={classnames({ [styles.message]: message !== "" })}>
          {message}
        </div>
        <Link href="/routes/testRoute">
          <a className={styles.link}>Test Route</a>
        </Link>
      </main>
    </div>
  );
}
