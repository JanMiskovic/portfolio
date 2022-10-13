import { FaCookieBite } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

export default function Footer({ setShowCookieBanner }) {
    return (
        <footer className="flex justify-between pt-3 mt-6 sm:mt-7 text-sm
            text-neutral-500 dark:text-neutral-400
            border-neutral-400 dark:border-neutral-500 border-t sm:border-t-0">
            <button onClick={() => setShowCookieBanner(true)}
                className="flex items-center gap-1.5 focus-ring focus-ring-loose rounded-md
                transition-hover hover:text-neutral-600 active:text-neutral-600
                hover:dark:text-neutral-300 active:dark:text-neutral-300">
                
                <FormattedMessage id="footer.manage.cookies"/>
                <FaCookieBite/>
            </button>
            <span className="">© {new Date().getFullYear()} Ján Miškovič</span>
        </footer>
    );
}
