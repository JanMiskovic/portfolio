import DarkToggle from "./DarkToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiStar } from "react-icons/fi";

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <a href="/" className="flex gap-2 items-center text-2xl underline underline-offset-4"><FiStar size={24}/>janmiskovic.com</a>
            <div className="flex gap-3">
                <DarkToggle />
                <LanguageSwitcher/>
            </div>
        </header>
    );
}
