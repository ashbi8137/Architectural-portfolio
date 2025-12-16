"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Projects", href: "#projects" },
    { name: "Vision", href: "#manifesto" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Overlay Animation Variants
    const overlayVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
        }
    };

    const linkVariants = {
        closed: { y: 100, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.1 * i, duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
        })
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                {/* LEFT: BRAND */}
                <div className={styles.brand}>
                    SHAMIL PUTHUSSERI
                </div>

                {/* CENTER: MENU TRIGGER */}
                <div className={styles.menuTriggerWrapper} onClick={toggleMenu}>
                    <div className={styles.menuLine}></div>
                    <span className={styles.menuText}>{isOpen ? "CLOSE" : "MENU"}</span>
                </div>

                {/* RIGHT: CONTACT */}
                <div className={styles.contactLink}>
                    <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>CONTACT</a>
                </div>
            </nav>

            {/* FULL SCREEN OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className={styles.navLinks}>
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.name}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <a
                                        href={item.href}
                                        className={styles.navItem}
                                        onClick={(e) => handleScroll(e, item.href)}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
