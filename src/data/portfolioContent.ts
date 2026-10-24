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
  category: "Biografie & CV" | "CVO Projecten (1-4)" | "Vrij & Extracurriculair";
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
    github: "https://github.com/WoutV2a",
    linkedin: "https://linkedin.com/in/wout-verstraete-2a",
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
    content: `# Biografie, Professioneel Profiel & Curriculum Vitae

Welkom op het interactieve Developer Workbench Portfolio van **Wout Verstraete**.

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
- **LinkedIn:** [linkedin.com/in/wout-verstraete-2a](https://linkedin.com/in/wout-verstraete-2a)
- **GitHub:** [github.com/WoutV2a](https://github.com/WoutV2a)

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

## 📜 Certificaten & Talenkennis
- **Certificaat Digital Transformation** — University of Economics in Katowice, Poland
- **Nederlands:** Moedertaal
- **Engels:** Vloeiend / Professioneel
- **Frans:** Goede basiskennis`
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
    content: `# CVO Project 1: Akkadian to English Translator

In dit baanbrekende project ontwikkelde ik een geavanceerde **machine learning vertaaltool** om historische Akkadische teksten automatisch te vertalen naar het Engels.

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
\`\`\`python
import pandas as pd
import torch
import torch.nn as nn

def preprocess_akkadian_corpus(raw_filepath: str):
    """
    Schoont transliteraties op en bouwt vocabulary mappings voor Akkadisch-Engelse paren.
    """
    df = pd.read_csv(raw_filepath)
    df['clean_akkadian'] = df['transliteration'].str.lower().str.strip()
    df['clean_english'] = df['translation'].str.strip()
    
    # Filter onvolledige of beschadigde fragmenten
    df = df.dropna(subset=['clean_akkadian', 'clean_english'])
    return df

print("Akkadian Corpus successfully parsed and indexed.")
\`\`\`

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
    content: `# CVO Project 2: ShopR — Mobiele Boodschappen App

**ShopR** is een release-ready mobiele applicatie ontworpen om consumenten te helpen besparen door realtime de voordeligste producten per winkel te vergelijken op basis van crowdsourced data.

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
\`\`\`csharp
public class PriceLookupService : IPriceLookupService
{
    private readonly HttpClient _httpClient;
    private const string BaseApiUrl = "https://api.shopr.app/v1/prices";

    public PriceLookupService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<StorePriceDto>> GetBestPricesForBasketAsync(List<string> productEans)
    {
        var response = await _httpClient.PostAsJsonAsync($"{BaseApiUrl}/compare", productEans);
        response.EnsureSuccessStatusCode();

        var rankedStores = await response.Content.ReadFromJsonAsync<List<StorePriceDto>>();
        return rankedStores.OrderBy(s => s.TotalPrice).ToList();
    }
}
\`\`\`

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
    content: `# CVO Project 3: Enterprise C# Applicaties met WPF & ASP.NET

Tijdens mijn loopbaan als developer bij het **Innovation Center Daenens** en in academische projecten lag de focus op het bouwen van betrouwbare enterprise-software.

---

## ⚙️ Technische Uitdagingen
- **Modulair Applicatieontwerp:** Toepassing van het MVVM (Model-View-ViewModel) patroon in Desktop WPF applicaties.
- **Robuuste Backend Integratie:** ASP.NET Core Web API's gekoppeld aan relationele databases (SQL Server / PostgreSQL).
- **Clean Architecture & Repository Pattern:** Loskoppeling van datatoegang, business logic en presentatielaag voor optimale testbaarheid.

---

## 📦 Service & Data Koppeling Snippet
\`\`\`csharp
public class EmployeeService : IEmployeeService
{
    private readonly ApplicationDbContext _context;

    public EmployeeService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<ServiceResult<EmployeeDto>> UpdateProfileAsync(int employeeId, UpdateEmployeeCommand command)
    {
        var employee = await _context.Employees.FindAsync(employeeId);
        if (employee == null) return ServiceResult<EmployeeDto>.NotFound();

        employee.FirstName = command.FirstName;
        employee.LastName = command.LastName;
        employee.LastActive = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return ServiceResult<EmployeeDto>.Success(new EmployeeDto(employee));
    }
}
\`\`\`

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
    content: `# CVO Project 4: DevOps, Docker & Cloud Automatisering

Een compleet softwareproduct stopt niet bij lokale code. CVO Project 4 concentreert zich op de DevOps pipeline, containerisatie met Docker en deployment naar Linux- en Azure-omgevingen.

---

## 🛡️ Kernpijlers
1. **Containerisatie:** Multi-stage Dockerfiles om runtime containers klein, veilig en reproduceerbaar te houden.
2. **Infrastructure as Code & Cloud:** Beheren van Azure resources, app services en veilige secrets via Azure Key Vault.
3. **CI/CD Automation:** Geautomatiseerd bouwen, testen en uitrollen bij elke git push via GitHub Actions.

---

## 🐳 Productie Dockerfile Voorbeeld
\`\`\`dockerfile
# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/ShopR.Api/ShopR.Api.csproj", "src/ShopR.Api/"]
RUN dotnet restore "src/ShopR.Api/ShopR.Api.csproj"
COPY . .
WORKDIR "/src/src/ShopR.Api"
RUN dotnet build -c Release -o /app/build
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Final Production Runner
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "ShopR.Api.dll"]
\`\`\`

---

## 💡 Resultaat
Snelle, foutloze deployments en identieke test- en productieomgevingen op zowel Linux als cloud containers.`
  },
  {
    id: "post-06",
    slug: "vrij-extracurriculair-internationale-ervaring-en-ai",
    title: "Vrij & Extracurriculair: Digital Transformation & AI Verkenning",
    date: "2026-10-24",
    category: "Vrij & Extracurriculair",
    tags: ["Extracurriculair", "AI", "Digital Transformation", "Polen", "Howest"],
    excerpt: "Internationale certificering in Katowice (Polen), buitenschoolse projecten, community engagement en de toekomst van AI in software engineering.",
    readTime: "5 min leestijd",
    content: `# Vrij & Extracurriculair: Internationale Ervaring & AI

Naast het curriculum investeer ik doelbewust in internationale verrijking, certificeringen en de nieuwste ontwikkelingen in Artificial Intelligence.

---

## 🌍 Certificaat Digital Transformation in Polen
Tijdens een intensief internationaal programma aan de **University of Economics in Katowice, Poland**, behaalde ik het officiële *Certificaat Digital Transformation*. 
- Diepgaande cases rondom digitale bedrijfstransformaties, procesoptimalisatie en de integratie van geautomatiseerde beslissingssystemen.
- Samenwerking in internationale teams met focus op interculturele communicatie en innovatiestrategieën.

---

## 🤖 AI & Intelligent Systems: De Toekomst van Development
Met mijn huidige afstudeerrichting **AI** binnen de Bachelor Toegepaste Informatica aan Howest, richt ik mij op de convergentie tussen traditionele software engineering (C#, .NET, web) en intelligente systemen (LLM's, machine learning modellen, computer vision).

> *"De toekomst van softwareontwikkeling behoort toe aan developers die zowel diepgaande engineering discipline als state-of-the-art AI-technieken beheersen."*

---

## 🤝 Contacteer mij
Geïnteresseerd in mijn profiel, CVO-projecten of mogelijkheden tot samenwerking? Gebruik gerust de contactgegevens bovenaan of stel direct een vraag aan mijn ingebouwde **Gemini AI Portfolio Agent**!`
  }
];
