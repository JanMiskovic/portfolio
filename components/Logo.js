import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
    const iconVariants = {
        hover: {
            rotate: -72,
        }
    };

    return (
        <motion.div whileHover="hover" whileTap="hover" className="group">
            <Link href="/">
                <a className="focus-ring focus-ring-loose link transition-hover
                    flex gap-1.5 xs:gap-2 items-center rounded-md
                    xs:text-xl sm:text-2xl underline underline-offset-4">
            
                    <motion.div
                        variants={iconVariants}
                        transition= {{
                            type: "spring",
                            damping: 11.5,
                            mass: 0.7,
                            stiffness: 170
                        }}
                        className="origin-center mt-0.5 xs:mt-1.5">
                        <FiStar className="fill-transparent group-hover:fill-current
                            group-active:fill-current
                            w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6"/>
                    </motion.div>
                    janmiskovic.com
                </a>
            </Link>
        </motion.div>
    );
}
