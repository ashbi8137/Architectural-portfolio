"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Facebook } from "lucide-react";
import styles from "./Contact.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Contact() {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith('/projects');
    
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Residential",
        message: ""
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const projectTypes = ["Residential", "Commercial", "Interior", "Other"];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const { name, email, subject, message } = formData;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "a262dc5c-e6d3-4f05-b541-b8ae8874153e", // Web3Forms Key
                    name,
                    email,
                    subject,
                    message
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                // Reset after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                    setFormData({ name: "", email: "", subject: "Residential", message: "" });
                }, 5000);
            } else {
                console.error("Web3Forms Error:", result);
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error(error);
            setStatus('idle');
            alert("Failed to send message. Please check your connection.");
        }
    };

    return (
        <section className={`${styles.section} ${isProjectPage ? styles.sectionNoContact : ""}`} id="contact">
            {!isProjectPage && (
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.headerWrapper}
                    >
                        <h2 className={styles.heading}>Let's shape your next space</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.formWrapper}
                    >
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Name</label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Project Type</label>
                                <div className={styles.customSelectWrapper}>
                                    <div
                                        className={styles.customSelectTrigger}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <span>{formData.subject}</span>
                                        <motion.span
                                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                            className={styles.dropdownArrow}
                                        >
                                            ↓
                                        </motion.span>
                                    </div>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className={styles.dropdownOptions}
                                            >
                                                {projectTypes.map((type) => (
                                                    <div
                                                        key={type}
                                                        className={styles.dropdownOption}
                                                        onClick={() => {
                                                            setFormData({ ...formData, subject: type });
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        {type}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Email</label>
                                <input
                                    className={styles.input}
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Message</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={2}
                                    placeholder="Tell us about your vision"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={styles.button}
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success'}
                                    style={{
                                        opacity: status === 'sending' ? 0.7 : 1,
                                        cursor: status === 'success' ? 'default' : 'pointer',
                                        backgroundColor: status === 'success' ? '#4CAF50' : undefined,
                                        color: status === 'success' ? 'white' : undefined,
                                        border: status === 'success' ? 'none' : undefined
                                    }}
                                >
                                    {status === 'idle' && "Send Message"}
                                    {status === 'sending' && "Sending..."}
                                    {status === 'success' && "Message Sent!"}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            <footer className={styles.footer}>
                {!isProjectPage && (
                    <div className={styles.footerGrid}>
                        {/* COLUMN 1: OFFICE ADDRESS */}
                        <div className={styles.footerColumn}>
                            <div className={styles.contactItem}>
                                <h4 className={styles.contactLabel}>Office</h4>
                                <p className={styles.contactValue}>
                                    Hilite Business Park, National Highway 66,<br />
                                    Thondayad, Kozhikode, Kerala<br />
                                    PIN: 673014
                                </p>
                            </div>
                        </div>

                        {/* COLUMN 2: CONTACT INFO */}
                        <div className={styles.footerColumn}>
                            <div className={styles.contactItem}>
                                <h4 className={styles.contactLabel}>Contact</h4>
                                <p className={styles.contactValue}>shamilputhusseri@gmail.com</p>
                                <p className={styles.contactValue}>+91 95674 09124</p>
                            </div>
                        </div>

                        {/* COLUMN 3: SOCIALS */}
                        <div className={styles.footerColumn}>
                            <div className={styles.contactItem}>
                                <h4 className={styles.contactLabel}>Connect</h4>
                                <div className={styles.footerSocials}>
                                    <a href="https://www.instagram.com/ar.shamil_/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                                        <Instagram size={20} strokeWidth={1.5} />
                                    </a>
                                    <a href="https://wa.me/919567409124?text=I%20have%20an%20enquiry" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} title="WhatsApp">
                                        <MessageCircle size={20} strokeWidth={1.5} />
                                    </a>
                                    <a href="https://www.facebook.com/shamil.puthusseri.3" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} title="Facebook">
                                        <Facebook size={20} strokeWidth={1.5} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.copyrightRow}>
                    <p>© {new Date().getFullYear()} Shamil Puthusseri Architects. <br className={styles.mobileBreak} />All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    );
}
