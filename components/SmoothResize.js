import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

export default function SmoothResize({ children, className }) {
    let [ref, { height }] = useMeasure();

    return (
        <AnimatePresence initial={false}>
            <motion.div
                className={className}
                animate={{ height: height || "auto" }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}>
                <div ref={ref}>{children}</div>
            </motion.div>
        </AnimatePresence>
    );
}
