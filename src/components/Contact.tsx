"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Residential",
        message: ""
    });

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
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.formSide}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.heading}>Let's shape your next space.</h2>
                        <p className={styles.subheading}>
                            For collaborations, commissions, and consultations with Ar Shamil P A.
                        </p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    className={styles.input}
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Project Type</label>
                                <select
                                    className={styles.select}
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                >
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Interior">Interior</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Message</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="Tell us about your vision"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.imageSide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/Architectural-portfolio/images/contact_minimal_design.png"
                        alt="Minimalist Architecture"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div>
                        <strong>Shamil Puthusseri Architects</strong>
                        <br />
                        <span style={{ opacity: 0.6 }}>shamilputhusheri@gmail.com</span>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                        <a href="#" className={styles.socialLink}>Behance</a>
                    </div>
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '1rem' }}>
                    © {new Date().getFullYear()} Shamil Puthusseri Architects. All rights reserved.
                </div>
            </footer>
        </section>
    );
}
