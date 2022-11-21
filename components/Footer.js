import { BsGithub } from "react-icons/bs";
import { FaCookieBite } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

export default function Footer({ setShowCookieBanner }) {
    return (
        <footer
            className="mt-6 flex justify-between border-t border-neutral-400 pt-3
            text-sm text-neutral-500 dark:border-neutral-500 dark:text-neutral-400
            sm:mt-7 sm:border-t-0">
            <button
                onClick={() => {
                    setShowCookieBanner(true);
                    window.gtag("event", "manage_cookies");
                }}
                className="focus-ring focus-ring-loose transition-hover flex items-center 
                gap-1.5 rounded-md hover:text-neutral-600 active:text-neutral-600
                hover:dark:text-neutral-300 active:dark:text-neutral-300">
                <FormattedMessage id="footer.cookies" />
                <FaCookieBite />
            </button>
            <a
                href="https://github.com/JanMiskovic/portfolio"
                target="_blank"
                rel="noreferrer"
                className="focus-ring focus-ring-loose transition-hover flex items-center
                gap-1.5 rounded-md hover:text-neutral-600 active:text-neutral-600
                hover:dark:text-neutral-300 active:dark:text-neutral-300">
                <BsGithub />
                <FormattedMessage id="footer.source" />
            </a>
        </footer>
    );
}
