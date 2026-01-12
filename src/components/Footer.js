import styles from "./Footer.module.css";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function Footer({ onOpenBooking }) {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.ctaParams}>
                    <h2 className={styles.title}>Klaar om tijd terug te winnen?</h2>
                    <p className={styles.subtitle}>
                        Plan een vrijblijvend gesprek en ontdek wat automatisering voor jou kan betekenen.
                    </p>
                    <div className={styles.actions}>
                        <button
                            onClick={onOpenBooking}
                            className="btn btn-primary"
                            style={{
                                cursor: 'pointer',
                                border: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '1rem',
                                padding: '12px 24px',
                                borderRadius: '100px',
                                background: '#3182CE',
                                color: 'white'
                            }}
                        >
                            Plan je gratis gesprek <ArrowRight size={20} className="icon" />
                        </button>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>CrispFlows</span>
                        <p className={styles.tagline}>AI Automation Agency</p>
                    </div>

                    <div className={styles.contact}>
                        <a href="tel:+31653967819" className={styles.contactLink}>
                            <Phone size={18} /> 06 53 96 78 19
                        </a>
                        <a href="mailto:info@crispflows.com" className={styles.contactLink}>
                            <Mail size={18} /> info@crispflows.com
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} CrispFlows. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
}
