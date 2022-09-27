import Link from "next/link";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Nav() {
    const intl = useIntl();
    const { pathname } = useRouter();

    const navItems = [
        { name: intl.formatMessage({id: "nav.portfolio"}), href: "/" },
        { name: intl.formatMessage({id: "nav.resume"}), href: "/resume" },
        { name: intl.formatMessage({id: "nav.hobbies"}), href: "/hobbies" },
        { name: intl.formatMessage({id: "nav.media"}), href: "/media" },
        { name: intl.formatMessage({id: "nav.contact"}), href: "/contact" }
    ];

    return (
        <nav className="flex flex-wrap gap-y-0 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-14 
            mb-4 lg:mb-7 text-black dark:text-white">
            
            {navItems.map(({ name, href }) => (
                <Link key={href} href={href} scroll={false}>
                    <a className={`relative focus-ring focus-ring-loose link transition-hover
                        py-2 rounded-md xs:text-lg sm:text-2xl lg:text-3xl
                        ${isActiveLink(href, pathname) ? "active-link" : ""}
                        ${href === "/contact" ? "hidden sm:block" : ""}`}>

                        {name}
                        {isActiveLink(href, pathname) && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-1.5 lg:bottom-1 left-0
                                    w-full h-px sm:h-0.5 lg:h-[3px]
                                    bg-[#0c69ff] dark:bg-[#66d4ff] will-change-transform"
                                
                            />
                        )}
                    </a>
                </Link>
            ))}

        </nav>
    );
}

function isActiveLink(href, currentPathname) {
    if (href === "/") 
        return href === currentPathname;
        
    return currentPathname.startsWith(href);
}
