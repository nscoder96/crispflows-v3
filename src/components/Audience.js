/* Retain existing logic but apply new styles */
import Link from "next/link";
import styles from "./Audience.module.css";
import { Sprout, PenTool, CheckCircle, ArrowRight } from "lucide-react";

export default function Audience() {
    return (
        <section className={styles.section} id="voor-wie">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Specialisatie, geen generalisatie.</h2>
                    <p className={styles.subtitle}>
                        Ik focus me op exact twee niches. Die ken ik door en door.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Hoveniers Card */}
                    <div className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
                            <Sprout size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Hoveniers & Groen</h3>
                        <p className={styles.cardText}>
                            Geen kantoorpersoneel nodig. Automatiseer je offertes, planning en werkbonnen.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <div className={styles.checkBg}><CheckCircle size={14} /></div>
                                <span>Offertes in 5 minuten</span>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.checkBg}><CheckCircle size={14} /></div>
                                <span>Automatische facturatie</span>
                            </li>
                        </ul>
                        <Link href="#cases" className={styles.link}>
                            Bekijk cases <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Agencies Card */}
                    <div className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles.iconPurple}`}>
                            <PenTool size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Agencies & Creators</h3>
                        <p className={styles.cardText}>
                            Schaal je output x10 zonder extra mensen aan te nemen. Van transcript naar blogpost in seconden.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <div className={styles.checkBg}><CheckCircle size={14} /></div>
                                <span>Audio → Content Pijplijn</span>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.checkBg}><CheckCircle size={14} /></div>
                                <span>Geautomatiseerde Onboarding</span>
                            </li>
                        </ul>
                        <Link href="#cases" className={styles.link}>
                            Bekijk cases <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
