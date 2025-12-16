"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading / Intro duration (2.5 seconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0); // Reset scroll on entry
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#FDFCF8', // Matches var(--background)
                        zIndex: 99999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.5 }}
                        animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }} // Smooth editorial ease
                        style={{
                            position: 'relative',
                            width: '80%',
                            maxWidth: '500px',
                            height: 'auto',
                            aspectRatio: '3/1'
                        }}
                    >
                        <Image
                            src="/Architectural-portfolio/images/logo_clean_v2.png"
                            alt="Shamil Puthusseri Architects"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
