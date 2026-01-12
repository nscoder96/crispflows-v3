import styles from "./Process.module.css";
import { MessageSquare, FileJson, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Gratis Gesprek",
            description: "We bespreken waar je tijd verliest en wat je wilt bereiken."
        },
        {
            icon: FileJson,
            title: "Plan op Maat",
            description: "Ik analyseer je processen en kom met een concreet voorstel."
        },
        {
            icon: Rocket,
            title: "Implementatie",
            description: "Ik bouw de automatisering, jij bespaart direct tijd."
        }
    ];

    return (
        <section className={styles.section} id="werkwijze">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Hoe ik werk</h2>
                    <p className={styles.subtitle}>
                        Simpel, transparant en resultaatgericht.
                    </p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <step.icon size={32} />
                                <div className={styles.number}>{index + 1}</div>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepText}>{step.description}</p>
                            {index < steps.length - 1 && <div className={styles.connector} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
