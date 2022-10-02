import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>{`Resume`}</title>
        <meta name="description" content="My Resume" />
        <meta name="author" content="John De La Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <iframe
        className="w-screen h-screen"
        src="/pdfs/John_De_La_Cruz_Resume.pdf"
      />
    </>
  );
}
