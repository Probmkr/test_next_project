import Head from "next/head";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import DarkModeButton from "./darkModeButton";
import Sidebar from "./sidebar";
import { initialTheme } from "./themeControl";
import styles from "../styles/Layout.module.scss";

export default function Layout({
  children,
  pageTitle,
  noHeader = false,
  noFooter = false,
  noDarkModeButton = false,
}) {
  useEffect(() => {
    initialTheme();
    console.log("used effect");
  });

  return (
    <>
      <div id="container" className={`${styles.container} flex flex-column`}>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {noHeader ? null : <Header title={pageTitle} />}
        <Sidebar />
        <div className={styles.mainContainer}>
          {noDarkModeButton ? null : <DarkModeButton />}
          <main className={styles.main}>{children}</main>
        </div>
        {noFooter ? null : <Footer />}
      </div>
    </>
  );
}
