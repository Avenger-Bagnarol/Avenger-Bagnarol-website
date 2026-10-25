// EDIT PUBLICATIONS HERE. Records appear in this order (newest first).
// Keep official paper titles in English; descriptions are translated below each title.
// paperUrl is the Read Paper link. Leave pdfUrl empty until the local file exists:
// pdfUrl: "assets/documents/physics/your-paper.pdf"
// Descriptions are editable in description.en and description.it for each paper.
const publications = [
  {
    title: "Practical approach to perturbative corrections to few-body observables",
    authors: "Sourav Mondal, Martin Schäfer, Mirko Bagnarol, Nir Barnea, Udit Raha, Johannes Kirscher",
    venue: "Physical Review C 114, 044004",
    year: "2026",
    paperUrl: "https://doi.org/10.1103/yvc4-j9gh",
    pdfUrl: "",
    description: {
      en: "We develop two numerical approaches to perturbative corrections in few-body observables. Applications to nuclear radii in pionless EFT allow us to examine strong-interaction and Coulomb contributions.",
      it: "Sviluppiamo due approcci numerici per calcolare correzioni perturbative a osservabili di sistemi a pochi corpi. Le applicazioni ai raggi nucleari nell’EFT senza pioni permettono di esaminare i contributi dell’interazione forte e di quella coulombiana.",
    },
  },
  {
    title: "Charged particle scattering in renormalizable pionless effective field theory at next-to-leading order: The pd, dd, and p-³He cases",
    authors: "Matúš Rojik, Martin Schäfer, Mirko Bagnarol, Nir Barnea",
    venue: "Physical Review C 113, 024001",
    year: "2026",
    paperUrl: "https://doi.org/10.1103/7pp1-tl4f",
    pdfUrl: "",
    description: {
      en: "We study scattering between charged nuclear clusters at next-to-leading order in pionless EFT, treating Coulomb interactions nonperturbatively. Harmonic oscillator traps and the stochastic variational method provide access to low-energy scattering observables.",
      it: "Studiamo lo scattering tra cluster nucleari carichi al next-to-leading order nell’EFT senza pioni, trattando l’interazione coulombiana in modo non perturbativo. Trappole armoniche e metodo variazionale stocastico consentono di estrarre osservabili di scattering a bassa energia.",
    },
  },
  {
    title: "From radiation dose to cellular dynamics: A discrete model for simulating cancer therapy",
    authors: "Mirko Bagnarol, Gianluca Lattanzi, Jan Åström, Mikko Karttunen",
    venue: "Physical Review E 112, 064413",
    year: "2025",
    paperUrl: "https://doi.org/10.1103/fn8b-s7x3",
    pdfUrl: "",
    description: {
      en: "We use a discrete cellular model to investigate tissue dynamics under irradiation. The simulations connect radiation dose with cell-level responses and the evolution of the simulated tissue.",
      it: "Utilizziamo un modello cellulare discreto per studiare la dinamica dei tessuti sottoposti a irraggiamento. Le simulazioni collegano la dose di radiazione alle risposte delle singole cellule e all’evoluzione del tessuto simulato.",
    },
  },
  {
    title: "Accurate calculation of low energy scattering phase shifts of charged particles in a harmonic oscillator trap",
    authors: "Mirko Bagnarol, Nir Barnea, Matúš Rojik, Martin Schäfer",
    venue: "Physics Letters B 861, 139230",
    year: "2025",
    paperUrl: "https://doi.org/10.1016/j.physletb.2024.139230",
    pdfUrl: "",
    description: {
      en: "We present numerical methods for solving the Coulomb-corrected BERW relation, linking trapped energy levels to free-space scattering phase shifts. We test the approach on proton–alpha scattering with a short-range model interaction.",
      it: "Presentiamo metodi numerici per risolvere la relazione BERW con correzione coulombiana, collegando i livelli energetici in trappola agli sfasamenti di scattering nello spazio libero. Verifichiamo l’approccio nello scattering protone–alfa con un’interazione modello a corto raggio.",
    },
  },
  {
    // Metadata verified against the published article (20 November 2023).
    title: "Effective field theory analysis of the Coulomb breakup of the one-neutron halo nucleus ¹⁹C",
    authors: [
      "Pierre Capel, Daniel R. Phillips, Andrew Andis, Mirko Bagnarol",
      "Behnaz Behzadmoghaddam, Francesca Bonaiti, Rishabh Bubna, Ylenia Capitani",
      "Pierre-Yves Duerinck, Victoria Durant, Niklas Döpper, Aya El Boustani",
      "Roland Farrell, Maurus Geiger, Michael Gennari, Nitzan Goldberg",
      "Jakub Herko, Tanja Kirchner, Live-Palm Kubushishi, Zhen Li",
      "Simone S. Li Muli, Alexander Long, Brady Martin, Kamyar Mohseni",
      "Imane Moumene, Nicola Paracone, Elad Parnes, Beatriz Romeo",
      "Victor Springer, Isak Svensson, Oliver Thim, Nuwan Yapa",
    ].join(", "),
    venue: "The European Physical Journal A 59, 273",
    year: "2023",
    paperUrl: "https://doi.org/10.1140/epja/s10050-023-01181-7",
    pdfUrl: "",
    description: {
      en: "We analyse the Coulomb breakup of the one-neutron halo nucleus ¹⁹C using halo EFT and a Coulomb-corrected eikonal reaction model. Comparison with measured breakup cross sections constrains the neutron separation energy and the asymptotic normalisation of the halo wave function.",
      it: "Analizziamo la dissociazione coulombiana del nucleo ad alone a un neutrone ¹⁹C utilizzando l’EFT per nuclei ad alone e un modello di reazione eikonale con correzione coulombiana. Il confronto con le sezioni d’urto misurate permette di porre vincoli sull’energia di separazione del neutrone e sulla normalizzazione asintotica della funzione d’onda dell’alone.",
    },
  },
  {
    title: "Five-body calculation of s-wave n-⁴He scattering at next-to-leading order pionless effective field theory",
    authors: "Mirko Bagnarol, Martin Schäfer, Betzalel Bazak, Nir Barnea",
    venue: "Physics Letters B 844, 138078",
    year: "2023",
    paperUrl: "https://doi.org/10.1016/j.physletb.2023.138078",
    pdfUrl: "",
    description: {
      en: "We calculate neutron–alpha s-wave scattering in a five-nucleon description at leading and next-to-leading orders in pionless EFT. Trapped energy levels yield phase shifts, the scattering length, and the effective range.",
      it: "Calcoliamo lo scattering neutrone–alfa in onda s descrivendo esplicitamente i cinque nucleoni al leading e next-to-leading order nell’EFT senza pioni. Dai livelli energetici in trappola ricaviamo sfasamenti, lunghezza di scattering e raggio efficace.",
    },
  },
];

// EDIT SCIENTIFIC TEXT HERE. Each language uses the same layout and publications.
export default {
  en: {
    label: "Physics",
    title: "Physics & Research",
    // This existing overview is also used by the homepage's Physics card.
    intro: "A space for my scientific background, research interests and publications. Content will be added here.",
    eyebrow: "Dr. Mirko Bagnarol · Theoretical nuclear physics",
    introduction: [
      "My scientific background is in theoretical nuclear physics, with a particular focus on the numerical description of low-energy few-body systems.",
      "During my Ph.D. at the Hebrew University of Jerusalem, I investigated nuclear scattering processes using pionless effective field theory, combining analytical methods with computational techniques to study the interactions of few-nucleon systems.",
      "My broader scientific interests include numerical modelling, high-performance computing, and the application of computational methods to physical and biological systems.",
    ],
    researchTitle: "Research areas",
    research: [
      {
        title: "Theoretical Nuclear Physics",
        paragraphs: [
          "I study how a small number of nucleons interact at low energies, using pionless effective field theory (EFT) to describe nuclear forces at leading and next-to-leading orders. My work includes few-nucleon scattering, the nonperturbative treatment of Coulomb interactions, and the extraction of phase shifts and other scattering observables.",
          "I combine the stochastic variational method with harmonic oscillator traps and the BERW formalism to connect discrete energy levels with scattering in free space. I am also interested in perturbative corrections to observables such as nuclear radii and in the numerical solution of few-body quantum-mechanical problems.",
        ],
      },
      {
        title: "Computational Physics",
        paragraphs: [
          "Numerical modelling is a central part of how I approach scientific questions. I use numerical simulations to investigate quantum systems and connect their theoretical description with observables. I am interested in the convergence and accuracy of numerical solutions, and in how computational methods make few-body problems accessible beyond analytical approximations.",
          "Beyond nuclear physics, I have worked on computational models of biological systems, particularly cellular dynamics and simulations of cancer radiotherapy. This work connects my interest in numerical methods with the study of how local cell-level rules influence the behaviour of a larger system.",
        ],
      },
    ],
    publicationsTitle: "Scientific Publications",
    publicationsIntro: "Selected papers on few-body nuclear physics, halo nuclei, numerical methods, and cellular dynamics.",
    readPaper: "Read Paper",
    publications,
    entries: [],
  },
  it: {
    label: "Fisica",
    title: "Fisica e Ricerca",
    intro: "Uno spazio per il mio percorso scientifico, gli interessi di ricerca e le pubblicazioni. I contenuti saranno aggiunti qui.",
    eyebrow: "Dr. Mirko Bagnarol · Fisica nucleare teorica",
    introduction: [
      "La mia formazione scientifica è nella fisica nucleare teorica, con particolare attenzione alla descrizione numerica dei sistemi a pochi corpi a bassa energia.",
      "Durante il dottorato presso l’Università Ebraica di Gerusalemme ho studiato processi di scattering nucleare utilizzando la teoria di campo efficace senza pioni, combinando metodi analitici e tecniche computazionali per descrivere le interazioni tra pochi nucleoni.",
      "I miei interessi scientifici più ampi comprendono la modellizzazione numerica, il calcolo ad alte prestazioni e l’applicazione di metodi computazionali a sistemi fisici e biologici.",
    ],
    researchTitle: "Aree di ricerca",
    research: [
      {
        title: "Fisica Nucleare Teorica",
        paragraphs: [
          "Studio le interazioni tra pochi nucleoni a bassa energia, utilizzando la teoria di campo efficace senza pioni (EFT) per descrivere le forze nucleari al leading e next-to-leading order. Il mio lavoro comprende lo scattering di sistemi a pochi nucleoni, il trattamento non perturbativo dell’interazione coulombiana e l’estrazione degli sfasamenti e di altre osservabili di scattering.",
          "Combino il metodo variazionale stocastico con trappole armoniche e il formalismo BERW per collegare i livelli energetici discreti allo scattering nello spazio libero. Mi interessano inoltre le correzioni perturbative a osservabili come i raggi nucleari e la soluzione numerica di problemi quantistici a pochi corpi.",
        ],
      },
      {
        title: "Fisica Computazionale",
        paragraphs: [
          "La modellizzazione numerica è centrale nel mio modo di affrontare i problemi scientifici. Utilizzo simulazioni numeriche per studiare sistemi quantistici e collegarne la descrizione teorica alle osservabili. Mi interessano la convergenza e l’accuratezza delle soluzioni numeriche e il modo in cui i metodi computazionali rendono accessibili i problemi a pochi corpi oltre le approssimazioni analitiche.",
          "Oltre alla fisica nucleare, ho lavorato su modelli computazionali di sistemi biologici, in particolare sulla dinamica cellulare e su simulazioni della radioterapia oncologica. Questo lavoro collega il mio interesse per i metodi numerici allo studio di come regole locali, a livello delle singole cellule, influenzino il comportamento di un sistema più ampio.",
        ],
      },
    ],
    publicationsTitle: "Pubblicazioni Scientifiche",
    publicationsIntro: "Una selezione di articoli su fisica nucleare a pochi corpi, nuclei ad alone, metodi numerici e dinamica cellulare.",
    readPaper: "Leggi Articolo",
    publications,
    entries: [],
  },
};
