"use client";

import { motion } from "framer-motion";
import styles from "./TrustStrip.module.css";

const defaultLogos = ["Exact Online", "Moneybird", "Realworks", "2BA", "Gripp", "Offorte"];

export default function TrustStrip({ label, logos = defaultLogos }) {
    return (
        <motion.div
            className={styles.strip}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <p className={styles.label}>{label || "Wij integreren naadloos met"}</p>
                <div className={styles.logoGrid}>
                    {logos.map((name, i) => (
                        <motion.span
                            key={i}
                            className={styles.logo}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            {name}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
