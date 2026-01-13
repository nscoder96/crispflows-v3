"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import styles from "./CTASection.module.css";

export default function CTASection({
    title,
    text,
    ctaText,
    ctaSubtext,
    alternativeText,
    onCTAClick
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>

                    <button
                        onClick={onCTAClick}
                        className={styles.ctaButton}
                    >
                        {ctaText} <ArrowRight size={20} />
                    </button>

                    {ctaSubtext && (
                        <p className={styles.subtext}>{ctaSubtext}</p>
                    )}

                    {alternativeText && (
                        <div className={styles.alternative}>
                            <p>{alternativeText}</p>
                            <div className={styles.contactLinks}>
                                <a href="tel:+31653967819" className={styles.contactLink}>
                                    <Phone size={18} /> 06 53 96 78 19
                                </a>
                                <a href="mailto:info@crispflows.com" className={styles.contactLink}>
                                    <Mail size={18} /> info@crispflows.com
                                </a>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
