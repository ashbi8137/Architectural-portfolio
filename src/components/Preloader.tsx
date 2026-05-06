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
        }, 3000);

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
                        backgroundColor: '#F6F4F0', // Matches var(--background)
                        zIndex: 99999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'relative',
                            width: '40%',
                            maxWidth: '160px',
                            height: 'auto',
                            aspectRatio: '4/1',
                        }}
                    >
                        <img
                            src="/images/logo_final.png"
                            alt="Shamil Puthusseri Architects"
                            style={{ 
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                                mixBlendMode: 'multiply',
                            }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
