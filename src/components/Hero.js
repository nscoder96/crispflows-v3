"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Decorative Background Elements */}
            <div className={styles.shapes}>
                <motion.div
                    className={`${styles.shape} ${styles.shape1}`}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={`${styles.shape} ${styles.shape2}`}
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className={styles.title}>
                                Stop met werken,<br />
                                <span className={styles.highlight}>begin met automaten.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Ik help hoveniers en agencies om repetitieve taken te automatiseren met AI.
                            Van offertes tot content workflows – volledig hands-off.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link href="#" className="btn btn-primary">
                                Plan een gratis strategiegesprek <ArrowRight size={20} style={{ marginLeft: 8 }} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual Side (Desktop) */}
                    <div className={styles.visual}>
                        <motion.div
                            className={styles.cardStack}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Abstract UI Representation */}
                            <div className={styles.uiCard} style={{ zIndex: 3 }}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.dot} />
                                    <div className={styles.line} style={{ width: '40%' }} />
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.block} />
                                    <div className={styles.block} />
                                </div>
                            </div>
                            <div className={`${styles.uiCard} ${styles.backCard}`} style={{ zIndex: 2, top: 20, left: 20, opacity: 0.6 }} />
                            <div className={`${styles.uiCard} ${styles.backCard}`} style={{ zIndex: 1, top: 40, left: 40, opacity: 0.3 }} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
