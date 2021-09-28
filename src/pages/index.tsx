import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starter</title>
        <meta name="description" content="Nextjs Starter Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto px-2 flex flex-col"></main>

      <footer></footer>
    </div>
  );
}
