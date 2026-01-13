"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./Nav.module.css";

export default function Nav({ sector, backLink, backText }) {
    return (
        <nav className={styles.nav}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href={backLink || "/"} className={styles.backLink}>
                    <ArrowLeft size={20} /> {backText || "Terug"}
                </Link>
                <div className={styles.brand}>
                    CRISPFLOWS <span className={styles.sector}>/ {sector}</span>
                </div>
            </div>
        </nav>
    );
}
