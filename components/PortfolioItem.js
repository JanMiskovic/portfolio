import { motion } from "motion/react";
import Image from "next/image";

export default function PortfolioItem({ href, img, name, stack, className }) {
    return (
        <motion.a
            whileHover="active"
            whileTap="active"
            href={href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring focus-ring-loose flex flex-col rounded-lg">
            <div
                className={`border-thick-bottom mb-1.5 rounded-lg p-[10%] md:mb-2.5 ${className}`}>
                <motion.div
                    variants={imageVariants}
                    className="will-change-transform">
                    <Image
                        src={img}
                        placeholder="blur"
                        alt={`Preview image of website ${name}`}
                        className="rounded-sm bg-neutral-200 shadow-sharp dark:bg-neutral-500
                            dark:shadow-sharp-dark"
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

const imageVariants = {
    active: { rotate: -1.5, scale: 1.05 },
};
