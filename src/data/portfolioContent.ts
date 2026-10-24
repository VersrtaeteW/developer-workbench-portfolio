export interface Profile {
  name: string;
  role: string;
  institution: string;
  location: string;
  phone: string;
  bio: string;
  statusMessage: string;
  coreStrengths: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    details?: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  internships: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  certificates: {
    title: string;
    issuer: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  contact: {
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
    cvFile: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Biografie & CV" | "CVO Projecten (1-4)" | "Netwerkevents & Gastcolleges" | "Vrij & Extracurriculair";
  tags: string[];
  excerpt: string;
  readTime: string;
  content: string;
}

export const portfolioProfile: Profile = {
  name: "Wout Verstraete",
  role: "Softwareontwikkelaar & AI Specialist in spe",
  institution: "Bachelor Toegepaste Informatica (AI) - Howest Brugge",
  location: "Jachthoornstraat 7, 8730 Beernem, België",
  phone: "0499 47 05 46",
  bio: "Gedreven softwareontwikkelaar met een stevige basis in applicatie- en webontwikkeling, momenteel bezig met een Bachelor Toegepaste Informatica met focus op AI. Combineert praktische werkervaring in C# en .NET met een passie voor moderne technologieën en intelligente systemen. Leergierig, resultaatgericht en altijd op zoek naar effectieve oplossingen.",
  statusMessage: "Bachelor Toegepaste Informatica (AI) @ Howest Brugge",
  coreStrengths: [
    "C#, .NET MAUI, Blazor, ASP.NET, WPF & Xamarin",
    "AI & Data Science (Python, Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow)",
    "Full-Stack Web & Database Architectuur (SQL, PostgreSQL, MySQL)",
    "Containerisatie, Cloud & DevOps (Git, Docker, Linux, Azure)",
    "Praktijkervaring bij Innovation Center Daenens & Centric"
  ],
  techStack: [
    {
      category: "AI & Data Science",
      items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "PyTorch", "TensorFlow", "Jupyter Notebooks"]
    },
    {
      category: "Programmeertalen & Frameworks",
      items: ["C#", "JavaScript", ".NET MAUI", "Blazor", "Xamarin", "ASP.NET", "WPF"]
    },
    {
      category: "Web & Frontend",
      items: ["HTML", "CSS", "Bootstrap", "React", "Next.js"]
    },
    {
      category: "Databases",
      items: ["SQL", "MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & Platformen",
      items: ["Git", "Docker", "Linux", "GitHub", "Visual Studio", "VS Code", "Azure"]
    }
  ],
  education: [
    {
      degree: "Bachelor Toegepaste Informatica",
      school: "Howest, Brugge",
      period: "Sep 2025 – Heden",
      details: "Afstudeerrichting AI (Artificial Intelligence)"
    },
    {
      degree: "Graduaat programmeren",
      school: "Howest, Brugge",
      period: "Sep 2021 – Jul 2023"
    },
    {
      degree: "Netwerken en IT (Informaticabeheer)",
      school: "Sint-Jozefinstituut, Brugge",
      period: "Sep 2017 – Jul 2019",
      details: "Secundair diploma"
    }
  ],
  experience: [
    {
      role: "Developer",
      company: "Innovation Center Daenens",
      period: "Aug 2023 – Jun 2025",
      description: "Ontwikkelen en onderhouden van C#-applicaties met WPF en ASP.NET, inclusief API- en databasekoppelingen."
    },
    {
      role: "Helpdesk medewerker",
      company: "Centric",
      period: "Jan 2021 – Sep 2021",
      description: "Helpdesk voor kassasystemen, behandelen van problemen die de eindgebruiker ondervindt."
    },
    {
      role: "Moni",
      company: "Gemeente Zedelgem",
      period: "Apr 2017 – Jan 2021",
      description: "Begeleiden van kinderen (3 tot 14 jaar) tijdens schoolvakanties."
    }
  ],
  internships: [
    {
      role: "Mobile developer (Stage)",
      company: "Pionira",
      period: "Feb 2021 – Mei 2021",
      description: "10 weken stage: migreren van een Xamarin app naar .Net Maui app, nieuwe schermen ontwerpen en implementeren."
    },
    {
      role: "Web developer (Stage)",
      company: "Knoware",
      period: "Apr 2019 – Apr 2019",
      description: "3 weken stage: website opstellen met bootstrap."
    }
  ],
  certificates: [
    {
      title: "Certificaat Digital Transformation",
      issuer: "University of Economics in Katowice, Poland"
    }
  ],
  languages: [
    { name: "Nederlands", level: "Moedertaal" },
    { name: "Engels", level: "Vloeiend" },
    { name: "Frans", level: "Basis / Professioneel" }
  ],
  contact: {
    email: "woutverstraete0608@gmail.com",
    phone: "0499 47 05 46",
    address: "Jachthoornstraat 7, 8730 Beernem",
    github: "https://github.com/WoutV2",
    linkedin: "https://linkedin.com/in/wout-verstraete-2a009443a",
    cvFile: "/cv-wout-verstraete.pdf"
  }
};

export const portfolioPosts: Post[] = [
  {
    id: "post-01",
    slug: "biografie-en-cv",
    title: "Biografie, Professioneel Profiel & Volledig CV",
    date: "2026-10-24",
    category: "Biografie & CV",
    tags: ["Biografie", "CV", "Wout Verstraete", "Howest", "AI", "C#"],
    excerpt: "Officiële biografie, professionele loopbaan, opleidingen bij Howest en technisch competentieprofiel van Wout Verstraete.",
    readTime: "4 min leestijd",
    content: `Welkom op het interactieve Developer Workbench Portfolio van **Wout Verstraete**.

---

![Wout Verstraete — Softwareontwikkelaar & AI Specialist in spe](/images/wout-verstraete.jpg)

---

## 🎯 Wie ben ik?
Gedreven softwareontwikkelaar met een stevige basis in applicatie- en webontwikkeling, momenteel bezig met een **Bachelor Toegepaste Informatica met focus op AI** aan **Howest Brugge**. 

Ik combineer praktische werkervaring in **C# en .NET** met een passie voor moderne technologieën, intelligente systemen en data science. Leergierig, resultaatgericht en altijd op zoek naar effectieve, schaalbare software-oplossingen.

---

## 👤 Personalia & Contact
- **Naam:** Wout Verstraete
- **Locatie:** Jachthoornstraat 7, 8730 Beernem
- **Telefoon:** 0499 47 05 46
- **E-mail:** [woutverstraete0608@gmail.com](mailto:woutverstraete0608@gmail.com)
- **LinkedIn:** [linkedin.com/in/wout-verstraete-2a009443a](https://linkedin.com/in/wout-verstraete-2a009443a)
- **GitHub:** [github.com/WoutV2](https://github.com/WoutV2)

---

## 🎓 Opleiding
| Opleiding | Instelling | Periode | Toelichting |
| :--- | :--- | :--- | :--- |
| **Bachelor Toegepaste Informatica** | Howest, Brugge | Sep 2025 – Heden | Afstudeerrichting AI |
| **Graduaat programmeren** | Howest, Brugge | Sep 2021 – Jul 2023 | Focus op software engineering & .NET |
| **Netwerken en IT (Informaticabeheer)** | Sint-Jozefinstituut, Brugge | Sep 2017 – Jul 2019 | Secundair diploma |

---

## 💼 Werkervaring & Stages
### 1. Developer — Innovation Center Daenens
*(Aug 2023 – Jun 2025)*
- Ontwikkelen en onderhouden van C#-applicaties met WPF en ASP.NET.
- Realisatie van REST API-koppelingen en relationele database-integraties.

### 2. Helpdesk medewerker — Centric
*(Jan 2021 – Sep 2021)*
- Technische helpdesk voor kassasystemen.
- Analyseren en oplossen van hardnekkige gebruikersproblemen onder SLA.

### 3. Mobile developer (Stage) — Pionira
*(Feb 2021 – Mei 2021)*
- 10 weken intensieve stage: migreren van een bestaande Xamarin app naar **.NET MAUI**.
- Ontwerpen en implementeren van moderne schermen en dataflows.

### 4. Web developer (Stage) — Knoware
*(Apr 2019 – Apr 2019)*
- 3 weken stage: ontwikkelen en stijlen van websites met Bootstrap en responsive web standaarden.

---

![Curriculum Vitae Preview — Wout Verstraete](/images/cv-diploma-preview-p1.png)

---

## 📜 Certificaten & Talenkennis
- **Certificaat Digital Transformation** — University of Economics in Katowice, Poland
- **Nederlands:** Moedertaal
- **Engels:** Vloeiend / Professioneel
- **Frans:** Goede basiskennis

---

## 🤖 AI & Intelligent Systems: De Toekomst van Development
Met mijn huidige afstudeerrichting **AI** binnen de Bachelor Toegepaste Informatica aan Howest, richt ik mij op de convergentie tussen traditionele software engineering (C#, .NET, web) en intelligente systemen (LLM's, machine learning modellen, computer vision).

> *"De toekomst van softwareontwikkeling behoort toe aan developers die zowel diepgaande engineering discipline als state-of-the-art AI-technieken beheersen."*

---

## 🤝 Contacteer mij & Portfolio Verkenning
Geïnteresseerd in mijn profiel, CVO-projecten of mogelijkheden tot samenwerking? Neem gerust contact met mij op via de contactgegevens hierboven of stel direct een vraag aan mijn ingebouwde **Gemini AI Portfolio Agent**.

Blader gerust verder door mijn **CVO-projecten, netwerkevents en gastcolleges** via de navigatieknop hieronder of via de Explorer in de linkerzijbalk!`
  },
  {
    id: "post-02",
    slug: "cvo-project-1-akkadian-to-english-translator",
    title: "CVO Project 1: Akkadian to English Translator (Machine Learning & NLP)",
    date: "2026-10-20",
    category: "CVO Projecten (1-4)",
    tags: ["CVO-1", "Python", "Machine Learning", "NLP", "PyTorch", "Data Preprocessing"],
    excerpt: "Ontwikkeling van een machine learning model om historische Akkadische spijkerschrift-teksten automatisch te vertalen naar het Engels.",
    readTime: "6 min leestijd",
    content: `In dit project ontwikkelde ik een geavanceerde **machine learning vertaaltool** om historische Akkadische spijkerschrift-teksten automatisch te vertalen naar het Engels.

---

> 📷 **Foto / Screenshot Placeholder: Kleitablet / Cuneiform Taaldataset & Transliterator Interface**  
> *(Plaats hier een screenshot van je modeloutput, notebook of historische bron: bijv. \`![Akkadisch NLP Model Output](/images/akkadian-translator-demo.png)\`)*

---

## 🎯 Doelstellingen & Scope
- Automatiseren van het vertaalproces voor zeldzame historische kleitabletten en teksten in het Akkadisch.
- Toepassen van geavanceerde **Natural Language Processing (NLP)** technieken op low-resource historische taaldatasets.
- Bouwen van een betrouwbaar en reproduceerbaar evaluatiekader voor vertaalaccuraatheid.

---

## 🛠️ Gebruikte Technologieën
- **Python** (Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow)
- **Jupyter Notebooks** voor experimentatie, data cleaning en hyperparameter tuning
- Tokenization pipelines aangepast aan cuneiform transliteraties
- Seq2Seq / Transformer architecturen voor sequence vertaling

---

## 💻 Data Pipeline & Preprocessing Snippet

> 💻 **Code Placeholder: Akkadian Data Preprocessing & Model Pipeline**  
> *(Plaats hier je eigen Python code snippet uit je repository, bijv. tokenization, data cleaning of PyTorch model training)*

---

> 📷 **Foto / Diagram Placeholder: Machine Learning Model Architectuur & Validatiecurve**  
> *(Plaats hier een schema van je modelarchitectuur of evaluatiegrafieken: bijv. \`![NLP Model Architectuur](/images/akkadian-architecture.png)\`)*

---

## 🚀 Resultaten & Impact
- Verwerken en structureren van specialistische taaldatasets met minimale ruis.
- Optimalisatie van modelparameters resulterend in een **functioneel werkend vertaalmodel** met hoge semantische accuraatheid.`
  },
  {
    id: "post-03",
    slug: "cvo-project-2-shopr-mobile-app",
    title: "CVO Project 2: ShopR — Crowdsourced Mobiele Boodschappen App",
    date: "2026-10-22",
    category: "CVO Projecten (1-4)",
    tags: ["CVO-2", "C#", "Xamarin", ".NET MAUI", "SQL", "REST-API"],
    excerpt: "Mobiele applicatie die de voordeligste producten per supermarkt toont op basis van realtime crowdsourced prijsdata.",
    readTime: "7 min leestijd",
    content: `**ShopR** is een release-ready mobiele applicatie ontworpen om consumenten te helpen besparen door realtime de voordeligste producten per winkel te vergelijken op basis van crowdsourced data.

---

> 📷 **Foto / Screenshot Placeholder: ShopR Mobiele App Mockups & UI Schermen**  
> *(Plaats hier screenshots van de app: bijv. barcodescanner, prijsvergelijking of winkelmandje: bijv. \`![ShopR App Schermen](/images/shopr-screens.png)\`)*

---

## 🛒 Belangrijkste Features
1. **Prijsvergelijking per Winkel:** Dynamische sortering van prijzen tussen verschillende supermarkten in de regio.
2. **Crowdsourced Data Invoer:** Gebruikers kunnen barcodes scannen, kassabonnen uploaden en actuele schapprijzen doorgeven.
3. **Slimme Boodschappenlijst:** Automatische berekening van de meest voordelige winkelroute voor een geselecteerde lijst producten.

---

## 🛠️ Technische Architectuur
- **Frontend / Client:** C# met Xamarin / .NET MAUI voor cross-platform deployment (Android & iOS).
- **Backend Services:** ASP.NET Core REST API voor snelle en betrouwbare data-uitwisseling.
- **Data Persistentie:** SQL database met geoptimaliseerde indexen voor razendsnelle prijsqueries.

---

## 📐 C# API Integratie Code Snippet

> 💻 **Code Placeholder: C# / .NET MAUI Service & API Integratie**  
> *(Plaats hier je eigen C# code snippet uit de ShopR codebase, bijv. PriceLookupService, database helper of ViewModels)*

---

> 📷 **Foto / Diagram Placeholder: Applicatie- en Databasestructuur (ERD / Architectuur)**  
> *(Plaats hier een diagram van het datamodel of de systeemarchitectuur: bijv. \`![ShopR Systeemarchitectuur](/images/shopr-architecture.png)\`)*

---

## 💡 Resultaat
Integratie van complexe frontend-logica, databasestructuur en API-koppelingen tot één coherent, gebruiksvriendelijk en **release-ready mobiel platform**.`
  },
  {
    id: "post-04",
    slug: "cvo-project-3-enterprise-dotnet-wpf-aspnet",
    title: "CVO Project 3: Enterprise C# Applicaties, WPF & ASP.NET Ecosystemen",
    date: "2026-10-23",
    category: "CVO Projecten (1-4)",
    tags: ["CVO-3", "C#", "WPF", "ASP.NET", "Entity-Framework", "SQL"],
    excerpt: "Ontwikkeling en onderhoud van bedrijfskritische C#-applicaties bij Innovation Center Daenens met WPF en ASP.NET.",
    readTime: "6 min leestijd",
    content: `Tijdens mijn loopbaan als developer bij het **Innovation Center Daenens** en in academische projecten lag de focus op het bouwen van betrouwbare enterprise-software.

---

> 📷 **Foto / Screenshot Placeholder: Enterprise WPF Desktop UI of Dashboard**  
> *(Plaats hier een screenshot van de desktop interface of beheermodule: bijv. \`![WPF Enterprise Interface](/images/enterprise-wpf-demo.png)\`)*

---

## ⚙️ Technische Uitdagingen
- **Modulair Applicatieontwerp:** Toepassing van het MVVM (Model-View-ViewModel) patroon in Desktop WPF applicaties.
- **Robuuste Backend Integratie:** ASP.NET Core Web API's gekoppeld aan relationele databases (SQL Server / PostgreSQL).
- **Clean Architecture & Repository Pattern:** Loskoppeling van datatoegang, business logic en presentatielaag voor optimale testbaarheid.

---

## 📦 Service & Data Koppeling Snippet

> 💻 **Code Placeholder: Enterprise C# Service & Repository Pattern**  
> *(Plaats hier je eigen C# code snippet uit de codebase, bijv. Entity Framework context configuratie, WPF ViewModel of business logic service)*

---

> 📷 **Foto / Architectuur Placeholder: Software Architectuur & MVVM Datastromen**  
> *(Plaats hier een architectuurschema van de lagen en componenten: bijv. \`![MVVM Architectuur Schema](/images/enterprise-architecture.png)\`)*

---

## 🧠 Geleerde Lessen
Het onderhouden van software in productie vereist strikte type safety, uitgebreide exception handling en doordachte database-indexering.`
  },
  {
    id: "post-05",
    slug: "cvo-project-4-devops-docker-azure",
    title: "CVO Project 4: DevOps, Docker Containerisatie & Azure Cloud Deployment",
    date: "2026-10-24",
    category: "CVO Projecten (1-4)",
    tags: ["CVO-4", "Docker", "DevOps", "Linux", "Azure", "CI/CD"],
    excerpt: "Containeriseren van microservices, implementatie van Linux serveromgevingen en automatische CI/CD deployments naar Azure.",
    readTime: "5 min leestijd",
    content: `Een compleet softwareproduct stopt niet bij lokale code. CVO Project 4 concentreert zich op de DevOps pipeline, containerisatie met Docker en deployment naar Linux- en Azure-omgevingen.

---

> 📷 **Foto / Screenshot Placeholder: Azure Cloud Dashboard & Deployment Status**  
> *(Plaats hier een screenshot van je Azure portal, App Services of Container Registry: bijv. \`![Azure Cloud Dashboard](/images/azure-portal-status.png)\`)*

---

## 🛡️ Kernpijlers
1. **Containerisatie:** Multi-stage Dockerfiles om runtime containers klein, veilig en reproduceerbaar te houden.
2. **Infrastructure as Code & Cloud:** Beheren van Azure resources, app services en veilige secrets via Azure Key Vault.
3. **CI/CD Automation:** Geautomatiseerd bouwen, testen en uitrollen bij elke git push via GitHub Actions.

---

## 🐳 Productie Dockerfile & CI/CD Pipeline

> 💻 **Code / Config Placeholder: Productie Dockerfile & GitHub Actions CI/CD Pipeline**  
> *(Plaats hier je eigen Dockerfile of GitHub Actions YAML configuratie uit de repository)*

---

> 📷 **Foto / Screenshot Placeholder: GitHub Actions CI/CD Pipeline Run**  
> *(Plaats hier een screenshot van een succesvolle build- en deployment workflow: bijv. \`![CI/CD Pipeline Run](/images/github-actions-run.png)\`)*

---

## 💡 Resultaat
Snelle, foutloze deployments en identieke test- en productieomgevingen op zowel Linux als cloud containers.`
  },
  {
    id: "post-07",
    slug: "stagemarkt-netwerken-en-verbinding-met-de-industrie",
    title: "Stagemarkt: Netwerken & Verbinding met de Industrie",
    date: "2026-10-24",
    category: "Netwerkevents & Gastcolleges",
    tags: ["Stagemarkt", "Netwerken", "Stage", "Toegepaste AI", "Software Engineering", "Howest"],
    excerpt: "Reflectie op de Howest stagemarkt: doelgerichte technische dialogen met techbedrijven over software engineering, de adoptie van AI-pipelines en het verkennen van afstudeerstages.",
    readTime: "5 min leestijd",
    content: `Tijdens de recente **stagemarkt aan Howest** kreeg ik de uitgelezen kans om rechtstreeks in gesprek te gaan met innovatieve technologiebedrijven, consultancy-organisaties en AI-gedreven startups. 

Als student **Toegepaste Informatica met specialisatie in AI** is zo'n beurs het ideale moment om theorie en praktijk aan elkaar te toetsen: welke architecturale uitdagingen leven er momenteel écht op de werkvloer, en waar liggen de opportuniteiten om als software engineer met AI-kennis direct meerwaarde te bieden?

---

![Sfeerimpressie Howest Stagemarkt](/images/stagemarkt-hero.jpg)

---

## 🎯 Doelgericht Netwerken: Focus op Diepgang Boven Kwantiteit

Mijn doelstelling voor deze beurs was duidelijk afgebakend en tweeledig:
1. **Peilen naar reële behoeften in het werkveld:** Waar liggen vandaag de knelpunten bij het bouwen van machine learning pipelines, computer vision toepassingen en backend integraties?
2. **Zoeken naar ontwikkelteams met een hands-on mentaliteit:** Bedrijven waar innovatie, technische ownership en schone code centraal staan.

In plaats van oppervlakkig visitekaartjes en brochures te verzamelen, ging ik doelgericht het gesprek aan over concrete projecten, tech stacks en actuele stage-opdrachten. Dit leverde direct diepgaandere en meer memorabele contacten op met senior engineers en recruiters.

---

## 💡 De Werkvloer in Transitie: De Synergie Tussen Software Engineering & AI

De gesprekken bevestigden een zeer duidelijke trend binnen het Vlaamse en internationale IT-landschap:

> *"De vraag naar ontwikkelaars die niet enkel abstracte modellen kunnen trainen, maar ook robuuste software kunnen neerzetten (van veilige REST API's en microservices tot end-to-end integratie), is groter dan ooit."*

Voor mij was dit een enorme bevestiging van mijn gekozen leertraject. Mijn achtergrond in **C#, .NET en full-stack applicatieontwikkeling** (o.a. opgebouwd bij Innovation Center Daenens) vormt een stevig fundament voor het ontwerpen van schaalbare architecturen, terwijl mijn huidige studies in **Toegepaste AI** mij in staat stellen om geavanceerde machine learning modellen en computer vision pipelines naadloos te integreren.

---

## 🌐 Professionele Follow-up & Online Netwerken

Netwerken stopt niet bij het verlaten van de beursvloer. Na afloop vatte ik mijn bevindingen en belangrijkste observaties samen in een gerichte **LinkedIn-post**. 

Het doel hiervan was om:
- De contacten met de gesproken engineers en recruiters warm te houden.
- De dialoog over actuele AI-adoptievraagstukken voort te zetten.
- Mijn professionele online aanwezigheid consistent af te stemmen op mijn technische ambities.

Deze aanpak wierp direct vruchten af: de post leidde tot meerdere waardevolle 1-op-1 reacties en inhoudelijke vervolggesprekken over concrete stagevacatures.

---

## 📌 Belangrijkste Takeaways

- **Gericht en inhoudelijk netwerken:** Door met inhoudelijke vragen naar concrete architecturen en pipelines te komen, ontstaan veel relevantere contacten dan via traditionele vacaturesites.
- **Pragmatische software-engineering ontmoet AI:** Bedrijven zoeken engineers die de vertaalslag maken van een getraind model naar een stabiele, containerized productietoepassing.
- **Kansen voor afstudeerstage:** Succesvolle introducties en concrete contacten gelegd voor een uitdagende stageplaats binnen AI & software engineering.`
  },
  {
    id: "post-08",
    slug: "gastcollege-eu-ai-act-in-de-praktijk",
    title: "Gastcollege: De EU AI Act in de Praktijk & Compliance by Design",
    date: "2026-10-24",
    category: "Netwerkevents & Gastcolleges",
    tags: ["EU AI Act", "AI Governance", "Gastcollege", "Compliance", "Ethiek", "Howest"],
    excerpt: "Analyse van het gastcollege over de Europese AI Act: risicoclassificatie, data governance en de noodzaak van compliance-by-design in moderne software architecturen.",
    readTime: "6 min leestijd",
    content: `Met de goedkeuring en gefaseerde invoering van de **Europese AI Act** bevindt de technologiesector zich op een historisch kantelpunt. 

Tijdens een diepgaand en verhelderend gastcollege kregen we inzicht in de juridische, ethische en vooral **technische implicaties** van deze wetgeving voor ontwikkelaars en organisaties die artificiële intelligentie bouwen of inzetten.

De centrale vraag van de sessie luidde:  
*Hoe ontwikkelen we krachtige, schaalbare en innovatieve AI-systemen zónder in te boeten aan transparantie, veiligheid en wettelijke compliance?*

---

![Spreker & Openingsslide EU AI Act Keynote](/images/ai-act-keynote.jpg)

---

## ⚖️ Het Risicogebaseerde Kader van de AI Act

De kern van de AI Act is opgebouwd rond een viervoudige **risicoclassificatie**:

| Risiconiveau | Type Toepassing | Verplichtingen voor Developers |
| :--- | :--- | :--- |
| **Onaanvaardbaar Risico** | Social scoring, cognitieve gedragsmanipulatie, realtime biometrie in openbare ruimte | **Strikt verboden** in de Europese Unie. |
| **Hoog Risico** | HR & werving, kredietbeoordeling, kritieke infrastructuur, medische AI | Strikte standaarden: kwalitatieve datasets, continue risicobeoordeling, logging & menselijk toezicht (*human-in-the-loop*). |
| **Beperkt Risico** | Chatbots, deepfakes, AI-gegenereerde content | Transparantieverplichting: gebruikers moeten weten dat ze met AI interageren. |
| **Minimaal Risico** | Spamfilters, AI-gestuurde games, aanbevelingssystemen | Geen aanvullende wettelijke restricties; vrij gebruik conform standaard privacywetgeving (AVG/GDPR). |

Tijdens de lezing werd benadrukt dat compliance niet louter een administratieve formaliteit voor de juridische afdeling is, maar een **fundamentele software-architectuurkeuze**.

---

## 🛠️ Compliance by Design: Architecturale Impact voor AI-Engineers

Voor mij als ontwikkelaar werd tijdens de presentatie één leidend principe kristalhelder:

> *"Compliance en ethiek kun je niet achteraf als een pleister op een getraind model plakken. Databeheer, modelverantwoording en auditability moeten vanaf sprint één worden ingebed in de code en CI/CD-pipeline."*

Dit vraagt om concrete technische waarborgen in het ontwikkelproces:

1. **Data Governance & Traceerbaarheid:** Exacte herkomst van trainings- en validatiedatasets documenteren om bias en hallucinaties traceerbaar te maken.
2. **Geautomatiseerde Audit Trails:** Elke modelinferentie in een hoog-risico context moet voorzien zijn van timestamps, modelversie, inputmetadata en confidence scores.
3. **Reproduceerbare Pipelines:** Docker-containers en MLflow / DVC pipelines die garanderen dat een model op elk moment exact opnieuw getraind of geaudit kan worden.

---

## 💻 Geautomatiseerde Audit Trails & Interceptor Snippet

> 💻 **Code Placeholder: Audit Trail Logging & Compliance Interceptor**  
> *(Plaats hier optioneel je eigen logging-, traceerbaarheids- of validatiecode)*

---

![EU AI Act Presentatie & Verboden AI Slide](/images/ai-act-slide.jpg)

---

## 💬 LinkedIn Reflectie & Professionele Dialoog

Aansluitend aan het gastcollege heb ik een beknopte analyse op **LinkedIn** geplaatst, waarin ik de belangrijkste architecturale lessen voor softwareontwikkelaars deelde. 

De post lokte constructieve discussies uit met collega-studenten, docenten en vakgenoten over de balans tussen Europese innovatiedrang en noodzakelijke consumentenbescherming. Het actief documenteren en delen van dit soort leermomenten helpt om de opgedane vakkennis scherp te stellen en toont aan dat technologie nooit in een sociaal of juridisch vacuüm opereert.

---

## 📌 Belangrijkste Takeaways

- **Strikte data governance:** De EU AI Act dwingt developers tot transparantie, continue evaluatie en reproduceerbaarheid van datasets en modellen.
- **Compliance by Design:** Veiligheid, auditeerbaarheid en menselijk toezicht moeten al in de initiële architectuurfase van de software worden geïntegreerd.
- **Kwaliteitsstempel:** Ethische en conforme AI is geen belemmering voor innovatie, maar juist een kwaliteitslabel dat betrouwbaarheid en adoptie in het bedrijfsleven bevordert.`
  },
  {
    id: "post-06",
    slug: "vrij-extracurriculair-internationale-ervaring-en-ai",
    title: "Vrij & Extracurriculair: Certificaat Digital Transformation (Katowice, Polen)",
    date: "2026-10-24",
    category: "Vrij & Extracurriculair",
    tags: ["Extracurriculair", "Digital Transformation", "Polen", "Howest", "Certificering"],
    excerpt: "Internationale certificering aan de University of Economics in Katowice (Polen): bedrijfstransformaties, procesoptimalisatie en multicultureel teamwork.",
    readTime: "4 min leestijd",
    content: `Naast het curriculum investeer ik doelbewust in internationale verrijking, certificeringen en de praktische impact van technologische innovaties op bedrijfsprocessen.

---

![Internationaal Programma aan de University of Economics in Katowice](/images/katowice-polen-program.png)

---

## 🌍 Certificaat Digital Transformation in Polen
Tijdens een intensief internationaal programma aan de **University of Economics in Katowice, Poland**, behaalde ik het officiële *Certificaat Digital Transformation*. 

- **Diepgaande business cases:** Analyse van digitale bedrijfstransformaties, procesoptimalisatie en de integratie van geautomatiseerde beslissingssystemen.
- **Internationaal teamwork:** Samenwerking in multidisciplinaire en multiculturele teams met focus op innovatiestrategieën en interculturele communicatie.
- **Bruggen bouwen:** Het verbinden van enterprise IT-oplossingen met reële operationele bedrijfsuitdagingen.

---

![Certificaat Digital Transformation - Katowice](/images/certificaat-digital-transformation.jpg)

---

## 📌 Belangrijkste Takeaways & Vaardigheden
- **Internationale samenwerking:** Ervaring met het uitwerken van digitaliseringsstrategieën binnen een internationale context.
- **Strategisch inzicht:** Dieper inzicht in hoe software, data pipelines en automatisering meetbare bedrijfswaarde creëren.
- **Academische en professionele verbreding:** Een waardevolle aanvulling op het software engineering en AI-curriculum van Howest.`
  }
];
