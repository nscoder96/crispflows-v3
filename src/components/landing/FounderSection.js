"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import styles from "./FounderSection.module.css";

export default function FounderSection({
    title,
    titleHighlight,
    quote,
    paragraphs,
    founderName,
    founderRole,
    founderImage
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.imageContainer}>
                        <div className={styles.imageGlow} />
                        <img
                            src={founderImage || "/niek-profile.png"}
                            alt={`${founderName} - ${founderRole}`}
                            className={styles.image}
                        />
                        <div className={styles.badge}>
                            <User size={16} /> {founderRole}
                        </div>
                    </div>
                    <div className={styles.mobileBadge}>{founderRole}</div>

                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {title} <span className={styles.highlight}>{titleHighlight}</span>
                        </h2>

                        {quote && (
                            <p className={styles.quote}>"{quote}"</p>
                        )}

                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}

                        <div className={styles.signature}>
                            <img
                                src={founderImage || "/niek-profile.png"}
                                alt={founderName}
                                className={styles.signatureAvatar}
                            />
                            <div className={styles.signatureInfo}>
                                <p>{founderName}</p>
                                <span>{founderRole} CrispFlows</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
