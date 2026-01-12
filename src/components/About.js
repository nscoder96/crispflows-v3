import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <section className={styles.section} id="over-mij">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.imageCol}>
                        <div className={styles.imagePlaceholder}>
                            {/* 
                  TODO: Replace with actual image of Niek.
                  AspectRatio: Square or Portrait.
                 */}
                            <span className={styles.placeholderText}>Foto van Niek</span>
                        </div>
                    </div>
                    <div className={styles.contentCol}>
                        <h2 className={styles.title}>Van stratenmaker naar automatiseringsexpert</h2>
                        <div className={styles.prose}>
                            <p>
                                Ik ben Niek. Ik heb jarenlang fysiek gewerkt als stratenmaker en hovenier.
                                Daarna maakte ik de switch naar marketing en sales.
                            </p>
                            <p>
                                Nu combineer ik die werelden: ik begrijp hoe ondernemers denken én ik kan
                                technische oplossingen bouwen die écht werken.
                            </p>
                            <p>
                                Geen ingewikkeld tech-verhaal. Gewoon: wat kost je nu te veel tijd,
                                en hoe lossen we dat op?
                            </p>
                            <p>
                                Ik geloof dat slimme automatisering niet alleen voor grote bedrijven is.
                                Ook jij kunt uren per week terugwinnen – zonder dat je zelf technisch hoeft te zijn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
