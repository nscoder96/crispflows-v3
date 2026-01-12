"use client";

import Link from "next/link";
import {
    ArrowRight, ArrowLeft, CheckCircle, Smartphone, Database, FileText,
    Mail, MessageSquare, PhoneMissed, Play, Check, CheckCheck, Clock,
    HardHat, Video, Phone, Plus, Camera, Mic, Brain
} from "lucide-react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// Concept Version: High-Fidelity, Smooth Animations, "Glass" aesthetics
export default function AannemersConceptPage() {
    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={20} /> Terug naar Hub
                    </Link>
                    <div className={styles.brand}>CRISPFLOWS <span className={styles.sector}>/ CONCEPT</span></div>
                </div>
            </nav>

            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.glowBlob} />
                </div>

                <div className="container">
                    <div className={styles.heroGrid}>
                        {/* LEFT: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.heroText}
                        >
                            <div className={styles.badge}>VOOR AANNEMERS, HOVENIERS & INSTALLATEURS</div>
                            <h1 className={styles.title}>
                                10 MAN BUITEN.<br />
                                <span className={styles.highlight}>RUST OP KANTOOR.</span>
                            </h1>
                            <p className={styles.subtitle}>
                                De AI-assistent die je administratie doet terwijl jij bouwt.<br />
                                Geen softwarepakket, maar een extra medewerker.
                            </p>
                            <div className={styles.ctaGroup}>
                                <Link href="https://calendly.com" className={styles.primaryBtn}>
                                    Plan Kennismakingsgesprek <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* RIGHT: Visual */}
                        <div className={styles.heroVisualContainer}>
                            <div className={styles.heroVisual} style={{
                                width: '500px',
                                height: '300px',
                                position: 'relative',
                            }}>
                                {/* 1. INPUTS (Absolute Positioned) */}
                                {[
                                    { icon: Phone, color: "#F6AD55", top: 26 }, // Center 50 -> Top = 50 - 24(half height) = 26
                                    { icon: Mail, color: "#63B3ED", top: 126 }, // Center 150 -> Top = 126
                                    { icon: MessageSquare, color: "#68D391", top: 226 } // Center 250 -> Top = 226
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.2 }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: item.top,
                                            width: '48px',
                                            height: '48px',
                                            background: 'rgba(255,255,255,0.9)',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: '1px solid rgba(0,0,0,0.05)',
                                            zIndex: 2
                                        }}
                                    >
                                        <item.icon size={24} color={item.color} />
                                    </motion.div>
                                ))}

                                {/* 2. THE FLOW (SVG Connecting Lines) */}
                                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'visible' }}>
                                    {/* Top Line: Start (48, 50) -> End (210, 150) */}
                                    <motion.path
                                        d="M 48 50 C 120 50, 120 150, 210 150"
                                        fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                    />
                                    <motion.circle r="3" fill="#cbd5e0">
                                        <animateMotion dur="3s" repeatCount="indefinite" path="M 48 50 C 120 50, 120 150, 210 150" />
                                    </motion.circle>

                                    {/* Middle Line: Start (48, 150) -> End (210, 150) */}
                                    <motion.path
                                        d="M 48 150 L 210 150"
                                        fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                    />
                                    <motion.circle r="3" fill="#cbd5e0">
                                        <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 48 150 L 210 150" />
                                    </motion.circle>

                                    {/* Bottom Line: Start (48, 250) -> End (210, 150) */}
                                    <motion.path
                                        d="M 48 250 C 120 250, 120 150, 210 150"
                                        fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
                                    />
                                    <motion.circle r="3" fill="#cbd5e0">
                                        <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 48 250 C 120 250, 120 150, 210 150" />
                                    </motion.circle>
                                </svg>

                                {/* 3. THE CORE (AI Processor) - Center at 250, 150 */}
                                <div style={{
                                    position: 'absolute',
                                    left: '210px',
                                    top: '110px',
                                    zIndex: 3
                                }}>
                                    <motion.div
                                        animate={{ boxShadow: ["0 0 20px rgba(66, 153, 225, 0.3)", "0 0 40px rgba(66, 153, 225, 0.6)", "0 0 20px rgba(66, 153, 225, 0.3)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{
                                            width: '80px', height: '80px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #4299E1 0%, #667EEA 100%)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white',
                                            position: 'relative'
                                        }}
                                    >
                                        <Brain size={32} />
                                        <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', transform: 'scale(1.2)' }} />
                                    </motion.div>
                                </div>

                                {/* 4. THE OUTPUT (The Solution) - Right of Core */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        left: '320px',
                                        top: '110px', // Center vertical 150 - 40 = 110 approx
                                        zIndex: 3,
                                        background: 'white',
                                        padding: '20px 24px',
                                        borderRadius: '16px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        display: 'flex', flexDirection: 'column', gap: '8px',
                                        minWidth: '180px',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#48BB78', borderRadius: '50%' }} />
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resultaat</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ background: '#E6FFFA', padding: '8px', borderRadius: '8px', color: '#38B2AC' }}>
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2D3748' }}>Offerte #2024</div>
                                            <div style={{ fontSize: '0.75rem', color: '#718096' }}>Klaar voor verzending</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION HEADER: Solutions */}
            <div className={styles.sectionHeader}>
                <div className="container">
                    <span className={styles.sectionLabel}>Onze Oplossingen</span>
                    <h2 className={styles.sectionTitle}>
                        Van chaotische input<br />
                        naar <span className={styles.highlight}>gestructureerde output.</span>
                    </h2>
                </div>
            </div>

            {/* Feature 1: The Flow */}
            <section className={styles.featureSection}>
                <div className="container">
                    <div className={styles.featureGrid}>
                        {/* Text Side */}
                        <div className={styles.textColumn}>
                            <div className={styles.number}>01</div>
                            <h2>De Slimme Schouw</h2>

                            <div className={styles.deepDive}>
                                <div className={styles.problem}>
                                    <strong>Het Probleem:</strong>
                                    <p>Je calculators besteden uren aan het ontcijferen van handgeschreven notities of het zoeken naar die ene foto in een privé WhatsApp-gesprek.</p>
                                </div>
                                <div className={styles.solution}>
                                    <strong>Onze Oplossing:</strong>
                                    <p>Stuur alles — spraakberichten, ruwe notities, foto's — gewoon "de flow" in. Onze AI herkent direct context, koppelt het aan het juiste project en verrijkt de data met jouw eigen database-kennis.</p>
                                </div>
                                <div className={styles.outcome}>
                                    <strong>Het Resultaat:</strong>
                                    <ul className={styles.benefitList}>
                                        <li><CheckCircle size={16} color="#3182CE" /> Calculator start met een 90% complete concept-offerte</li>
                                        <li><CheckCircle size={16} color="#3182CE" /> Geen discussie meer over wat er "ongeveer" is gezegd</li>
                                        <li><CheckCircle size={16} color="#3182CE" /> Foutmarge &lt; 1% door directe database validation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className={styles.visualColumn}>
                            <motion.div
                                className={styles.glassCard}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Animated Flow Elements */}
                                <div className={styles.flowContainer}>
                                    <motion.div
                                        className={styles.iconCircle}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                    >
                                        <Smartphone size={24} />
                                    </motion.div>

                                    {/* Line 1 */}
                                    <div className={styles.connectingLine}>
                                        <motion.div
                                            className={styles.particle}
                                            animate={{
                                                left: ["0%", "100%"],
                                                opacity: [0, 1, 1, 0]
                                            }}
                                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                        />
                                    </div>

                                    <div className={styles.iconCircle}>
                                        <Database size={24} />
                                    </div>

                                    {/* Line 2 */}
                                    <div className={styles.connectingLine}>
                                        <motion.div
                                            className={styles.particle}
                                            animate={{
                                                left: ["0%", "100%"],
                                                opacity: [0, 1, 1, 0]
                                            }}
                                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1.25 }}
                                        />
                                    </div>

                                    <div className={styles.iconCircle}>
                                        <FileText size={24} />
                                    </div>
                                </div>
                                <div className={styles.cardLabel}>AI GESTUURDE DATAVERIJKING</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Omnichannel */}
            <section className={`${styles.featureSection} ${styles.darkerBg}`}>
                <div className="container">
                    <div className={`${styles.featureGrid} ${styles.reversed}`}>
                        <div className={styles.visualColumn}>
                            <div className={styles.omniCard}>
                                {/* iPhone Frame with WhatsApp UI */}
                                <div className={styles.iphoneFrame}>
                                    <div className={styles.notch} />

                                    {/* WA Header */}
                                    <div className={styles.waHeader}>
                                        <ArrowLeft size={20} color="white" />
                                        <div className={styles.waAvatar}>
                                            <HardHat size={24} color="#4A5568" />
                                        </div>
                                        <div className={styles.waInfo}>
                                            <div className={styles.waName}>Aannemersbedrijf Jansen</div>
                                            <div className={styles.waStatus}>online</div>
                                        </div>
                                        <Video size={22} color="white" style={{ marginRight: 10 }} />
                                        <Phone size={20} color="white" />
                                    </div>

                                    {/* WA Chat Area */}
                                    <div className={styles.waChatArea}>
                                        {/* Date Divider (Optional) */}
                                        <div style={{ alignSelf: 'center', background: '#D1D7DB', color: '#54656F', padding: '5px 12px', borderRadius: 8, fontSize: '0.75rem', marginBottom: 10, boxShadow: '0 1px 0.5px rgba(0,0,0,0.1)' }}>
                                            Vandaag
                                        </div>

                                        {/* ME (Customer) */}
                                        <motion.div
                                            className={`${styles.waMessage} ${styles.waMe}`}
                                            initial={{ opacity: 0, y: 10, x: 20 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <div style={{ color: 'black' }}>Hoi! Ik wil graag een afspraak maken om mijn tuin te laten vervangen. 🏡</div>
                                            <div className={styles.waMeta}>
                                                14:02 <Check size={14} color="#8c8c8c" />
                                            </div>
                                        </motion.div>

                                        {/* THEM (Business/AI) */}
                                        <motion.div
                                            className={`${styles.waMessage} ${styles.waThem}`}
                                            initial={{ opacity: 0, y: 10, x: -20 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            transition={{ delay: 1.5 }}
                                        >
                                            <div style={{ color: 'black' }}>Dag! Dat kan zeker. Ik heb morgen nog een gaatje om 14:00 of donderdag om 09:00. Schikt dat?</div>
                                            <div className={styles.waMeta}>
                                                14:02
                                            </div>
                                        </motion.div>

                                        {/* ME (Customer) */}
                                        <motion.div
                                            className={`${styles.waMessage} ${styles.waMe}`}
                                            initial={{ opacity: 0, y: 10, x: 20 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            transition={{ delay: 2.5 }}
                                        >
                                            <div style={{ color: 'black' }}>Donderdag 09:00 is prima! 👍</div>
                                            <div className={styles.waMeta}>
                                                14:03 <CheckCheck size={14} color="#34B7F1" />
                                            </div>
                                        </motion.div>

                                        {/* THEM (Business/AI) */}
                                        <motion.div
                                            className={`${styles.waMessage} ${styles.waThem}`}
                                            initial={{ opacity: 0, y: 10, x: -20 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            transition={{ delay: 3.5 }}
                                        >
                                            <div style={{ color: 'black' }}>Staat genoteerd! Onze adviseur komt donderdag langs. Adres is nog steeds Kerkstraat 12?</div>
                                            <div className={styles.waMeta}>
                                                14:03
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* WA Input Bar (Visual) */}
                                    <div className={styles.waInputBar}>
                                        <Plus size={24} color="#007AFF" />
                                        <div className={styles.waInput}>Bericht</div>
                                        <Camera size={24} color="#007AFF" />
                                        <Mic size={24} color="#007AFF" />
                                    </div>
                                </div>        </div>
                        </div>
                        <div className={styles.textColumn}>
                            <div className={styles.number}>02</div>
                            <h2>Totale Bereikbaarheid</h2>

                            <div className={styles.deepDive}>
                                <div className={styles.problem}>
                                    <strong>Het Probleem:</strong>
                                    <p>Klanten verwachten direct antwoord. Maar als jij op de steiger staat of in bespreking bent, gaat die potentiele klus naar de concurrent die wél opneemt.</p>
                                </div>
                                <div className={styles.solution}>
                                    <strong>Onze Oplossing:</strong>
                                    <p>Wij plaatsen een "waakzame laag" over al je kanalen. Of het nu een WhatsAppje, e-mail of gemist telefoontje is: onze AI vangt het op, begrijpt de urgentie, en handelt ernaar.</p>
                                </div>
                                <div className={styles.outcome}>
                                    <strong>Het Resultaat:</strong>
                                    <ul className={styles.benefitList}>
                                        <li><CheckCircle size={16} color="#4FD1C5" /> 24/7 Respons, ook in het weekend</li>
                                        <li><CheckCircle size={16} color="#4FD1C5" /> Voelt als persoonlijk contact, niet als een bot</li>
                                        <li><CheckCircle size={16} color="#4FD1C5" /> Geen aparte app nodig: werkt via jouw favoriete tools</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Digital Dashboard */}
            <section className={styles.featureSection}>
                <div className="container">
                    <div className={styles.featureGrid}>
                        {/* Text Side */}
                        <div className={styles.textColumn}>
                            <div className={styles.number}>03</div>
                            <h2>De Digitale Uitvoerder</h2>

                            <div className={styles.deepDive}>
                                <div className={styles.problem}>
                                    <strong>Het Probleem:</strong>
                                    <p>Urenbriefjes raken kwijt, meerwerk wordt vergeten op te schrijven, en op vrijdagmiddag moet de administratie nog de hele week reconstrueren.</p>
                                </div>
                                <div className={styles.solution}>
                                    <strong>Onze Oplossing:</strong>
                                    <p>Eén centraal dashboard voor kantoor. Buitenploegen sturen simpele updates (foto's, voice notes) die direct in het dossier landen. Het systeem vlagt zelf wat er mist.</p>
                                </div>
                                <div className={styles.outcome}>
                                    <strong>Het Resultaat:</strong>
                                    <ul className={styles.benefitList}>
                                        <li><CheckCircle size={16} color="#3182CE" /> Elke dag sluitende administratie (ipv eind van de week)</li>
                                        <li><CheckCircle size={16} color="#3182CE" /> Verplichte foto's bij oplevering = minder nazorg</li>
                                        <li><CheckCircle size={16} color="#3182CE" /> 1 Klik = Factuur de deur uit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className={styles.visualColumn}>
                            <motion.div
                                className={styles.glassCard}
                                style={{ alignItems: 'normal', justifyContent: 'flex-start', padding: 0 }}
                            >
                                {/* Dashboard Mockup */}
                                <div className={styles.mockWindow}>
                                    <div className={styles.mockHeader}>
                                        <div className={styles.trafficLights}><div /><div /><div /></div>
                                        <div className={styles.mockTitle}>CRISP FLOWS CONTROL CENTER</div>
                                    </div>
                                    <div className={styles.mockBody}>
                                        <div className={styles.mockRow}>
                                            <div className={styles.statusDot} style={{ background: '#68D391' }} />
                                            <div className={styles.rowContent}>
                                                <div className={styles.rowTitle}>Tuinrenovatie Fam. Bakker</div>
                                                <div className={styles.rowMeta}>07:00 - 16:00 • 3 Medewerkers</div>
                                            </div>
                                            <div className={styles.rowBadge}>KLAAR</div>
                                        </div>
                                        <div className={styles.mockRow}>
                                            <div className={styles.statusDot} style={{ background: '#FBD38D' }} />
                                            <div className={styles.rowContent}>
                                                <div className={styles.rowTitle}>Bestrating Oprit</div>
                                                <div className={styles.rowMeta}>⚠️ Foto's ontbreken bij oplevering</div>
                                            </div>
                                            <div className={styles.rowAction}>CHECK</div>
                                        </div>
                                        <div className={styles.mockRow} style={{ opacity: 0.6 }}>
                                            <div className={styles.statusDot} style={{ background: '#CBD5E0' }} />
                                            <div className={styles.rowContent}>
                                                <div className={styles.rowTitle}>Onderhoud VVE 't Hof</div>
                                                <div className={styles.rowMeta}>Gepland voor morgen</div>
                                            </div>
                                            <div className={styles.rowBadge} style={{ background: '#EDF2F7', color: '#718096' }}>PLANNING</div>
                                        </div>
                                    </div>
                                    {/* Floating Success Toast */}
                                    <motion.div
                                        className={styles.successToast}
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <CheckCircle size={14} color="#68D391" /> Administratie Bijgewerkt
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main >
    );
}
