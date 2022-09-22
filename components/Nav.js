import ActiveLink from "./ActiveLink";

export default function Nav() {
    return (
        <nav className="flex flex-wrap gap-y-0 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-14 
            mb-4 lg:mb-7 text-black dark:text-white">
            <ActiveLink href="/" scroll={false} activeClassName="active-link">
                <a className="focus-ring focus-ring-loose link transition-hover
                    py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl">
                    Portfolio
                </a>
            </ActiveLink>

            <ActiveLink href="/resume" scroll={false} activeClassName="active-link">
                <a className="focus-ring focus-ring-loose link transition-hover
                    py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl">
                    Resume
                </a>
            </ActiveLink>
            
            <ActiveLink href="/hobbies" scroll={false} activeClassName="active-link">
                <a className="focus-ring focus-ring-loose link transition-hover
                    py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl">
                    Hobbies
                </a>
            </ActiveLink>
            
            <ActiveLink href="/media" scroll={false} activeClassName="active-link">
                <a className="focus-ring focus-ring-loose link transition-hover
                    py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl">
                    Media
                </a>
            </ActiveLink>

            <ActiveLink href="/contact" scroll={false} activeClassName="active-link">
                <a className="focus-ring focus-ring-loose link transition-hover
                    py-2 rounded-md hidden sm:block xs:text-lg sm:text-2xl lg:text-3xl">
                    Contact
                </a>
            </ActiveLink>
        </nav>
    );
}
