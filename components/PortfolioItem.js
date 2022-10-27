import Image from "next/future/image";
import { motion } from "framer-motion";

export default function PortfolioItem({ href, img, name, stack, className }) {
    const image = {
        active: { rotate: -1.5, scale: 1.05 }
    };

    return (
        <motion.a
            whileHover="active"
            whileTap="active"
            href={href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring focus-ring-loose flex flex-col rounded-lg">
            <div
                className={`my-border mb-1.5 rounded-lg p-[10%] md:mb-2.5 ${className}`}>
                <motion.div variants={image} className="will-change-transform">
                    <Image
                        src={img}
                        placeholder="blur"
                        alt={`Preview image of website ${name}`}
                        className="rounded-sm bg-neutral-200 shadow-sharp
                        dark:bg-neutral-500 dark:shadow-sharp-dark"
                    />
                </motion.div>
            </div>
            <h2 className="xs:text-lg sm:text-xl lg:text-2xl">{name}</h2>
            <span className="text-2xs xs:text-xs md:text-sm lg:text-base">
                {stack}
            </span>
        </motion.a>
    );
}
