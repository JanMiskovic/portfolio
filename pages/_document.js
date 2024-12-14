import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-body-light text-black dark:bg-body-dark dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
