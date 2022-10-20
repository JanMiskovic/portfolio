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
            <body className="bg-white dark:bg-[#1a1a1a]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
