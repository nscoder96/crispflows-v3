"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageSquare, FileText, Brain } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection({
    badge,
    title,
    titleHighlight,
    subtitle,
    ctaText,
    ctaSubtext,
    onCTAClick
}) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBg}>
                <div className={styles.glowBlob} />
            </div>

            <div className="container">
                <div className={styles.heroGrid}>
                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.heroText}
                    >
                        <div className={styles.badge}>{badge}</div>
                        <h1 className={styles.title}>
                            {title}<br />
                            <span className={styles.highlight}>{titleHighlight}</span>
                        </h1>
                        <p className={styles.subtitle}>{subtitle}</p>
                        <div className={styles.ctaGroup}>
                            <button
                                onClick={onCTAClick}
                                className={styles.primaryBtn}
                            >
                                {ctaText} <ArrowRight size={18} />
                            </button>
                        </div>
                        {ctaSubtext && (
                            <p className={styles.ctaSubtext}>{ctaSubtext}</p>
                        )}
                    </motion.div>

                    {/* RIGHT: Visual */}
                    <div className={styles.heroVisualContainer}>
                        <div className={styles.heroVisual}>
                            {/* Input Icons */}
                            {[
                                { icon: Phone, color: "#F6AD55", top: 26 },
                                { icon: Mail, color: "#63B3ED", top: 126 },
                                { icon: MessageSquare, color: "#68D391", top: 226 }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className={styles.inputIcon}
                                    style={{ top: item.top }}
                                >
                                    <item.icon size={24} color={item.color} />
                                </motion.div>
                            ))}

                            {/* Connecting Lines */}
                            <svg className={styles.flowLines}>
                                <motion.path
                                    d="M 48 50 C 120 50, 120 150, 210 150"
                                    fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                />
                                <motion.circle r="3" fill="#cbd5e0">
                                    <animateMotion dur="3s" repeatCount="indefinite" path="M 48 50 C 120 50, 120 150, 210 150" />
                                </motion.circle>

                                <motion.path
                                    d="M 48 150 L 210 150"
                                    fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                />
                                <motion.circle r="3" fill="#cbd5e0">
                                    <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 48 150 L 210 150" />
                                </motion.circle>

                                <motion.path
                                    d="M 48 250 C 120 250, 120 150, 210 150"
                                    fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                />
                                <motion.circle r="3" fill="#cbd5e0">
                                    <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 48 250 C 120 250, 120 150, 210 150" />
                                </motion.circle>
                            </svg>

                            {/* AI Core */}
                            <div className={styles.aiCore}>
                                <motion.div
                                    className={styles.aiCoreInner}
                                    animate={{ boxShadow: ["0 0 20px rgba(66, 153, 225, 0.3)", "0 0 40px rgba(66, 153, 225, 0.6)", "0 0 20px rgba(66, 153, 225, 0.3)"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Brain size={32} />
                                    <div className={styles.aiCoreRing} />
                                </motion.div>
                            </div>

                            {/* Output Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className={styles.outputCard}
                            >
                                <div className={styles.outputHeader}>
                                    <div className={styles.outputDot} />
                                    <span>Resultaat</span>
                                </div>
                                <div className={styles.outputContent}>
                                    <div className={styles.outputIcon}>
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.outputTitle}>Offerte #2024</div>
                                        <div className={styles.outputMeta}>Klaar voor verzending</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
