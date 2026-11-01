// LAVAL ARTICLE — edit the English and Italian HTML below.
// Add ordinary <p>, <h3>, <section> and <figure> elements in any order.
// Decklist images inside links automatically use the shared image viewer.
// These templates are trusted, local editorial HTML; never insert user input here.

// Replace the sample image path here; both languages share the same original.
const decklistImage = "assets/images/yugioh/decklists/LavalOTK.png";

export default {
  id: "laval",
  kind: "deck",
  title: "Laval",
  format: "Fire Water",

  // Personal editorial assessment, never calculated.
  // Exactly four supported values: Extreme, High, Medium, Low (untranslated).
  tier: "Extreme",

  en: `
    <!-- Introduction -->
    <p>
      Laval is a FIRE archetype built around preparing the Graveyard and turning
      that preparation into a focused offensive push. Its Graveyard-oriented
      mechanics make resource management central to its identity. Synchro Summoning
      gives the deck a way to translate those resources into a range of threats.
      This preliminary overview introduces the ideas behind the deck in Fire Water.
    </p>

    <!-- Sample decklist: keep width and height in the image's original proportions. -->
    <section>
      <h2>Sample Decklist</h2>
      <figure>
        <a href="${decklistImage}">
          <img src="${decklistImage}" width="1162" height="1306"
               alt="Sample Laval decklist, including Main, Side and Extra Decks."
               decoding="async">
        </a>
        <figcaption>Laval · Fire Water. Select the image to enlarge it.</figcaption>
      </figure>
    </section>

    <!-- Extend this section, or add further sections and figures below it. -->
    <section>
      <h2>Strategy &amp; Analysis</h2>
      <p>
        Laval’s general plan is to establish resources before committing to a
        decisive turn. The opening stages therefore involve balancing preparation
        with the need to remain in the game. Choosing when to move from setup to
        pressure is a central strategic question.
      </p>
      <p>
        The Graveyard is a working resource rather than simply a destination for
        spent cards. Its contents help shape the options available on later turns,
        while Synchro-oriented play rewards planning how to assemble the necessary
        materials. Deckbuilding must balance access to those resources with cards
        that are useful before the setup is complete.
      </p>
      <p>
        A prepared position can offer strong offensive potential and different
        Synchro options. That reliance on preparation can also leave the deck
        vulnerable to early pressure, disruption, or interference with the
        Graveyard. Exploring consistency, resilience, and the timing of a major
        commitment will be important themes of the fuller analysis.
      </p>
    </section>
  `,

  it: `
    <!-- Introduzione -->
    <p>
      Laval è un archetipo FUOCO che prepara il Cimitero per trasformare le risorse
      accumulate in una spinta offensiva mirata. Le sue meccaniche incentrate sul
      Cimitero rendono la gestione delle risorse parte fondamentale della sua
      identità. Le Evocazioni Synchro permettono di convertire queste risorse in
      diverse minacce. Questa panoramica preliminare introduce le idee alla base
      del mazzo nel formato Fire Water.
    </p>

    <!-- Lista d'esempio: conservare le proporzioni originali dell'immagine. -->
    <section>
      <h2>Lista d'esempio</h2>
      <figure>
        <a href="${decklistImage}">
          <img src="${decklistImage}" width="1162" height="1306"
               alt="Lista d’esempio Laval, con Main Deck, Side Deck ed Extra Deck."
               decoding="async">
        </a>
        <figcaption>Laval · Fire Water. Seleziona l’immagine per ingrandirla.</figcaption>
      </figure>
    </section>

    <!-- Ampliare questa sezione o aggiungere altre sezioni e figure qui sotto. -->
    <section>
      <h2>Strategia e Analisi</h2>
      <p>
        Il piano generale di Laval consiste nel costruire le proprie risorse prima
        di impegnarsi in un turno decisivo. Nelle fasi iniziali occorre quindi
        bilanciare la preparazione con la necessità di restare in partita.
        Scegliere quando passare dallo sviluppo alla pressione offensiva è una
        delle principali questioni strategiche.
      </p>
      <p>
        Il Cimitero è una risorsa attiva, non soltanto la destinazione delle carte
        già utilizzate. Il suo contenuto contribuisce a definire le opzioni dei
        turni successivi, mentre il gioco orientato alle Synchro premia la
        pianificazione dei materiali necessari. Nella costruzione del mazzo serve
        un equilibrio tra l’accesso a queste risorse e le carte utili prima che la
        preparazione sia completa.
      </p>
      <p>
        Una posizione ben preparata può offrire un forte potenziale offensivo e
        diverse opzioni Synchro. La dipendenza dalla preparazione può però esporre
        il mazzo alla pressione iniziale, alle interruzioni o alle interferenze con
        il Cimitero. Consistenza, capacità di recupero e scelta del momento in cui
        impegnare le proprie risorse saranno temi importanti dell’analisi estesa.
      </p>
    </section>
  `,
};
