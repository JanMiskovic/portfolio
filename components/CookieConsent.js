import { setCookie, getCookies, deleteCookie, getCookie } from "cookies-next";
import { FormattedMessage } from "react-intl";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

export default function CookieConsent({ setShowCookieBanner }) {
    function acceptCookies() {
        setShowCookieBanner(false);
        const localCookieConsent = getCookie("localCookieConsent");
        if (localCookieConsent !== true) {
            setCookie("localCookieConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
            window.gtag("consent", "update", { analytics_storage: "granted" });
            window.gtag("event", "cookie_consent", { consent: "granted" });
        }
    }

    function denyCookies() {
        setShowCookieBanner(false);
        const localCookieConsent = getCookie("localCookieConsent");
        if (localCookieConsent !== false) {
            window.gtag("event", "cookie_consent", { consent: "denied" });
            window.gtag("consent", "update", { analytics_storage: "denied" });
            Object.keys(getCookies()).forEach((name) => deleteCookie(name));
            setCookie("localCookieConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
        }
    }
    
    const cookieVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: {
            y: { type: "spring", duration: 0.5, bounce: 0.4 },
            opacity: { type: "tween", duration: 0.2 }
        }},
        exit: { y: 50, opacity: 0, transition: {
            type: "tween", duration: 0.2, ease: "easeInOut"
        }}
    };

    return (
        <motion.div
            variants={cookieVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-5 inset-x-5 z-20 
            sm:bottom-7 sm:right-7 xl:bottom-6 xl:right-6 sm:left-auto sm:w-96
            flex flex-col justify-between will-change-transform
            my-border rounded-lg bg-bg-light dark:bg-bg-dark">

            <div className="flex justify-between items-center mb-2 xs:mb-3 pt-4 pb-2 sm:pb-3 px-4 sm:px-5
                border-b-2 border-neutral-200 dark:border-border-dark xs:text-xl">

                <h3><FormattedMessage id="cookies.title"/></h3>
                <button onClick={() => setShowCookieBanner(false)}
                    className="transition-transform active:scale-90 
                    focus-ring focus-ring-loose rounded-lg">

                    <CgClose/>
                </button>
            </div>

            <p className="text-sm xs:text-base mb-4 px-4 sm:px-5">
                <FormattedMessage id="cookies.text"/>
            </p>

            <div className="flex w-full gap-3 xs:gap-4 sm:gap-3.5 px-4 sm:px-5 pb-4">
                <button onClick={acceptCookies}
                    className="focus-ring my-border transition-hover 
                    basis-1/2 rounded-md py-1.5 sm:py-2
                    text-sm xs:text-base text-center 
                    text-black bg-[#e9ffee] hover:bg-[#dbffe4] active:bg-[#ccffd9]
                    dark:bg-[#66ff6b] dark:hover:bg-[#85ff89] dark:active:bg-[#a3ffa6]">

                    <FormattedMessage id="cookies.accept"/> 
                </button>

                <button onClick={denyCookies}
                    className="focus-ring my-border transition-hover 
                    basis-1/2 rounded-md py-1.5 sm:py-2
                    text-sm xs:text-base text-center 
                    text-black bg-[#ffe9f3] hover:bg-[#ffdbeb] active:bg-[#ffcce3]
                    dark:bg-[#ff6666] dark:hover:bg-[#ff8585] dark:active:bg-[#ffa3a3]">

                    <FormattedMessage id="cookies.deny"/> 
                </button>
            </div>
        </motion.div>
    );
}