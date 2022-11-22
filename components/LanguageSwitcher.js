import { useRouter } from "next/router";
import Image from "next/future/image";
import Link from "next/link";
import SkFlagImg from "../public/icons/skflag.webp";
import GbFlagImg from "../public/icons/gbflag.webp";

export default function LanguageSwitcher() {
    const { pathname, locale } = useRouter();

    return (
        <div
            className="my-border flex gap-2 rounded-md bg-bg-light py-2
            px-2.5 dark:bg-bg-dark xs:gap-3 xs:px-3.5">
            <Link href={pathname} locale="sk">
                <a
                    aria-label="Switch to Slovak language"
                    onClick={() => {
                        if (locale !== "sk")
                            window.gtag("event", "language_switched", {
                                switched_to: "sk",
                            });
                    }}
                    className="focus-ring focus-ring-loose rounded-md transition-transform
                    duration-200 will-change-transform hover:scale-110 active:scale-110">
                    <Image
                        src={SkFlagImg}
                        alt="Flag icon of the Slovak Republic"
                        className="!h-4 !w-4 xs:!h-5 xs:!w-5 sm:!h-6 sm:!w-6"
                    />
                </a>
            </Link>

            <Link href={pathname} locale="en">
                <a
                    aria-label="Switch to English language"
                    onClick={() => {
                        if (locale !== "en")
                            window.gtag("event", "language_switched", {
                                switched_to: "en",
                            });
                    }}
                    className="focus-ring focus-ring-loose rounded-md transition-transform
                    duration-200 will-change-transform hover:scale-110 active:scale-110">
                    <Image
                        src={GbFlagImg}
                        alt="Flag icon of Great Britain"
                        className="!h-4 !w-4 xs:!h-5 xs:!w-5 sm:!h-6 sm:!w-6"
                    />
                </a>
            </Link>
        </div>
    );
}
