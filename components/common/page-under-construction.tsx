"use client";

import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { MdOutlineConstruction } from "react-icons/md";

interface Props {
    pageName: string;
}

const PageUnderDevelopment = ({ pageName }: Props) => {
    return (
        // Adjusted height to ensure content doesn't get cut off on short screens.
        // `min-h-[85vh]` ensures it takes up at least 85% of the viewport height, but can grow if needed.
        <div className="w-full px-4 py-3 md:py-10 min-h-[85vh] flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 text-gray-800 dark:from-gray-900 rounded-primary dark:to-gray-800 dark:text-gray-100 transition-colors duration-300">
            {/* Animated icon */}
            <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="md:mb-8 mb-3 flex items-center justify-center" // Slightly increased bottom margin
            >
                <div className="relative">
                    {/* Icon size remains large, but can be scaled if needed on extra-small devices */}
                    <MdOutlineConstruction className="md:text-[80px] text-6xl opacity-70 text-gray-500 dark:text-gray-400 sm:text-[100px]" />
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="absolute -top-4 -right-4"
                    >
                        <FaTools className="text-[32px] text-amber-500 dark:text-amber-400 sm:text-[40px]" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Page name */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                // Responsive font sizing: base size 2xl, md size 3xl, lg size 4xl
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-tight"
            >
                {pageName}
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                // Responsive font sizing: base size text-base, md size text-lg
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 md:mt-4 text-center max-w-lg px-2" // Increased top margin, wider max-width
            >
                This page is currently under development.
                We&apos;re working hard to bring you this feature. Stay tuned!
            </motion.p>

            {/* Subtle animation line */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }} // Slightly longer line
                transition={{ delay: 0.6, duration: 1 }}
                className="h-1 bg-amber-500/50 dark:bg-amber-400/50 mt-8 rounded-full" // Increased height and top margin
            />
        </div>
    );
};

export default PageUnderDevelopment;