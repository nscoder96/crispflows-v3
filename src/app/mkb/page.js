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

// Content for MKB/Groeiend Bedrijf (Versie B)
const heroContent = {
    badge: "VOOR GROEIENDE BEDRIJVEN",
    title: "Schaal je bedrijf",
    titleHighlight: "zonder extra kantoorkrachten.",
    subtitle: "Dezelfde administratie, maar dan 3x zo snel. AI-tools die je planning, offertes en klantcommunicatie automatiseren — zodat je team kan focussen op groei.",
    ctaText: "Vraag je gratis AI-audit aan",
    ctaSubtext: "Ontdek binnen 60 minuten waar jouw bedrijf tijd laat liggen. Vrijblijvend, geen verkooppraatje."
};

const problems = [
    {
        icon: "clock",
        title: "Je buitendienst groeit, je kantoor niet",
        description: "Meer ploegen betekent meer offertes, meer planning, meer communicatie. Je kantoorteam draait overuren, maar het werk stapelt zich op. Nieuwe mensen aannemen is duur en kost inwerkijd."
    },
    {
        icon: "users",
        title: "Informatie zit overal — behalve waar je het nodig hebt",
        description: "De ploegen appen updates, het kantoor mailt klanten, de planning staat in Excel, klantgegevens in het CRM. Niemand heeft het complete plaatje."
    },
    {
        icon: "zap",
        title: "Elke offerte is zoekwerk",
        description: "Telkens weer de juiste regels opzoeken, gegevens bij elkaar sprokkelen uit verschillende systemen. Dit kost veel tijd en is onnodig voor de medewerker die dit doet."
    },
    {
        icon: "calendar",
        title: "Je bent operationeel manager geworden",
        description: "Je startte dit bedrijf om te bouwen en te groeien. Nu ben je brandjes aan het blussen, vragen aan het beantwoorden en processen aan het controleren."
    }
];

const problemStats = {
    statistic: "Een gemiddeld bedrijf met 10+ medewerkers verliest 40 uur per week aan handmatige administratie.",
    statisticSubtext: "Dat is één fulltime kantoorkracht. Elke week opnieuw. Die kan veel beter andere taken doen.",
    emotionalClose: "Je wilt groeien. Maar elke nieuwe ploeg betekent meer werk voor je kantoor. Totdat je processen automatiseert, blijf je vastzitten."
};

const solutionContent = {
    sectionLabel: "De Oplossing",
    title: "Wat als je kantoor",
    titleHighlight: "3x zoveel kon verwerken?",
    intro: "CrispFlows bouwt AI-tools die specifiek zijn ontworpen voor hoveniersbedrijven. Geen maanden implementatie of dure consultants. Praktische automatisering die direct werkt.",
    mainFeature: {
        title: "Van 60 minuten naar 5 minuten — voor élke offerte",
        subtitle: "Consistente kwaliteit, fractie van de tijd. Je kantoorteam kan focussen op wat echt belangrijk is.",
        steps: [
            {
                title: "Medewerker noteert gegevens op locatie",
                description: "Notities typen, inspreken of foto's — direct vanaf de bouwplaats"
            },
            {
                title: "AI genereert de offerte",
                description: "Automatische berekening met jouw prijzen, marges en voorwaarden"
            },
            {
                title: "Kantoor controleert en verstuurt",
                description: "Consistente kwaliteit, fractie van de tijd"
            }
        ]
    },
    testimonial: {
        quote: "Met vier teams in dienst was administratie een volle dagtaak. Nu kunnen aantekeningen van een schouw direct worden omgezet in een basisofferte. Dat scheelt ons meer dan 30 minuten per offerte.",
        author: "Hoveniersbedrijf, 4 teams"
    },
    otherFeatures: [
        {
            icon: "mail",
            title: "Geautomatiseerde klantcommunicatie",
            description: "Bevestigingen, updates en herinneringen — automatisch verstuurd. Geen handmatig mailen meer."
        },
        {
            icon: "dashboard",
            title: "Centrale informatiehub",
            description: "Alle klantinformatie, afspraken en projectstatus op één plek. Kantoor én veld altijd up-to-date."
        },
        {
            icon: "calendar",
            title: "Planning-assistentie",
            description: "AI die helpt met optimale routes, weer-alerts en capaciteitsplanning."
        }
    ],
    closingMessage: "Geen vervanging van je team. Versterking. Zodat dezelfde mensen meer kunnen doen."
};

const auditContent = {
    title: "Jouw gratis AI-audit",
    intro: "We analyseren je huidige processen en laten zien waar AI direct impact kan maken. Geen theorie — concrete verbeterpunten voor jouw bedrijf.",
    duration: "60 minuten",
    benefits: [
        {
            icon: "search",
            title: "Procesanalyse",
            description: "We brengen in kaart hoe offertes, planning en klantcommunicatie nu lopen. Waar zitten de tijdvreters? Waar gaat informatie verloren?"
        },
        {
            icon: "fileCheck",
            title: "Verbeterrapport op maat",
            description: "Binnen 7 dagen ontvang je een concreet rapport: welke processen kun je automatiseren, wat levert het op, en wat is de aanpak?"
        },
        {
            icon: "monitor",
            title: "Live demo",
            description: "We tonen hoe AI werkt voor jouw specifieke situatie. Geen generieke presentatie, maar een demo met jouw type offertes en processen."
        },
        {
            icon: "thumbsUp",
            title: "Business case",
            description: "Hoeveel uur bespaar je? Hoeveel extra capaciteit creëer je? We rekenen het voor, zodat je een gefundeerde beslissing kunt nemen."
        }
    ],
    ctaText: "Plan je gratis audit",
    ctaSubtext: "Geschikt voor eigenaren en operationeel managers."
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
        question: "Moeten we onze huidige systemen vervangen?",
        answer: "Nee. CrispFlows integreert met je bestaande boekhouding, CRM en planning. We bouwen eromheen, niet in de plaats van."
    },
    {
        question: "Hoe lang duurt de implementatie?",
        answer: "Afhankelijk van de scope: de offertegenerator draait meestal binnen 2-3 weken. Uitgebreidere integraties kunnen 4-8 weken duren. We werken in fases, zodat je snel resultaat ziet."
    },
    {
        question: "Wat als mijn team niet technisch is?",
        answer: "Onze tools zijn ontworpen voor mensen die werk willen verzetten, niet voor techneuten. Als je kunt inspreken of typen, kun je ermee werken. We verzorgen training tot iedereen het beheerst."
    },
    {
        question: "Wat kost het?",
        answer: "Dat hangt af van welke processen je wilt automatiseren en hoeveel gebruikers je hebt. De audit is gratis. Daarna krijg je een voorstel met duidelijke prijzen en een terugverdientijd-berekening."
    },
    {
        question: "Werkt dit ook voor seizoensgebonden pieken?",
        answer: "Juist dan. In drukke periodes heb je geen tijd om extra mensen in te werken. AI schaalt direct mee zonder extra kosten of training."
    },
    {
        question: "Hoe zit het met privacy en klantgegevens?",
        answer: "Je data blijft van jou. We voldoen aan alle AVG-vereisten en delen niets met derden. Beveiliging is voor ons prioriteit."
    },
    {
        question: "Kunnen meerdere mensen tegelijk met de tools werken?",
        answer: "Ja. Onze tools zijn ontworpen voor teams. Je kantoor, je ploegen en jijzelf hebben allemaal toegang tot wat ze nodig hebben."
    },
    {
        question: "Wat als het niet werkt voor ons?",
        answer: "We beginnen altijd met een pilot. Je ziet resultaat voordat je grote investeringen doet. En we zijn eerlijk: als AI niet de oplossing is voor jouw situatie, zeggen we dat."
    }
];

const ctaContent = {
    title: "Klaar om je kantoor te versterken?",
    text: "In 60 minuten weet je precies waar jouw bedrijf tijd verliest en wat AI kan betekenen voor je groei. Geen verplichtingen. Geen verkooppraatje. Een eerlijke analyse van een team dat de sector kent.",
    ctaText: "Vraag je gratis AI-audit aan",
    ctaSubtext: "We nemen binnen 24 uur contact met je op om een moment te plannen.",
    alternativeText: "Liever direct contact?"
};

export default function MKBPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    }, []);

    const openCalendly = () => setIsOpen(true);
    const rootElement = isMounted ? (document.getElementById("__next") || document.body) : null;

    return (
        <main className={styles.main}>
            <Nav sector="GROEIENDE BEDRIJVEN" backLink="/" backText="Terug" />

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

            <SolutionSection
                {...solutionContent}
                ctaText="Vraag je gratis audit aan"
                onCTAClick={openCalendly}
            />

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
