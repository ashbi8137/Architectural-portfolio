"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function StatusBar() {
    const [time, setTime] = useState("");
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Update Time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Kerala Time (IST)
            const formatter = new Intl.DateTimeFormat('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            setTime(formatter.format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
                position: 'fixed',
                bottom: '1rem',
                left: '1rem', // Bottom Left Corner
                right: '1rem',
                zIndex: 90, // Above content, below navbar overlay (99)
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                fontFamily: 'monospace', // Technical font
                fontSize: '0.7rem',
                color: 'rgba(0,0,0,0.5)',
                mixBlendMode: 'difference', // Visible on dark/light
            }}
        >
            {/* Left: Location & Time */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>KERALA, INDIA</span>
                <span>{time} IST</span>
            </div>

            {/* Right: Scroll Indicator */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>SCROLL</span>
                {/* Progress Bar */}
                <div style={{ width: '100px', height: '2px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        style={{
                            scaleX,
                            transformOrigin: 'left',
                            height: '100%',
                            background: 'white',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
