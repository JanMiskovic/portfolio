import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="dark:bg-[#1E1E1E]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}