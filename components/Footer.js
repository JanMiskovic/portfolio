import { hasCookie } from "cookies-next";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaCookieBite } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import CookieConsent from "./CookieConsent";

export default function Footer() {
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
        setTimeout(
            () => setShowCookieBanner(!hasCookie("localCookieConsent")),
            650
        );
    }, []);

    return (
        <footer
            className="mt-6 flex justify-between border-t border-neutral-400 pt-3 text-sm
                text-neutral-500 sm:mt-7 sm:border-t-0 dark:border-neutral-500
                dark:text-neutral-400">
            <button
                onClick={() => {
                    setShowCookieBanner((prev) => !prev);
                    window.gtag("event", "manage_cookies");
                }}
                className="focus-ring focus-ring-loose transition-hover flex items-center gap-1.5
                    rounded-md hover:text-neutral-600 active:text-neutral-600
                    hover:dark:text-neutral-300 active:dark:text-neutral-300">
                <FormattedMessage id="footer.cookies" />
                <FaCookieBite />
            </button>
            <a
                href="https://github.com/JanMiskovic/portfolio"
                target="_blank"
                rel="noreferrer"
                className="focus-ring focus-ring-loose transition-hover flex items-center gap-1.5
                    rounded-md hover:text-neutral-600 active:text-neutral-600
                    hover:dark:text-neutral-300 active:dark:text-neutral-300">
                <BsGithub />
                <FormattedMessage id="footer.source" />
            </a>

            <AnimatePresence>
                {showCookieBanner && (
                    <CookieConsent setShowCookieBanner={setShowCookieBanner} />
                )}
            </AnimatePresence>
        </footer>
    );
}
