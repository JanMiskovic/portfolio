import { useRouter } from "next/router";
import Image from "next/future/image";
import Link from "next/link";

export default function LanguageSwitcher() {
    const { pathname } = useRouter();

    return (
        <div className="flex gap-2 xs:gap-3 py-2 px-2.5 xs:px-3.5
            rounded-md my-border bg-bg-light dark:bg-bg-dark">
            
            <Link href={pathname} locale="sk">
                <a className="transition-transform hover:scale-110 active:scale-110">
                    <Image src="/icons/skflag.webp" width={24} height={24} alt="Flag of the Slovak Republic"
                        className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
                </a>
            </Link>
            <Link href={pathname} locale="en">
                <a className="transition-transform hover:scale-110 active:scale-110">
                    <Image src="/icons/gbflag.webp" width={24} height={24} alt="Flag of Great Britain"
                        className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
                </a>
            </Link>
        </div>
    );
}
