// Edit the bilingual introduction in description and the captions in photos.
// The photo order also sets the sequence in the full-resolution viewer.
// The mosaic classes control tile sizes on desktop. Smaller screens use the
// shared responsive gallery rules.

// The matching files share a basename. Use the caption for the image
// description so edits stay in sync with the accessible label.
function photo(basename, mosaic, width, height, caption) {
  return {
    thumbnail: `thumbnails/${basename}.webp`,
    full: `full/${basename}.jpg`,
    mosaic,
    width,
    height,
    alt: caption,
    caption,
  };
}

export default {
  id: "georgia",
  directory: "assets/images/travel/Georgia/",
  title: { en: "Georgia", it: "Georgia" },
  description: {
    en: "A few scenes from my travels in Georgia, from the streets of Tbilisi to the Caucasus mountains and the Black Sea.",
    it: "Qualche scorcio del mio viaggio in Georgia, dalle strade di Tbilisi alle montagne del Caucaso e al Mar Nero.",
  },
  photos: [
    // Tbilisi
    photo("tbilisi_chronicle_of_georgia", "photo-wide", 800, 600, {
      en: "The towering pillars of the Chronicle of Georgia, where bronze reliefs depict episodes from Georgian history and the Bible.",
      it: "I pilastri monumentali della Cronaca della Georgia, con rilievi in bronzo che raffigurano episodi della storia georgiana e della Bibbia.",
    }),
    photo("tbilisi_chronicle_inner_pillars", "photo-tall", 600, 800, {
      en: "Between the pillars of the Chronicle of Georgia, where the sculpted figures tower over visitors.",
      it: "Tra i pilastri della Cronaca della Georgia, dove le figure scolpite sovrastano i visitatori.",
    }),
    photo("tbilisi_chronicle_figures", "photo-tall", 600, 800, {
      en: "Sculpted figures fill the faces of the pillars at the Chronicle of Georgia.",
      it: "Le figure scolpite ricoprono le facce dei pilastri della Cronaca della Georgia.",
    }),
    photo("tbilisi_chronicle_reliefs_from_below", "photo-wide", 800, 600, {
      en: "A view straight up between the pillars of the Chronicle of Georgia, with bronze reliefs rising into the clouds.",
      it: "Uno sguardo dal basso tra i pilastri della Cronaca della Georgia, con i rilievi in bronzo che si stagliano contro le nuvole.",
    }),
    photo("tbilisi_freedom_square", "photo-tall", 600, 800, {
      en: "Saint George above Freedom Square, Tbilisi. The gilded figure is the work of Georgian sculptor Zurab Tsereteli.",
      it: "San Giorgio svetta su piazza della Libertà, a Tbilisi. La figura dorata è opera dello scultore georgiano Zurab Tsereteli.",
    }),
    photo("tbilisi_gabriadze_clock_tower", "photo-tall", 600, 800, {
      en: "The crooked clock tower beside Rezo Gabriadze’s marionette theatre in Old Tbilisi.",
      it: "La torre dell’orologio, volutamente storta, accanto al teatro delle marionette di Rezo Gabriadze nella città vecchia di Tbilisi.",
    }),
    photo("tbilisi_church_iconostasis", "photo-tall", 600, 800, {
      en: "Icons and hanging lamps frame the sanctuary of a church in Old Tbilisi.",
      it: "Icone e lampade sospese incorniciano il santuario di una chiesa nella città vecchia di Tbilisi.",
    }),
    photo("tbilisi_kartlis_deda", "photo-tall", 600, 800, {
      en: "Kartlis Deda, the Mother of Georgia, seen from below on the hill above Tbilisi’s old town.",
      it: "Kartlis Deda, la Madre della Georgia, vista dal basso sulla collina che domina la città vecchia di Tbilisi.",
    }),
    photo("tbilisi_love_lock_bridge", "photo-tall", 800, 600, {
      en: "Red padlocks line a footbridge in Tbilisi’s old town.",
      it: "Lucchetti rossi lungo la ringhiera di un ponticello pedonale nella città vecchia di Tbilisi.",
    }),
    photo("tbilisi_church_at_top_of_steps", "photo-tall", 600, 800, {
      en: "Stone steps lead to the entrance of a domed church in Tbilisi.",
      it: "Una scalinata in pietra conduce all’ingresso di una chiesa a cupola a Tbilisi.",
    }),
    photo("tbilisi_sameba_cathedral", "photo-tall", 600, 800, {
      en: "Sameba, Tbilisi’s Holy Trinity Cathedral, seen from the broad paved forecourt.",
      it: "Sameba, la cattedrale della Santissima Trinità di Tbilisi, vista dall’ampio sagrato lastricato.",
    }),
    photo("tbilisi_cathedral_painted_apse", "photo-tall", 600, 800, {
      en: "Paintings and icons fill the tall apse of a cathedral in Tbilisi.",
      it: "Dipinti e icone decorano l’alta abside di una cattedrale di Tbilisi.",
    }),
    photo("tbilisi_mother_and_child_mural", "photo-tall", 600, 800, {
      en: "A mother-and-child mural covers the side of a building in Tbilisi.",
      it: "Un murale raffigurante una madre con il suo bambino ricopre la parete di un edificio a Tbilisi.",
    }),
    photo("tbilisi_tree_sculpture_and_dog", "photo-tall", 600, 800, {
      en: "A dog naps at the foot of a colourful tree sculpture in Tbilisi.",
      it: "Un cane riposa ai piedi di una colorata scultura a forma di albero a Tbilisi.",
    }),

    // The Georgian Military Highway and Kazbegi
    photo("zhinvali_reservoir", "photo-wide", 800, 600, {
      en: "The Zhinvali Reservoir winds between wooded hills in the Aragvi valley.",
      it: "Il bacino artificiale di Zhinvali si snoda tra le colline boscose della valle dell’Aragvi.",
    }),
    photo("ananuri_church_rooftops", "photo-tall", 600, 800, {
      en: "The domes and tiled roofs of the Ananuri fortress complex, overlooking the Zhinvali Reservoir.",
      it: "Le cupole e i tetti di tegole del complesso fortificato di Ananuri, affacciato sul bacino di Zhinvali.",
    }),
    photo("ananuri_fortress_from_hillside", "photo-tall", 600, 800, {
      en: "Ananuri seen from the hillside, with its defensive towers and church dome rising above the trees.",
      it: "Ananuri vista dal pendio, con le torri difensive e la cupola della chiesa che spuntano tra gli alberi.",
    }),
    photo("gudauri_friendship_monument_mosaic", "photo-panorama", 800, 354, {
      en: "A mosaic curves around the Soviet-era Friendship Monument above the Georgian Military Highway near Gudauri.",
      it: "Un mosaico segue la curva del Monumento dell’Amicizia, di epoca sovietica, sopra la Strada militare georgiana nei pressi di Gudauri.",
    }),
    photo("gudauri_valley_from_viewpoint", "photo-wide", 800, 600, {
      en: "Clouds drift along the slopes below the Gudauri viewpoint, high in the Greater Caucasus.",
      it: "Le nuvole scorrono lungo i pendii sotto il belvedere di Gudauri, nell’alto Caucaso.",
    }),
    photo("truso_mineral_pool", "photo-wide", 600, 800, {
      en: "Turquoise water and rust-coloured mineral deposits in the Truso Valley.",
      it: "Acqua turchese e depositi minerali color ruggine nella valle di Truso.",
    }),
    photo("gergeti_trinity_church_in_fog", "photo-wide", 800, 600, {
      en: "Fog envelops the fourteenth-century Gergeti Trinity Church and its bell tower.",
      it: "La nebbia avvolge la chiesa trecentesca della Trinità di Gergeti e il suo campanile.",
    }),
    photo("gergeti_church_stone_carvings", "photo-tall", 600, 800, {
      en: "Carved stonework on the walls of Gergeti Trinity Church above Stepantsminda.",
      it: "Rilievi in pietra sulle pareti della chiesa della Trinità di Gergeti, sopra Stepantsminda.",
    }),
    photo("gergeti_metal_clad_icon", "photo-tall", 600, 800, {
      en: "A metal-clad icon of the Virgin and Child inside Gergeti Trinity Church.",
      it: "Un’icona della Vergine con il Bambino rivestita di metallo, all’interno della chiesa della Trinità di Gergeti.",
    }),

    // Batumi and the Black Sea
    photo("batumi_ali_and_nino_at_night", "photo-feature", 600, 800, {
      en: "Tamar Kvesitadze’s moving sculpture Ali and Nino, lit against the Ferris wheel on Batumi’s waterfront.",
      it: "Ali e Nino, la scultura cinetica di Tamar Kvesitadze, illuminata davanti alla ruota panoramica sul lungomare di Batumi.",
    }),
    photo("batumi_alphabet_tower", "photo-tall", 600, 800, {
      en: "The letters of the Georgian alphabet spiral around Batumi’s Alphabet Tower like a double helix.",
      it: "Le lettere dell’alfabeto georgiano avvolgono la Torre dell’Alfabeto di Batumi come una doppia elica.",
    }),
    photo("batumi_tower_at_night", "photo-tall", 600, 800, {
      en: "The illuminated spire and observation wheel of Batumi Tower rise above the city at night.",
      it: "La guglia illuminata e la ruota panoramica della Batumi Tower svettano sulla città di notte.",
    }),
    photo("batumi_medea_golden_fleece", "photo-tall", 600, 800, {
      en: "Medea holds up the Golden Fleece in Batumi’s Europe Square, recalling the myth of the Argonauts and ancient Colchis.",
      it: "Medea solleva il Vello d’oro in piazza Europa, a Batumi, evocando il mito degli Argonauti e dell’antica Colchide.",
    }),
    photo("batumi_neptune_fountain", "photo-tall", 600, 800, {
      en: "The gilded Neptune raises his trident above the fountain in Batumi’s Theatre Square.",
      it: "Il Nettuno dorato alza il tridente sopra la fontana di piazza del Teatro, a Batumi.",
    }),
    photo("batumi_saint_nicholas_mosaic", "photo-tall", 600, 800, {
      en: "Saint Nicholas holding a Gospel book, depicted in a mosaic framed by a brick arch in Batumi.",
      it: "San Nicola con il libro dei Vangeli, raffigurato in un mosaico incorniciato da un arco in mattoni a Batumi.",
    }),
    photo("batumi_painted_church_dome", "photo-tall", 600, 800, {
      en: "A chandelier hangs beneath a blue-painted church dome in Batumi.",
      it: "Un lampadario pende sotto la cupola dipinta di blu di una chiesa di Batumi.",
    }),
    photo("batumi_seated_bronze_statue", "photo-tall", 600, 800, {
      en: "A seated bronze figure in front of a red-brick building in Batumi.",
      it: "Una figura in bronzo seduta davanti a un edificio in mattoni rossi a Batumi.",
    }),
    photo("batumi_stalin_souvenir_socks", "photo-tall", 600, 800, {
      en: "Socks bearing portraits of Joseph Stalin hang on a souvenir rack in Batumi.",
      it: "Calzini con il ritratto di Iosif Stalin appesi a un espositore di souvenir a Batumi.",
    }),
    photo("batumi_beach_beer", "photo-tall", 600, 800, {
      en: "A bottle of beer in the shade overlooking Batumi’s Black Sea beach.",
      it: "Una bottiglia di birra all’ombra, con vista sulla spiaggia di Batumi, sul Mar Nero.",
    }),
    photo("batumi_decorative_wall_at_night", "photo-tall", 600, 800, {
      en: "A streetlamp lights the ornamental patterns of a wall after dark in Batumi.",
      it: "Un lampione illumina i motivi ornamentali di un muro di Batumi dopo il tramonto.",
    }),

    // Mtskheta
    photo("mtskheta_jvari_monastery_entrance", "photo-wide", 800, 600, {
      en: "The stone entrance to Jvari Monastery, one of the medieval churches in Mtskheta’s UNESCO World Heritage site.",
      it: "L’ingresso in pietra del monastero di Jvari, una delle chiese medievali del sito UNESCO di Mtskheta.",
    }),
    photo("mtskheta_jvari_monastery_on_hill", "photo-tall", 600, 800, {
      en: "Jvari Monastery crowns the wooded hill above the meeting of the Aragvi and Mtkvari rivers.",
      it: "Il monastero di Jvari svetta sulla collina boscosa sopra la confluenza dei fiumi Aragvi e Mtkvari.",
    }),
    photo("mtskheta_christ_fresco", "photo-tall", 600, 800, {
      en: "Christ enthroned, painted in a tall arched recess in Mtskheta.",
      it: "Cristo in trono, dipinto in un’alta nicchia ad arco a Mtskheta.",
    }),
    photo("mtskheta_church_red_cross", "photo-wide", 800, 600, {
      en: "A red cross stands out against the sunlit stone beside an arched church entrance in Mtskheta.",
      it: "Una croce rossa spicca sulla pietra al sole accanto all’ingresso ad arco di una chiesa di Mtskheta.",
    }),
  ],
};
