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
        }, 2200);

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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            position: 'relative',
                            width: '80%',
                            maxWidth: '500px',
                            height: 'auto',
                            aspectRatio: '3/1' // Approximate for text logo
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
