"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "STUDIO", href: "/studio" },
    { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMenuOpen(false); // Close mobile menu

        // If we are navigating to an anchor on the current page
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                {/* LEFT: BRAND LOGO */}
                <Link href="/" className={styles.brand} onClick={(e) => handleScroll(e, "/")}>
                    <Image 
                        src="/images/logo_final.png" 
                        alt="Shamil Puthusseri Architects" 
                        width={400} 
                        height={100} 
                        className={styles.brandLogo}
                        priority
                    />
                </Link>

                {/* RIGHT: INLINE LINKS (Desktop) / HAMBURGER (Mobile) */}
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.navItem}
                            onClick={(e) => handleScroll(e, item.href)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* MOBILE HAMBURGER */}
                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                </button>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className={styles.mobileMenu}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <button 
                            className={styles.closeMenu}
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        <div className={styles.mobileNavLinks}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={styles.mobileNavItem}
                                    onClick={(e) => handleScroll(e, item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
