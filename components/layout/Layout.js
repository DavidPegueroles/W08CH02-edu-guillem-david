import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tuitah</title>
        <meta name="description" content="Generated by Pegue and Guillem" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
