"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calculator, FileText, CheckCircle, Mail, Calendar, Receipt, LayoutDashboard, ArrowRight } from "lucide-react";
import styles from "./SolutionSection.module.css";

const featureIconMap = {
    mail: Mail,
    calendar: Calendar,
    receipt: Receipt,
    dashboard: LayoutDashboard
};

export default function SolutionSection({
    sectionLabel,
    title,
    titleHighlight,
    intro,
    mainFeature,
    testimonial,
    otherFeatures,
    closingMessage,
    ctaText,
    onCTAClick
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.label}>{sectionLabel}</span>
                    <h2 className={styles.title}>
                        {title}<br />
                        <span className={styles.highlight}>{titleHighlight}</span>
                    </h2>
                    {intro && <p className={styles.intro}>{intro}</p>}
                </motion.div>

                {/* Main Feature Card - Offertegenerator */}
                <motion.div
                    className={styles.mainCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.mainCardContent}>
                        <h3 className={styles.mainCardTitle}>{mainFeature.title}</h3>
                        <p className={styles.mainCardSubtitle}>{mainFeature.subtitle}</p>

                        <div className={styles.steps}>
                            {mainFeature.steps.map((step, index) => (
                                <div key={index} className={styles.step}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepContent}>
                                        <strong>{step.title}</strong>
                                        <span>{step.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {testimonial && (
                            <blockquote className={styles.testimonial}>
                                <p>"{testimonial.quote}"</p>
                                <cite>— {testimonial.author}</cite>
                            </blockquote>
                        )}
                    </div>

                    <div className={styles.mainCardVisual}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.phoneNotch} />
                            <div className={styles.phoneContent}>
                                {/* Chat/Notes Input Visual */}
                                <div className={styles.chatBubble}>
                                    <MessageSquare size={24} />
                                    <div className={styles.typingDots}>
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={styles.dot}
                                                animate={{ y: [0, -6, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.notePreview}>
                                    <motion.div
                                        className={styles.noteLine}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "80%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    />
                                    <motion.div
                                        className={styles.noteLine}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "60%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                </div>
                                <div className={styles.processingSteps}>
                                    <motion.div
                                        className={styles.processStep}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <Calculator size={16} />
                                        <span>Berekening...</span>
                                    </motion.div>
                                    <motion.div
                                        className={`${styles.processStep} ${styles.success}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.3 }}
                                    >
                                        <FileText size={16} />
                                        <span>Offerte klaar!</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Features Grid */}
                {otherFeatures && otherFeatures.length > 0 && (
                    <div className={styles.featuresGrid}>
                        {otherFeatures.map((feature, index) => {
                            const Icon = featureIconMap[feature.icon] || CheckCircle;
                            return (
                                <motion.div
                                    key={index}
                                    className={styles.featureCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className={styles.featureIcon}>
                                        <Icon size={24} />
                                    </div>
                                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                                    <p className={styles.featureText}>{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Closing Message */}
                {closingMessage && (
                    <motion.div
                        className={styles.closing}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <CheckCircle size={24} />
                        <p>{closingMessage}</p>
                    </motion.div>
                )}

                {/* CTA Button */}
                {ctaText && onCTAClick && (
                    <motion.div
                        className={styles.ctaWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button onClick={onCTAClick} className={styles.ctaButton}>
                            {ctaText} <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
