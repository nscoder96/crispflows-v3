"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Calendar, Users } from "lucide-react";
import styles from "./ProblemSection.module.css";

const iconMap = {
    clock: Clock,
    zap: Zap,
    calendar: Calendar,
    users: Users
};

export default function ProblemSection({
    title,
    problems,
    statistic,
    statisticSubtext,
    emotionalClose
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>{title}</h2>
                </motion.div>

                <div className={styles.grid}>
                    {problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon] || Clock;
                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>{problem.title}</h3>
                                <p className={styles.cardText}>{problem.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {statistic && (
                    <motion.div
                        className={styles.statBox}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className={styles.stat}>{statistic}</p>
                        {statisticSubtext && (
                            <p className={styles.statSub}>{statisticSubtext}</p>
                        )}
                    </motion.div>
                )}

                {emotionalClose && (
                    <motion.p
                        className={styles.emotional}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {emotionalClose}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
