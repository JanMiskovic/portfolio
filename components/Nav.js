import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useIsMd } from "../hooks/useMediaQuery";

export default function Nav() {
    const { pathname } = useRouter();
    const intl = useIntl();
    const isMd = useIsMd();

    const navItems = [
        { name: intl.formatMessage({ id: "nav.portfolio" }), href: "/" },
        { name: intl.formatMessage({ id: "nav.resume" }), href: "/resume" },
        { name: intl.formatMessage({ id: "nav.hobbies" }), href: "/hobbies" },
        { name: intl.formatMessage({ id: "nav.media" }), href: "/media" },
        { name: intl.formatMessage({ id: "nav.contact" }), href: "/contact" },
    ];

    return (
        <nav
            className="mb-4 flex flex-wrap gap-3 gap-y-0 text-black dark:text-white xs:gap-4 
            sm:gap-6 md:gap-8 lg:mb-7 lg:gap-14">
            {navItems.map(({ name, href }) => (
                <Link
                    key={href}
                    href={href}
                    scroll={false}
                    className={`focus-ring focus-ring-loose link transition-hover relative
                    rounded-md py-2 xs:text-lg sm:text-2xl lg:text-3xl
                    ${isActiveLink(href, pathname) ? "active-link" : ""}
                    ${href === "/contact" ? "hidden sm:block" : ""}`}>
                    {name}
                    {isActiveLink(href, pathname) && (
                        <motion.div
                            layoutId={
                                href === "/contact" && !isMd ? "" : "underline"
                            }
                            className="absolute bottom-1.5 left-0 h-0.5
                            w-full bg-[#0c69ff] will-change-transform dark:bg-[#66d4ff]
                            lg:bottom-1 lg:h-[3px]"
                        />
                    )}
                </Link>
            ))}
        </nav>
    );
}

function isActiveLink(href, currentPathname) {
    if (href === "/") return href === currentPathname;
    return currentPathname.startsWith(href);
}
