import styles from "./Cases.module.css";
import { ArrowRight, TrendingUp, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function Cases() {
    const cases = [
        {
            title: "Hovenier in Noord-Holland",
            problem: "Offertes maken kostte 2+ uur per stuk",
            solution: "AI-gestuurde offerte tool",
            result: "Nu in 5-10 minuten een complete offerte",
            icon: Clock
        },
        {
            title: "B2B Marketing Agency",
            problem: "Handmatige processen remden groei",
            solution: "n8n automatiseringen voor lead management",
            result: "€400k pipeline in 3 maanden",
            icon: TrendingUp
        },
        {
            title: "Marketplace Agency",
            problem: "Te veel tijd kwijt aan repetitieve taken",
            solution: "Workflow automatisering",
            result: "€8k MRR binnen 6 weken",
            icon: Zap
        },
        {
            title: "Lead Response Optimalisatie",
            problem: "Leads werden te laat opgevolgd",
            solution: "AI-gestuurde snelle lead opvolging",
            result: "60% meer conversie",
            icon: RocketIcon
        }
    ];

    return (
        <section className={styles.section} id="cases">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Resultaten</h2>
                    <p className={styles.subtitle}>
                        Geen mooie praatjes, maar meetbare impact.
                    </p>
                </div>

                <div className={styles.grid}>
                    {cases.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                {item.icon && <item.icon className={styles.icon} size={24} />}
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Probleem:</span>
                                <p className={styles.text}>{item.problem}</p>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Oplossing:</span>
                                <p className={styles.text}>{item.solution}</p>
                            </div>
                            <div className={styles.result}>
                                <span className={styles.resultLabel}>Resultaat:</span>
                                <p className={styles.resultText}>{item.result}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="#" className="btn btn-primary">
                        Wil je zien hoe dit voor jou werkt? Plan een demo <ArrowRight size={20} className="icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function RocketIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
