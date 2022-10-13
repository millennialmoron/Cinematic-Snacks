import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Featured from "../components/Featured";
import MenuList from "../components/MenuList";

export default function Home({ menuList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Cinematic Snacks || The Perfect Menu for Your Movie Night Madness
        </title>
        <meta
          name="description"
          content="Nearby food delivery options and movie theater snacks to complement your home movie night experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <MenuList menuList={menuList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      menuList: res.data,
    },
  };
};
