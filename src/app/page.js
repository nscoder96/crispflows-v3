"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Layers, Users, Phone, BarChart, Building2, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.brand}>CRISPFLOWS</div>
        <p className={styles.tagline}>AI-automatisering voor hoveniers & aannemers</p>
        <h1 className={styles.title}>HOEVEEL<br />MEDEWERKERS?</h1>
      </div>

      <div className={styles.splitLayout}>
        {/* Left Side: ZZP / Klein Team */}
        <Link href="/zzp" className={`${styles.side} ${styles.left}`}>
          <div className={styles.bgPatternLeft}></div>
          <div className={styles.sideContent}>
            <div className={styles.heroTextLeft}>
              <div className={styles.label}>ZZP & Kleine Teams</div>
              <h2 className={styles.heading}>1-5<br />MEDEWERKERS</h2>
              <div className={styles.cta}>
                Ik wil mijn tijd terug <ArrowRight size={20} />
              </div>
            </div>

            {/* Solution List: Kleine Teams */}
            <div className={styles.decorativeMenuLeft}>
              <div className={styles.menuItem}><Layers size={16} /> AI-offertes</div>
              <div className={styles.menuItem}><Users size={16} /> Slimme werkbonnen</div>
              <div className={styles.menuItem}><Phone size={16} /> Auto-leadopvolging</div>
            </div>
          </div>
        </Link>

        {/* Right Side: MKB / Groeiend Bedrijf */}
        <Link href="/mkb" className={`${styles.side} ${styles.right}`}>
          <div className={styles.bgPatternRight}></div>
          <div className={`${styles.sideContent} ${styles.sideContentRight}`}>
            <div className={styles.heroTextRight}>
              <div className={styles.label}>MKB & Groeiende Bedrijven</div>
              <h2 className={styles.heading}>5+<br />MEDEWERKERS</h2>
              <div className={styles.cta}>
                Ik wil mijn kantoor versterken <ArrowRight size={20} />
              </div>
            </div>

            {/* Solution List: Groeiende Bedrijven */}
            <div className={styles.decorativeMenuRight}>
              <div className={styles.menuItem}><Building2 size={16} /> Team-efficiëntie</div>
              <div className={styles.menuItem}><TrendingUp size={16} /> Schaalbare processen</div>
              <div className={styles.menuItem}><BarChart size={16} /> Management dashboards</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Floating Dock (Decorative) */}
      <div className={styles.dock}>
        <div className={styles.dockItem} />
        <div className={styles.dockItem} />
        <div className={styles.dockItem} style={{ width: 40 }} />
      </div>
    </main>
  );
}
