"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorkflowVisualizer.module.css";
import { FileText, Cpu, CheckCircle, Database, Mic, FileJson } from "lucide-react";

const scenarios = {
    hovenier: {
        steps: [
            { icon: FileText, label: "Notities", color: "#4A90D9" },
            { icon: Database, label: "Database", color: "#63B3ED" },
            { icon: Cpu, label: "AI Magic", color: "#FF8C42" },
            { icon: CheckCircle, label: "Offerte PDF", color: "#48BB78" }
        ]
    },
    agency: {
        steps: [
            { icon: Mic, label: "Interview", color: "#9F7AEA" },
            { icon: FileJson, label: "Transcript", color: "#D6BCFA" },
            { icon: Cpu, label: "AI Magic", color: "#FF8C42" },
            { icon: FileText, label: "Content", color: "#F687B3" }
        ]
    }
};

export default function WorkflowVisualizer() {
    const [activeTab, setActiveTab] = useState("hovenier");

    // Auto-switch tabs every 5 seconds for "Movement"
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(prev => prev === "hovenier" ? "agency" : "hovenier");
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSteps = scenarios[activeTab].steps;

    return (
        <section className={styles.container}>
            {/* Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className={`${styles.orb} ${styles.orb1}`}
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className={`${styles.orb} ${styles.orb2}`}
            />

            <div className="container">
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Zie hoe het werkt</h2>
                    <p className={styles.subtitle}>Van chaos naar structuur, volledig geautomatiseerd.</p>
                </div>

                <div className={styles.stage}>
                    {/* Toggle */}
                    <div className={styles.toggleContainer}>
                        <div className={styles.toggle}>
                            <motion.div
                                className={styles.toggleBg}
                                layoutId="toggleBg"
                                style={{
                                    width: activeTab === "hovenier" ? 100 : 100, // Approximate width
                                    x: activeTab === "hovenier" ? 0 : 100
                                }}
                            />
                            <button
                                onClick={() => setActiveTab("hovenier")}
                                className={styles.toggleBtn}
                                data-active={activeTab === "hovenier"}
                            >
                                Hovenier
                            </button>
                            <button
                                onClick={() => setActiveTab("agency")}
                                className={styles.toggleBtn}
                                data-active={activeTab === "agency"}
                            >
                                Agency
                            </button>
                        </div>
                    </div>

                    {/* Workflow Animation */}
                    <div className={styles.workflow}>
                        <AnimatePresence mode="wait">
                            {currentSteps.map((step, index) => (
                                <div key={activeTab + index} style={{ display: 'contents' }}>
                                    {/* Node */}
                                    <motion.div
                                        className={styles.node}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <motion.div
                                            className={styles.iconBox}
                                            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                                        >
                                            <step.icon size={28} color={step.color} />
                                        </motion.div>
                                        <span className={styles.label}>{step.label}</span>
                                    </motion.div>

                                    {/* Connector (not after last item) */}
                                    {index < currentSteps.length - 1 && (
                                        <div className={styles.connector}>
                                            <motion.div
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    background: `linear-gradient(90deg, ${step.color}, ${currentSteps[index + 1].color})`,
                                                    transformOrigin: "left"
                                                }}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
                                            />
                                            {/* Moving Particle */}
                                            <motion.div
                                                style={{
                                                    position: "absolute",
                                                    top: -4,
                                                    left: 0,
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: "50%",
                                                    background: step.color,
                                                    boxShadow: `0 0 10px ${step.color}`
                                                }}
                                                animate={{ left: ["0%", "100%"] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
