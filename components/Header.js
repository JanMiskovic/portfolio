import DarkToggle from "./DarkToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    return (
        <header className="flex gap-3 justify-end">
            <DarkToggle />
            <LanguageSwitcher/>
        </header>
    );
}
