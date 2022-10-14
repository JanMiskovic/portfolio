import { useRouter } from "next/router";
import Image from "next/future/image";
import Link from "next/link";
import SkFlagImg from "../public/icons/skflag.webp";
import GbFlagImg from "../public/icons/gbflag.webp";

export default function LanguageSwitcher() {
    const { pathname, locale } = useRouter();

    return (
        <div className="flex gap-2 xs:gap-3 py-2 px-2.5 xs:px-3.5
            rounded-md my-border bg-bg-light dark:bg-bg-dark">
            
            <Link href={pathname} locale="sk">
                <a 
                    onClick={() => {
                        if (locale !== "sk")
                            window.gtag("event", "language_switched", { switched_to: "sk" });
                    }}
                    className="focus-ring focus-ring-loose rounded-md will-change-transform
                    transition-transform hover:scale-110 active:scale-110">

                    <Image src={SkFlagImg} alt="Flag icon of the Slovak Republic"
                        className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
                </a>
            </Link>

            <Link href={pathname} locale="en">
                <a
                    onClick={() => {
                        if (locale !== "en")
                            window.gtag("event", "language_switched", { switched_to: "en" });
                    }}
                    className="focus-ring focus-ring-loose rounded-md will-change-transform
                    transition-transform hover:scale-110 active:scale-110">

                    <Image src={GbFlagImg} alt="Flag icon of Great Britain"
                        className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
                </a>
            </Link>
        </div>
    );
}
