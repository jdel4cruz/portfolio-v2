import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="text-">
      <Head>
        <title>John De La Cruz - A Front-end Dev</title>
        <meta name="description" content="John De La Cruz's portfolio site" />
        <meta name="author" content="John De La Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
