// Photo order is shared by the desktop mosaic, mobile gallery and viewer.
// Each basename pairs the existing WebP thumbnail with its full-resolution JPEG.
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
  id: "japan",
  directory: "assets/images/travel/Japan/",
  title: { en: "Japan", it: "Giappone" },
  description: {
    en: "From Tokyo’s museums and light installations to the lakes around Mount Fuji, this gallery follows a late-autumn trip through Japan. Along the way are the Great Buddhas of Kamakura and Nara, Osaka Castle, the gardens and temples of Kyoto, and a few meals worth remembering.",
    it: "Dai musei e dalle installazioni luminose di Tokyo ai laghi attorno al monte Fuji, questa galleria racconta un viaggio in Giappone sul finire dell’autunno. Lungo il percorso, i Grandi Buddha di Kamakura e Nara, il castello di Osaka, i giardini e i templi di Kyoto e qualche piatto da ricordare.",
  },
  photos: [
    // Mount Fuji and the Great Buddha of Kamakura
    photo("chureito_pagoda_and_mount_fuji", "photo-large", 600, 800, {
      en: "The red tiers of Chureito Pagoda frame Mount Fuji above Fujiyoshida.",
      it: "I tetti sovrapposti della pagoda Chureito incorniciano il monte Fuji sopra Fujiyoshida.",
    }),
    photo("mount_fuji_snowy_upper_slopes", "photo-tall", 600, 800, {
      en: "Snow traces the upper slopes of Mount Fuji beneath a bank of clouds.",
      it: "La neve disegna linee sui pendii superiori del monte Fuji, sotto una distesa di nuvole.",
    }),
    photo("mount_fuji_beyond_reedy_shore", "photo-tall", 600, 800, {
      en: "Mount Fuji rises behind a wooded ridge and a lakeshore lined with dry reeds.",
      it: "Il monte Fuji si alza oltre una dorsale boscosa e una riva bordata di canne secche.",
    }),
    photo("mount_fuji_across_blue_lake", "photo-tall", 600, 800, {
      en: "Mount Fuji seen across a blue lake, with low clouds along the horizon.",
      it: "Il monte Fuji visto oltre le acque azzurre di un lago, con nuvole basse all’orizzonte.",
    }),
    photo("kamakura_kotoku_in_great_buddha", "photo-tall", 600, 800, {
      en: "The bronze Great Buddha sits outdoors at Kotoku-in in Kamakura.",
      it: "Il Grande Buddha in bronzo siede all’aperto al tempio Kotoku-in di Kamakura.",
    }),

    // Tokyo’s shrines, museum displays and pop culture
    photo("tokyo_ueno_toshogu_gilded_gate", "photo-tall", 600, 800, {
      en: "The gilded gate of Ueno Toshogu Shrine in Tokyo.",
      it: "Il portale dorato del santuario Ueno Toshogu a Tokyo.",
    }),
    photo("japanese_robed_figure_print", "photo-tall", 600, 800, {
      en: "A Japanese print of a figure in patterned robes beneath a branch with autumn leaves.",
      it: "Una stampa giapponese raffigurante una figura in abiti decorati sotto un ramo dalle foglie autunnali.",
    }),
    photo("red_buddhist_deity_on_lotus", "photo-tall", 600, 800, {
      en: "A red, many-armed Buddhist deity sits on a lotus pedestal in a museum display.",
      it: "In una vetrina museale, una divinità buddhista rossa dalle molte braccia siede su un piedistallo a forma di loto.",
    }),
    photo("mario_and_toad_travel_display", "photo-tall", 600, 800, {
      en: "Mario and Toad pose beside a sticker-covered suitcase.",
      it: "Mario e Toad posano accanto a una valigia ricoperta di adesivi.",
    }),
    photo("assorted_sushi_platter", "photo-wide", 800, 600, {
      en: "A platter of assorted sushi with wasabi and pickled ginger.",
      it: "Un assortimento di sushi con wasabi e zenzero marinato.",
    }),
    photo("pokemon_cafe_pikachu_tail_and_gengar_cup", "photo-wide", 800, 600, {
      en: "A Pikachu-tail dessert and a glowing Gengar cup at the Pokémon Café.",
      it: "Un dolce a forma di coda di Pikachu e un bicchiere luminoso di Gengar al Pokémon Café.",
    }),
    photo("pokemon_cafe_chef_pikachu", "photo-tall", 600, 800, {
      en: "Pikachu appears in a chef’s hat and jacket at the Pokémon Café.",
      it: "Pikachu fa la sua comparsa al Pokémon Café con cappello e giacca da cuoco.",
    }),
    photo("teamlab_floating_flower_garden", "photo-tall", 600, 800, {
      en: "A hand reaches toward orchids suspended in teamLab’s Floating Flower Garden.",
      it: "Una mano si protende verso le orchidee sospese nel Floating Flower Garden di teamLab.",
    }),
    photo("odaiba_unicorn_gundam_statue", "photo-tall", 600, 800, {
      en: "The full-size Unicorn Gundam towers over visitors outside DiverCity Tokyo Plaza in Odaiba.",
      it: "L’Unicorn Gundam a grandezza naturale svetta sui visitatori davanti al DiverCity Tokyo Plaza, a Odaiba.",
    }),
    photo("mirrored_room_with_glowing_spheres", "photo-tall", 600, 800, {
      en: "Purple and blue spheres multiply in the reflections of an immersive light installation.",
      it: "Sfere viola e blu si moltiplicano nei riflessi di un’installazione luminosa immersiva.",
    }),

    // Gardens and temple details
    photo("autumn_garden_pond", "photo-large", 600, 800, {
      en: "Red and gold maples frame a pond in a Japanese garden.",
      it: "Aceri rossi e dorati incorniciano uno stagno in un giardino giapponese.",
    }),
    photo("raked_gravel_garden_curves", "photo-tall", 600, 800, {
      en: "Curved lines in raked gravel follow the edge of a mossy garden bed.",
      it: "Linee curve tracciate nella ghiaia seguono il bordo di un’aiuola coperta di muschio.",
    }),
    photo("stone_jizo_with_flower_offering", "photo-tall", 600, 800, {
      en: "A seated stone Jizo holds a bouquet, with a yellow fruit left at its feet.",
      it: "Una statua di Jizo seduto tiene un mazzo di fiori, con un frutto giallo deposto ai suoi piedi.",
    }),
    photo("fasting_buddha_statue", "photo-tall", 600, 800, {
      en: "A sculpture of the fasting Buddha shows his ribs and sunken cheeks as he sits in meditation.",
      it: "Una scultura del Buddha in digiuno ne mostra le costole e le guance scavate mentre siede in meditazione.",
    }),
    photo("loop_handled_ornament_among_bamboo", "photo-tall", 600, 800, {
      en: "A small reddish ornament with a loop handle rests on a stone among bamboo stems.",
      it: "Un piccolo oggetto rossastro con un manico ad anello poggia su una pietra tra i fusti di bambù.",
    }),

    // Displays and evening lights, then Osaka
    photo("instant_noodle_lid_display", "photo-tall", 600, 800, {
      en: "Instant noodle lids on display, including packages illustrated with manga and anime characters.",
      it: "Una collezione di coperchi di noodles istantanei, alcuni illustrati con personaggi di manga e anime.",
    }),
    photo("school_of_fish_wall_relief", "photo-tall", 600, 800, {
      en: "A school of sculpted fish circles across a blue wall panel.",
      it: "Un banco di pesci scolpiti descrive un cerchio su un pannello blu.",
    }),
    photo("night_garden_projected_light_on_rocks", "photo-wide", 800, 600, {
      en: "Green and gold projections move across large angular rocks in a nighttime garden installation.",
      it: "Proiezioni verdi e dorate attraversano grandi rocce spigolose in un’installazione notturna in giardino.",
    }),
    photo("osaka_castle_from_below", "photo-tall", 600, 800, {
      en: "The white walls and gilded roof details of Osaka Castle rise above its stone ramparts.",
      it: "Le pareti bianche e i dettagli dorati dei tetti del castello di Osaka svettano sopra i bastioni in pietra.",
    }),
    photo("osaka_kaiyukan_japanese_spider_crab", "photo-tall", 600, 800, {
      en: "A Japanese spider crab stands on the gravel at Osaka Aquarium Kaiyukan.",
      it: "Un granchio ragno giapponese poggia sulla ghiaia dell’acquario Kaiyukan di Osaka.",
    }),
    photo("night_garden_illuminated_trees", "photo-tall", 600, 800, {
      en: "Blue and amber light picks out the branches of trees in a garden after dark.",
      it: "Luci blu e ambrate mettono in risalto i rami degli alberi in un giardino dopo il tramonto.",
    }),
    photo("night_garden_magenta_light_sculpture", "photo-tall", 600, 800, {
      en: "Magenta light outlines a group of upright, branching forms against the night sky.",
      it: "La luce magenta delinea un gruppo di strutture verticali e ramificate contro il cielo notturno.",
    }),

    // Nara and a quiet pond
    photo("nara_todaiji_great_buddha", "photo-tall", 600, 800, {
      en: "The Great Buddha inside the main hall of Todai-ji in Nara, with one hand raised.",
      it: "Il Grande Buddha nella sala principale del Todai-ji a Nara, con una mano alzata.",
    }),
    photo("nara_park_deer_selfie", "photo-tall", 600, 800, {
      en: "A close-up selfie with a deer in Nara Park.",
      it: "Un selfie a distanza ravvicinata con un cervo nel parco di Nara.",
    }),
    photo("wooden_buddhist_guardian_statue", "photo-tall", 600, 800, {
      en: "A carved wooden Buddhist guardian raises an open palm in a gallery.",
      it: "In una sala espositiva, un guardiano buddhista scolpito nel legno alza la mano con il palmo aperto.",
    }),
    photo("koi_in_narrow_pond", "photo-tall", 600, 800, {
      en: "Red and white koi swim through a narrow pond bordered by rocks and greenery.",
      it: "Carpe koi rosse e bianche nuotano in uno stretto stagno bordato da rocce e piante.",
    }),

    // Kyoto gardens, shrines and temples
    photo("kyoto_ryoanji_rock_garden", "photo-wide", 800, 600, {
      en: "Clusters of stones interrupt the raked gravel at the Ryoan-ji rock garden in Kyoto.",
      it: "Gruppi di pietre interrompono la ghiaia rastrellata nel giardino secco del Ryoan-ji, a Kyoto.",
    }),
    photo("garden_rooftops_and_distant_hills", "photo-wide", 800, 600, {
      en: "Tiled rooftops and carefully shaped trees fill a garden below distant hills.",
      it: "Tetti di tegole e alberi potati con cura riempiono un giardino ai piedi di colline lontane.",
    }),
    photo("kyoto_kinkakuji_golden_pavilion_reflection", "photo-large", 600, 800, {
      en: "Kinkaku-ji’s Golden Pavilion is reflected in the pond beneath an overcast Kyoto sky.",
      it: "Il Padiglione d’Oro del Kinkaku-ji si riflette nello stagno sotto il cielo nuvoloso di Kyoto.",
    }),
    photo("lantern_lit_bamboo_path", "photo-tall", 600, 800, {
      en: "Low lights trace a path through a tall bamboo grove after dark.",
      it: "Luci basse segnano un sentiero tra alti bambù dopo il tramonto.",
    }),
    photo("kyoto_fushimi_inari_torii_steps", "photo-tall", 600, 800, {
      en: "Vermilion torii gates line a stone stairway at Fushimi Inari Shrine in Kyoto.",
      it: "Portali torii vermigli fiancheggiano una scalinata in pietra al santuario Fushimi Inari di Kyoto.",
    }),
    photo("raked_gravel_and_pruned_pines", "photo-tall", 600, 800, {
      en: "Parallel lines in a gravel garden curve around moss and carefully pruned pines.",
      it: "Linee parallele tracciate nella ghiaia curvano attorno al muschio e ai pini potati con cura.",
    }),
    photo("shrine_lanterns_at_night", "photo-tall", 600, 800, {
      en: "Rows of white lanterns light up a shrine pavilion at night.",
      it: "File di lanterne bianche illuminano di notte il padiglione di un santuario.",
    }),
    photo("kyoto_kiyomizudera_veranda_in_autumn", "photo-wide", 800, 600, {
      en: "The wooden veranda of Kiyomizu-dera overlooks autumn foliage and the city of Kyoto.",
      it: "La terrazza in legno del Kiyomizu-dera si affaccia sui colori autunnali e sulla città di Kyoto.",
    }),
    photo("soba_and_tempura_dinner", "photo-wide", 800, 600, {
      en: "Soba noodles and a basket of tempura served at a wooden counter.",
      it: "Noodles di soba e un cestino di tempura serviti a un bancone di legno.",
    }),
  ],
};
