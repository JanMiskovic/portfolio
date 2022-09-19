import Clock from "./Clock";

export default function Footer() {
    return (
        <footer className="flex justify-between pt-3 mt-6 sm:mt-7 text-sm text-neutral-500
            border-neutral-400 dark:border-neutral-600 border-t sm:border-t-0 transition-colors">
            <Clock />
            <span className="">© {new Date().getFullYear()} Ján Miškovič</span>
        </footer>
    );
}
