import ActiveLink from "./ActiveLink";

export default function Nav() {
    return (
        <nav className="focus-ring flex gap-y-0 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-14 flex-wrap mb-4">
            <ActiveLink href="/" activeClassName="active-link">
                <a className="focus-ring py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl
                    hover:text-[#434AFF] dark:hover:text-[#66d4ff] hover:transition-colors">
                    Portfolio
                </a>
            </ActiveLink>

            <ActiveLink href="/resume" activeClassName="active-link">
                <a className="focus-ring py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl
                    hover:text-[#434AFF] dark:hover:text-[#66d4ff] hover:transition-colors">
                    Resume
                </a>
            </ActiveLink>
            
            <ActiveLink href="/hobbies" activeClassName="active-link">
                <a className="focus-ring py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl
                    hover:text-[#434AFF] dark:hover:text-[#66d4ff] hover:transition-colors">
                    Hobbies
                </a>
            </ActiveLink>
            
            <ActiveLink href="/media" activeClassName="active-link">
                <a className="focus-ring py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl
                    hover:text-[#434AFF] dark:hover:text-[#66d4ff] hover:transition-colors">
                    Media
                </a>
            </ActiveLink>

            <ActiveLink href="/contact" activeClassName="active-link">
                <a className="focus-ring py-2 rounded-md hidden sm:block xs:text-lg sm:text-2xl lg:text-3xl
                    hover:text-[#434AFF] dark:hover:text-[#66d4ff] hover:transition-colors">
                    Contact
                </a>
            </ActiveLink>
        </nav>
    );
}
