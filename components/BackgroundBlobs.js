import { motion } from "framer-motion";

export default function BackgroundBlobs() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">

            <motion.div 
                animate={{ y: "-90vh", rotate: 150 }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
                className="absolute right-2 -bottom-44">
                <Blob/>
            </motion.div>

        </div>
    );
}

function Blob({ className }) {
    return (
        <svg className={className} width="482" height="482" viewBox="0 0 482 482" xmlns="http://www.w3.org/2000/svg">
            <path d="M176.631 183.716C199.06 143.84 221.28 85.6903 259.779 69.4054C298.518 53.1209 353.297 78.2202 368.377 118.4C383.216 158.58 358.357 213.359 357.303 267.457C356.49 321.796 379.482 374.974 364.534 398.993C349.345 423.012 296.215 417.872 245.727 414.901C195.239 411.93 147.632 411.368 125.311 387.286C102.75 363.203 105.716 315.6 118.519 280.757C131.322 245.914 153.961 223.832 176.631 183.716Z"/>
        </svg>
    );
}
