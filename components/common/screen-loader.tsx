/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/images/loader.png";
interface Star {
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
}

const generateStars = (count: number): Star[] =>
    Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 1.5,
    }));

const ScreeLoader = () => {
    const [mounted, setMounted] = useState(false);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setMounted(true); // Only set mounted here
    }, []);

    useEffect(() => {
        if (mounted) {
            setStars(generateStars(100)); // Generate stars safely after mount
        }
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="relative flex items-center justify-center w-full h-screen bg-black overflow-hidden">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-center items-center"
            >
                <div className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-[450px]">
                    <Image
                        src={logo.src}
                        width={400}
                        height={400}
                        alt="CRYPTAX logo"
                        className="w-full h-full object-contain"
                        priority
                        loading="eager"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ScreeLoader;
