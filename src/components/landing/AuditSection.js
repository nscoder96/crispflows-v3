"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, FileCheck, Monitor, ThumbsUp, Clock, Video } from "lucide-react";
import styles from "./AuditSection.module.css";

const iconMap = {
    search: Search,
    fileCheck: FileCheck,
    monitor: Monitor,
    thumbsUp: ThumbsUp
};

export default function AuditSection({
    title,
    intro,
    benefits,
    ctaText,
    ctaSubtext,
    duration,
    onCTAClick
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        className={styles.textSide}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.label}>GRATIS AUDIT</span>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.intro}>{intro}</p>

                        <div className={styles.benefits}>
                            {benefits.map((benefit, index) => {
                                const Icon = iconMap[benefit.icon] || Search;
                                return (
                                    <motion.div
                                        key={index}
                                        className={styles.benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={styles.benefitIcon}>
                                            <Icon size={20} />
                                        </div>
                                        <div className={styles.benefitContent}>
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.ctaSide}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaHeader}>
                                <Video size={32} />
                                <span>Online of op locatie</span>
                            </div>

                            <div className={styles.duration}>
                                <Clock size={20} />
                                <span>{duration}</span>
                            </div>

                            <ul className={styles.checkList}>
                                <li>Vrijblijvend</li>
                                <li>Geen verkooppraatje</li>
                                <li>Concreet advies</li>
                            </ul>

                            <button
                                onClick={onCTAClick}
                                className={styles.ctaButton}
                            >
                                {ctaText} <ArrowRight size={18} />
                            </button>

                            {ctaSubtext && (
                                <p className={styles.ctaSubtext}>{ctaSubtext}</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
