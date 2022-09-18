import Image from "next/future/image";
import { motion } from "framer-motion";

export default function PortfolioItem({ href, img, name, stack, className }) {

    const image = {
        active: { rotate: -2, scale: 1.05}
    };

    return (
        <motion.a whileHover="active" whileTap="active"
            href={href} target="_blank" rel="noreferrer"
            className="flex flex-col rounded-lg focus-ring focus-ring-loose">
            <div className={`my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5
                transition-colors ${className}`}>
                <motion.div variants={image}
                    className="rounded-sm shadow-sharp dark:shadow-sharp-dark
                    bg-neutral-200 dark:bg-neutral-500 transition-shadow">
                    <Image src={img} width={640} height={360} alt={`Preview image of website ${name}`}/>
                </motion.div>
            </div>
            <h3 className="xs:text-lg sm:text-xl lg:text-2xl">{name}</h3>
            <span className="text-2xs xs:text-xs md:text-sm lg:text-base">{stack}</span>
        </motion.a>
    );
}
