"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useId } from "react";

// Create custom motion components for SVG filter primitives
const MotionTurbulence = motion.feTurbulence;
const MotionDisplacement = motion.feDisplacementMap;

interface LiquidImageProps extends ImageProps {
    className?: string;
}

export default function LiquidImage({ src, alt, className, ...props }: LiquidImageProps) {
    // Generate safe unique ID for the filter
    const id = useId().replace(/:/g, "");
    const filterId = `liquid-${id}`;

    return (
        <motion.div
            className={`relative overflow-hidden w-full h-full ${className || ''}`}
            initial="rest"
            whileHover="hover"
        >
            {/* Hidden SVG Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
                <defs>
                    <filter id={filterId}>
                        <MotionTurbulence
                            type="fractalNoise"
                            baseFrequency="0"
                            numOctaves="1"
                            result="noise"
                            variants={{
                                rest: { baseFrequency: 0 },
                                hover: { baseFrequency: 0.05 }
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <MotionDisplacement
                            in="SourceGraphic"
                            in2="noise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            variants={{
                                rest: { scale: 0 },
                                hover: { scale: 20 }
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </filter>
                </defs>
            </svg>

            {/* The Image with Filter Applied */}
            <motion.div
                className="w-full h-full block"
                style={{ filter: `url(#${filterId})` }}
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src={src}
                    alt={alt}
                    {...props}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </motion.div>
    );
}
