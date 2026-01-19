"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>CRISPFLOWS</div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>AI-automatisering voor hoveniers & aannemers</p>
          <h1 className={styles.title}>
            Minder administratie.<br />
            <span className={styles.highlight}>Meer tijd voor wat telt.</span>
          </h1>
          <p className={styles.subtitle}>
            Wij bouwen slimme AI-tools die je repetitieve taken overnemen.
            Van offertes tot planning — volledig op maat voor jouw bedrijf.
          </p>
        </div>
      </section>

      {/* Route Selection */}
      <section className={styles.routes}>
        <p className={styles.routesIntro}>Kies wat bij jouw situatie past:</p>

        <div className={styles.routeCards}>
          {/* ZZP Card */}
          <Link href="/zzp" className={styles.routeCard}>
            <div className={styles.cardIcon}>
              <Clock size={28} />
            </div>
            <div className={styles.cardLabel}>ZZP & Kleine Teams</div>
            <h2 className={styles.cardTitle}>1-5 medewerkers</h2>
            <p className={styles.cardDescription}>
              Bespaar 6-8 uur per week op administratie. AI-offertes, slimme werkbonnen en automatische leadopvolging.
            </p>
            <div className={styles.cardCta}>
              Ik wil mijn tijd terug <ArrowRight size={18} />
            </div>
          </Link>

          {/* MKB Card */}
          <Link href="/mkb" className={styles.routeCard}>
            <div className={styles.cardIcon}>
              <Users size={28} />
            </div>
            <div className={styles.cardLabel}>MKB & Groeiende Bedrijven</div>
            <h2 className={styles.cardTitle}>5+ medewerkers</h2>
            <p className={styles.cardDescription}>
              Schaal je kantoor zonder extra personeel. Team-efficiëntie, schaalbare processen en management dashboards.
            </p>
            <div className={styles.cardCta}>
              Ik wil mijn kantoor versterken <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* Trust indicators */}
      <section className={styles.trust}>
        <div className={styles.trustItem}>
          <Zap size={20} />
          <span>Resultaat binnen 2 weken</span>
        </div>
        <div className={styles.trustDivider}></div>
        <div className={styles.trustItem}>
          <Clock size={20} />
          <span>Gratis AI-audit van 30 min</span>
        </div>
        <div className={styles.trustDivider}></div>
        <div className={styles.trustItem}>
          <Users size={20} />
          <span>Maatwerk, geen standaard pakket</span>
        </div>
      </section>
    </main>
  );
}
