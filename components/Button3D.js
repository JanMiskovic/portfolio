import { motion } from "motion/react";

export default function Button3D({
    children,
    className,
    innerClassName,
    isLink,
    ...props
}) {
    const outsideProps = {
        className: `focus-ring focus-ring-loose group relative block 
        bg-border-light dark:bg-border-dark ${className}`,
        whileHover: "hover",
        whileTap: "tap",
        ...props,
    };

    const frontSide = () => (
        <motion.span
            variants={buttonVariants}
            className={`border-thick-bottom transition-hover absolute
            inset-0 flex select-none items-center justify-center
            rounded-[inherit] ${innerClassName}`}>
            {children}
        </motion.span>
    );

    return isLink ? (
        <motion.a {...outsideProps}>{frontSide()}</motion.a>
    ) : (
        <motion.button {...outsideProps}>{frontSide()}</motion.button>
    );
}

const buttonVariants = {
    hover: { y: -3 },
    tap: { y: 0 },
};
