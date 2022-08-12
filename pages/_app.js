import { ThemeProvider } from "next-themes";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    );
}
