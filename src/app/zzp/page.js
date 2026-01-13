"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import {
    Nav,
    HeroSection,
    TrustStrip,
    ProblemSection,
    SolutionSection,
    AuditSection,
    FounderSection,
    FAQSection,
    CTASection
} from "@/components/landing";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Content for ZZP/Klein Team (Versie A)
const heroContent = {
    badge: "VOOR ZZP'ERS & KLEINE TEAMS",
    title: "Bespaar 6-8 uur per week",
    titleHighlight: "op administratie.",
    subtitle: "Van offerte maken in 60 minuten naar 5 minuten. Van eindeloos mailen naar automatische updates. Van 's avonds administratie naar tijd voor jezelf.",
    ctaText: "Vraag je gratis AI-audit aan",
    ctaSubtext: "Ontdek binnen 30 minuten hoeveel tijd jij kunt besparen. Vrijblijvend, geen verkooppraatje."
};

const problems = [
    {
        icon: "clock",
        title: "Offertes kosten je halve avonden",
        description: "Je komt thuis van een klusdag, maar in plaats van rust pak je de laptop. Metingen opzoeken, prijzen berekenen, netjes uittypen. Voor je het weet is het 22:00."
    },
    {
        icon: "zap",
        title: "Je mist opdrachten door trage reacties",
        description: "Die klant die je gisteren sprak? Die heeft vanmiddag al een offerte van je concurrent. Terwijl jij nog aan het rekenen bent."
    },
    {
        icon: "calendar",
        title: "Administratie vreet je weekenden op",
        description: "Facturen, planning, klantcommunicatie. Het stapelt zich op tot het weekend. En dan vraag je je af: wanneer heb ik eigenlijk vrij?"
    },
    {
        icon: "users",
        title: "Klantinfo verspreid over 10 plekken",
        description: "WhatsApp gesprekken hier, e-mails daar, foto's op je telefoon, afspraken in je agenda. Je moet altijd zoeken voordat je iets kunt vinden."
    }
];

const problemStats = {
    statistic: "De gemiddelde hovenier verliest 6-8 uur per week aan administratieve taken.",
    statisticSubtext: "Dat is bijna een hele werkdag. Elke week opnieuw.",
    emotionalClose: "Je bent hovenier geworden omdat je houdt van buiten werken, van mooie tuinen creëren. Niet om eindeloos achter een scherm te zitten."
};

const solutionContent = {
    sectionLabel: "De Oplossing",
    title: "Wat als administratie",
    titleHighlight: "zichzelf zou doen?",
    intro: "CrispFlows bouwt AI-tools die specifiek zijn ontworpen voor hoveniers. Geen ingewikkelde software die je moet leren. Gewoon tools die werken zoals jij werkt.",
    mainFeature: {
        title: "Van 60 minuten naar 5 minuten",
        subtitle: "Maak professionele offertes vanuit simpele notities of een kort chatgesprek.",
        steps: [
            {
                title: "Stuur je notities of chat",
                description: "Simpele aantekeningen, een voice memo, of gewoon even chatten met de AI"
            },
            {
                title: "AI doet het rekenwerk",
                description: "Materialen, arbeid, BTW, marges — automatisch berekend"
            },
            {
                title: "Professionele offerte klaar",
                description: "In jouw huisstijl, klaar om te versturen"
            }
        ]
    },
    testimonial: {
        quote: "Het offerteproces is enorm versneld. Soms is er nog een kleine aanpassing nodig, maar niet meer dan dat. Ik ben in een fractie van de tijd klaar.",
        author: "Hovenier, ZZP"
    },
    otherFeatures: [
        {
            icon: "mail",
            title: "Automatische klantcommunicatie",
            description: "Bevestigingen, herinneringen en updates — automatisch verstuurd op het juiste moment."
        },
        {
            icon: "calendar",
            title: "Slimme planning",
            description: "AI die rekening houdt met reistijd, weer en materiaalbeschikbaarheid."
        },
        {
            icon: "receipt",
            title: "Facturen in één klik",
            description: "Van afgeronde klus naar verstuurde factuur in seconden."
        }
    ],
    closingMessage: "Geen maanden implementatie. Geen dure IT-projecten. Tools die werken vanaf dag 1."
};

const auditContent = {
    title: "Jouw gratis AI-audit",
    intro: "Geen verkooppraatje. Geen verplichtingen. Gewoon 30 minuten waarin we samen kijken waar jij tijd kunt besparen.",
    duration: "30 minuten",
    benefits: [
        {
            icon: "search",
            title: "Analyse van jouw werkproces",
            description: "We kijken samen naar hoe je nu werkt: offertes, planning, communicatie, facturatie. Waar verlies je de meeste tijd?"
        },
        {
            icon: "fileCheck",
            title: "Concreet verbeterrapport",
            description: "Binnen 7 dagen ontvang je een rapport met specifieke verbeterpunten voor jouw situatie. Geen algemeenheden, maar acties die je direct kunt nemen."
        },
        {
            icon: "monitor",
            title: "Live demo op maat",
            description: "We laten zien hoe een AI-oplossing werkt voor jouw specifieke situatie. Meestal de offertegenerator, maar dat hangt af van waar jij de meeste winst kunt behalen."
        },
        {
            icon: "thumbsUp",
            title: "Eerlijk advies",
            description: "Soms is AI niet de oplossing. Dan zeggen we dat ook. We verkopen je alleen iets als het je echt gaat helpen."
        }
    ],
    ctaText: "Plan je gratis audit",
    ctaSubtext: "We nemen binnen 24 uur contact met je op."
};

const founderContent = {
    title: "Van Hovenier naar",
    titleHighlight: "AI Specialist",
    quote: "Vakmanschap verzuipt in administratie. Dat moet anders.",
    paragraphs: [
        "Ik heb zelf een hoveniersbedrijf gerund. En ik weet nog precies hoeveel tijd er ging zitten in alles behalve het echte werk: offertes maken, administratie bijhouden, klanten te woord staan, planning regelen.",
        "Met mijn achtergrond in marketing en sales keek ik anders naar die processen. Ik zag niet alleen de frustratie — ik zag de mogelijkheden. <strong>Zeker nu, met wat AI tegenwoordig kan.</strong>",
        "Dat is waarom ik CrispFlows ben gestart. Om hoveniers en aannemers te helpen met: <strong>minder administratie, meer rust</strong>."
    ],
    founderName: "Niek Spekreijse",
    founderRole: "Oprichter",
    founderImage: "/niek-profile.png"
};

const faqs = [
    {
        question: "Moet ik mijn huidige software vervangen?",
        answer: "Nee. CrispFlows werkt samen met de tools die je al gebruikt — je boekhouding, je agenda, je e-mail. We bouwen eromheen, niet in de plaats van."
    },
    {
        question: "Is dit standaard software of maatwerk?",
        answer: "Maatwerk. We beginnen altijd met luisteren naar hoe jij werkt. Daarna bouwen we oplossingen die passen bij jouw werkwijze. Geen pakket waar jij je aan moet aanpassen."
    },
    {
        question: "Hoe lang duurt het voordat ik resultaat zie?",
        answer: "De meeste hoveniers zien binnen 2-4 weken resultaat. De offertegenerator werkt vaak al vanaf dag 1. Complexere integraties kunnen iets langer duren."
    },
    {
        question: "Wat als ik niet technisch ben?",
        answer: "Juist dan is dit voor jou. Onze tools zijn ontworpen voor mensen die willen werken, niet voor techneuten. Als je kunt typen of chatten, kun je onze tools gebruiken. Zo simpel is het."
    },
    {
        question: "Wat kost het?",
        answer: "Dat hangt af van wat je nodig hebt. Daarom beginnen we altijd met een gratis audit. Daarna krijg je een voorstel op maat — met duidelijke prijzen, zonder verrassingen."
    },
    {
        question: "Wat als AI niet de oplossing is voor mij?",
        answer: "Dan zeggen we dat eerlijk. We verdienen niets aan het verkopen van iets dat je niet helpt. In de audit kijken we objectief naar jouw situatie en geven we eerlijk advies — ook als dat advies is om niets te doen."
    },
    {
        question: "Hoe zit het met privacy en mijn klantgegevens?",
        answer: "Je data blijft van jou. We delen niets met derden en voldoen aan alle AVG-vereisten. Je klantgegevens zijn veilig."
    },
    {
        question: "Kan ik eerst zien hoe het werkt?",
        answer: "Ja, dat is precies wat de gratis audit is. We laten je live zien hoe de tools werken voor jouw situatie. Geen PowerPoint, maar een echte demo."
    }
];

const ctaContent = {
    title: "Klaar om tijd terug te winnen?",
    text: "Je hebt niets te verliezen. 30 minuten van je tijd voor een helder beeld van hoeveel uren jij kunt besparen. Geen verplichtingen. Geen verkooppraatje. Gewoon een eerlijk gesprek over hoe AI jouw werk makkelijker kan maken.",
    ctaText: "Vraag je gratis AI-audit aan",
    ctaSubtext: "We nemen binnen 24 uur contact met je op.",
    alternativeText: "Liever eerst meer weten?"
};

export default function ZZPPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    }, []);

    const openCalendly = () => setIsOpen(true);
    const rootElement = isMounted ? (document.getElementById("__next") || document.body) : null;

    return (
        <main className={styles.main}>
            <Nav sector="KLEINE TEAMS" backLink="/" backText="Terug" />

            <HeroSection
                {...heroContent}
                onCTAClick={openCalendly}
            />

            <TrustStrip />

            <ProblemSection
                title="Herken je dit?"
                problems={problems}
                {...problemStats}
            />

            <SolutionSection {...solutionContent} />

            <AuditSection
                {...auditContent}
                onCTAClick={openCalendly}
            />

            <FounderSection {...founderContent} />

            <FAQSection
                title="Veelgestelde vragen"
                faqs={faqs}
            />

            <CTASection
                {...ctaContent}
                onCTAClick={openCalendly}
            />

            <Footer onOpenBooking={openCalendly} />

            <PopupModal
                url="https://calendly.com/crispflows-info/30min"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={rootElement}
            />
        </main>
    );
}
