import Head from "next/head";

export default function Layout({ title, desc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer></footer>
    </div>
  );
}
