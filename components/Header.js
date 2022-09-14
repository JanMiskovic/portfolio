import DarkToggle from "./DarkToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiStar } from "react-icons/fi";

export default function Header() {
    return (
        <header className="flex justify-between gap-2 flex-wrap items-center pb-5 sm:pb-9 md:pb-11">
            <a href="/" className="focus-ring flex gap-1.5 xs:gap-2 items-center rounded-md
                xs:text-xl sm:text-2xl underline underline-offset-4">
                <FiStar className="mt-1 xs:mt-1.5 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6"/>
                janmiskovic.com
            </a>
            <div className="flex gap-2 xs:gap-3 sm:gap-3.5">
                <DarkToggle />
                <LanguageSwitcher/>
            </div>
        </header>
    );
}
