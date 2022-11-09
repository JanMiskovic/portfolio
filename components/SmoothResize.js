import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function SmoothResize({ children }) {
    let [ref, { height }] = useMeasure();

    return (
        <AnimatePresence initial={false}>
            <motion.div
                animate={{ height: height || "auto" }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}>
                <div ref={ref}>{children}</div>
            </motion.div>
        </AnimatePresence>
    );
}
