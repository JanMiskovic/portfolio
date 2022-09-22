import Image from "next/future/image";

export default function LanguageSwitcher() {
    return (
        <div className="flex gap-2 xs:gap-3 py-2 px-2.5 xs:px-3.5
            rounded-md my-border bg-bg-light dark:bg-bg-dark">
            
            <Image src="/skflag.webp" width={24} height={24} alt="Flag of the Slovak Republic"
                className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
            <Image src="/gbflag.webp" width={24} height={24} alt="Flag of Great Britain"
                className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
        </div>
    );
}
