import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="text-black bg-white
                dark:bg-[#1E1E1E] dark:text-white transition-colors">

                <Main />
                <NextScript />
            </body>
        </Html>
    );
}