"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Layers, BarChart, Globe } from "lucide-react";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function AgenciesPage() {
    return (
        <main className={styles.main}>
            <div className={styles.backgroundGlow} />

            <nav className={styles.nav}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={20} /> <span className={styles.backText}>Hub</span>
                </Link>
                <div className={styles.brand}>CrispFlows <span className={styles.sector}>/ Agencies</span></div>
            </nav>

            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroContent}
                    >
                        <div className={styles.pill}>Scalability Infrastructure</div>
                        <h1 className={styles.title}>
                            Schaal je output.<br />
                            <span className={styles.gradientText}>Niet je loonlijst.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            High-end n8n automatiseringen voor agencies die willen groeien zonder de growing pains.
                            Van lead tot delivery in seconden.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="https://calendly.com" className="btn btn-primary">
                                Consult inplannen <ArrowRight size={20} style={{ marginLeft: 8 }} />
                            </Link>
                            <Link href="#tech" className={styles.secondaryLink}>
                                Bekijk de tech stack
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid with Glassmorphism */}
            <section className={styles.features} id="tech">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <Zap className={styles.icon} size={32} />
                            <h3>Instant Content Pipelines</h3>
                            <p>Van ruw interview audio naar 5 LinkedIn posts, een blog en een nieuwsbrief. Zonder prompt engineering door jou.</p>
                        </div>
                        <div className={styles.card}>
                            <Layers className={styles.icon} size={32} />
                            <h3>Client Onboarding</h3>
                            <p>Contract getekend? Stripe, Slack, Drive, Notion en je PM tool worden direct opgezet. 0 clicks.</p>
                        </div>
                        <div className={styles.card}>
                            <BarChart className={styles.icon} size={32} />
                            <h3>Automated Reporting</h3>
                            <p>Je klanten ontvangen wekelijks een voortgangsrapport gebaseerd op je echte data. Proactief zonder moeite.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof / Trust */}
            <section className={styles.trust}>
                <div className="container">
                    <h2 className={styles.trustTitle}>Systems built for scale</h2>
                    <div className={styles.logos}>
                        <span>n8n</span>
                        <span>OpenAI</span>
                        <span>Anthropic</span>
                        <span>Notion</span>
                        <span>Airtable</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
