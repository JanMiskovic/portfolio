import { setCookie, getCookies, deleteCookie, getCookie } from "cookies-next";
import { FormattedMessage } from "react-intl";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

export default function CookieConsent({ setShowCookieBanner }) {
    const currentConsent = getCookie("localCookieConsent");

    function acceptCookies() {
        setShowCookieBanner(false);
        if (currentConsent !== true) {
            setCookie("localCookieConsent", "true", {
                maxAge: 60 * 60 * 24 * 365,
            });
            window.gtag("consent", "update", { analytics_storage: "granted" });
            window.gtag("event", "cookie_consent", { consent: "granted" });
        }
    }

    function denyCookies() {
        setShowCookieBanner(false);
        if (currentConsent !== false) {
            window.gtag("event", "cookie_consent", { consent: "denied" });
            window.gtag("consent", "update", { analytics_storage: "denied" });
            Object.keys(getCookies()).forEach((name) => deleteCookie(name));
            setCookie("localCookieConsent", "false", {
                maxAge: 60 * 60 * 24 * 365,
            });
        }
    }

    /* If cookies haven't been accepted or declined yet, 
    set them as denied so the banner doesn't show up again,
    otherwise just close the banner. */
    function closeCookies() {
        if (currentConsent === undefined) {
            denyCookies();
        } else {
            setShowCookieBanner(false);
        }
    }

    return (
        <motion.div
            variants={cookieVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="my-border fixed inset-x-5 bottom-5 
            z-20 flex flex-col justify-between rounded-lg bg-bg-light
            dark:bg-bg-dark sm:bottom-7 sm:right-7
            sm:left-auto sm:w-96 xl:bottom-6 xl:right-6">
            <div
                className="mb-2 flex items-center justify-between
                border-b-2 border-neutral-200 
                px-4 pt-4 pb-2 dark:border-border-dark
                xs:mb-3 xs:text-xl sm:px-5 sm:pb-3">
                <h3>
                    <FormattedMessage id="cookies.title" />
                </h3>
                <button
                    onClick={closeCookies}
                    className="focus-ring focus-ring-loose 
                    rounded-lg transition-transform active:scale-90">
                    <CgClose />
                </button>
            </div>

            <div className="px-4 pb-4 sm:px-5">
                <p className="mb-4 text-sm xs:text-base">
                    <FormattedMessage id="cookies.text" />
                </p>

                <div className="flex w-full gap-3 xs:gap-4 sm:gap-3.5">
                    <button
                        onClick={acceptCookies}
                        className="focus-ring my-border transition-hover
                        basis-1/2 rounded-md bg-[#e9ffee] py-1.5
                        text-center text-sm text-black
                        hover:bg-[#dbffe4] active:bg-[#ccffd9] 
                        dark:bg-[#66ff6b] dark:hover:bg-[#85ff89]
                        dark:active:bg-[#a3ffa6] xs:text-base sm:py-2">
                        <FormattedMessage id="cookies.accept" />
                    </button>
                    <button
                        onClick={denyCookies}
                        className="focus-ring my-border transition-hover
                        basis-1/2 rounded-md bg-[#ffe9f3] py-1.5
                        text-center text-sm text-black
                        hover:bg-[#ffdbeb] active:bg-[#ffcce3]
                        dark:bg-[#ff6666] dark:hover:bg-[#ff8585]
                        dark:active:bg-[#ffa3a3] xs:text-base sm:py-2">
                        <FormattedMessage id="cookies.deny" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

const cookieVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: "spring", duration: 0.5, bounce: 0.4 },
            opacity: { type: "tween", duration: 0.2 },
        },
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};
