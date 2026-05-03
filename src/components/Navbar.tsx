"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Studio", href: "#manifesto" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={styles.navbar}>
            {/* LEFT: BRAND LOGO */}
            <a href="#hero" className={styles.brand} onClick={(e) => handleScroll(e, "#hero")}>
                <Image 
                    src="/images/logo_final.png" 
                    alt="Shamil Puthusseri Architects" 
                    width={400} 
                    height={100} 
                    className={styles.brandLogo}
                    priority
                />
            </a>

            {/* RIGHT: INLINE LINKS */}
            <div className={styles.navLinks}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={styles.navItem}
                        onClick={(e) => handleScroll(e, item.href)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
