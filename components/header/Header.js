import DarkToggle from "./DarkToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header() {
    return (
        <header
            className="mb-5 flex flex-wrap items-center
            justify-between gap-2 sm:mb-7 md:mb-11">
            <Logo />
            <div className="flex gap-2 xs:gap-3 sm:gap-3.5">
                <DarkToggle />
                <LanguageSwitcher />
            </div>
        </header>
    );
}
