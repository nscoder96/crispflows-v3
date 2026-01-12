"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Layers, Users, Phone, Zap, Briefcase, BarChart } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.brand}>CRISPFLOWS</div>
        <h1 className={styles.title}>KIES JOUW<br />AUTOMATISERING</h1>
      </div>

      <div className={styles.splitLayout}>
        {/* Left Side: Aannemers */}
        <Link href="/aannemers" className={`${styles.side} ${styles.left}`}>
          <div className={styles.bgPatternLeft}></div>
          <div className={styles.sideContent}>
            <div className={styles.heroTextLeft}>
              <div className={styles.label}>Voor de Doeners</div>
              <h2 className={styles.heading}>BOUW &<br />GROEN</h2>
              <div className={styles.cta}>
                Ik wil minder kantoorwerk <ArrowRight size={20} />
              </div>
            </div>

            {/* Solution List: Bouw & Groen */}
            <div className={styles.decorativeMenuLeft}>
              <div className={styles.menuItem}><Layers size={16} /> AI-offertes</div>
              <div className={styles.menuItem}><Users size={16} /> Slimme werkbonnen</div>
              <div className={styles.menuItem}><Phone size={16} /> Auto-leadopvolging</div>
            </div>
          </div>
        </Link>

        {/* Right Side: Agencies */}
        <Link href="/agencies" className={`${styles.side} ${styles.right}`}>
          <div className={styles.bgPatternRight}></div>
          <div className={`${styles.sideContent} ${styles.sideContentRight}`}>
            <div className={styles.heroTextRight}>
              <div className={styles.label}>Voor de Scalers</div>
              <h2 className={styles.heading}>AGENCIES &<br />CREATORS</h2>
              <div className={styles.cta}>
                Ik wil schalen zonder personeel <ArrowRight size={20} />
              </div>
            </div>

            {/* Solution List: Agencies */}
            <div className={styles.decorativeMenuRight}>
              <div className={styles.menuItem}><Zap size={16} /> Content Pipelines</div>
              <div className={styles.menuItem}><Briefcase size={16} /> Client Onboarding</div>
              <div className={styles.menuItem}><BarChart size={16} /> Auto-Rapportages</div>
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
