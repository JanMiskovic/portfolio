import { motion } from "motion/react";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

export default function Logo() {
    return (
        <motion.div whileHover="hover" whileTap="hover" className="group">
            <Link
                href="/"
                className="focus-ring focus-ring-loose link transition-hover
                flex items-center gap-1.5 rounded-md underline
                underline-offset-4 xs:gap-2 xs:text-xl sm:text-2xl">
                <motion.div
                    variants={iconVariants}
                    transition={{
                        type: "spring",
                        damping: 11.5,
                        mass: 0.7,
                        stiffness: 170,
                    }}
                    className="mt-0.5 origin-center xs:mt-1.5">
                    <FiStar
                        className="h-4 w-4 fill-transparent
                        group-hover:fill-current group-active:fill-current 
                        xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                    />
                </motion.div>
                janmiskovic.com
            </Link>
        </motion.div>
    );
}

const iconVariants = {
    hover: {
        rotate: -72,
    },
};
