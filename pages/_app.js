import { ThemeProvider } from "next-themes";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import en from "../lang/en.json";
import sk from "../lang/sk.json";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();
    const messages = { en, sk };

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <ThemeProvider defaultTheme="system" attribute="class">
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </IntlProvider>
    );
}
