import DarkToggle from "./DarkToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex justify-between gap-2 flex-wrap items-center mb-5 sm:mb-7 md:mb-11">
            <Logo/>
            <div className="flex gap-2 xs:gap-3 sm:gap-3.5">
                <DarkToggle/>
                <LanguageSwitcher/>
            </div>
        </header>
    );
}
