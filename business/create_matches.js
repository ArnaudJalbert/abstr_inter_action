const DescriptionArtworkMatch = require("../entities/description_artwork_match");
const MatchesList = require("../entities/matches_list");
// Artists constants
const artists = { afKlint: "Hilma Af Klint" };

// Artwork collections
const tenLargestCollection = "The Ten Largest";
const atomSeriesPartACollection = "Atom Series Part A";

function getTenLargestCollection() {
  // Create Matches for the Ten Largest by Hilma Af Klint
  // https://artblart.com/tag/hilma-af-klint-the-atom-series/

  // Matches List
  const tenLargestSeriesMatches = new MatchesList();

  const afKlint = artists["afKlint"];
  const no1 = new DescriptionArtworkMatch(
    afKlint,
    "Childhood",
    "No. 1",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-1-barnaldern_1907_modernamuseet_press-1.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no1);
  const no2 = new DescriptionArtworkMatch(
    afKlint,
    "Childhood",
    "No. 2",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-2-barnaldern_1907_modernamuseet_press-1.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no2);
  const no3 = new DescriptionArtworkMatch(
    afKlint,
    "Youth",
    "No. 3",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-3-ynglingaldern_1907_modernamuseet_press-1.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no3);
  const no4 = new DescriptionArtworkMatch(
    afKlint,
    "Youth",
    "No. 4",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-4-ynglingaldern_1907_modernamuseet_press.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no4);
  const no5 = new DescriptionArtworkMatch(
    afKlint,
    "Adulthood",
    "No. 5",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-5-mannaldern_1907_modernamuseet_press.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no5);
  const no6 = new DescriptionArtworkMatch(
    afKlint,
    "Adulthood",
    "No. 6",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_the-ten-largest-no-6_1907_f_albin-dahlstrom_modernamuseet_press.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no6);
  const no7 = new DescriptionArtworkMatch(
    afKlint,
    "Adulthood",
    "No. 7",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-7-mannaldern_1907_modernamuseet_press.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no7);
  const no8 = new DescriptionArtworkMatch(
    afKlint,
    "Adulthood",
    "No. 8",
    tenLargestCollection,
    "https://artblart.files.wordpress.com/2020/07/af-klint-hilma_de-tio-strsta-nr-8-mannaldern_1907_modernamuseet_press.jpg?w=1300",
  );
  tenLargestSeriesMatches.addMatch(no8);

  return tenLargestSeriesMatches;
}

function getAtomSeriesPartACollection() {
  const atomSeriesPartAMatches = new MatchesList();
  const afKlint = artists["afKlint"];

  const no1 = new DescriptionArtworkMatch(
    afKlint,
    "The midpoint of the universe consists of innocence\n1. Uncompromising truth 2. Dignity 3. Humility 4. Mercy.\n4 times Enlarged",
    "No. 1",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.1.jpeg",
  );
  atomSeriesPartAMatches.addMatch(no1);

  const no2 = new DescriptionArtworkMatch(
    afKlint,
    "Every atom has its own midpoint, but each midpoint is directly connected to the midpoint of the universe.",
    "No. 2",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.2.jpeg",
  );
  atomSeriesPartAMatches.addMatch(no2);

  const no3 = new DescriptionArtworkMatch(
    afKlint,
    "The body must be mediated by going to its center and drawing these new forces.",
    "No. 3",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.3.jpeg",
  );
  atomSeriesPartAMatches.addMatch(no3);

  const no4 = new DescriptionArtworkMatch(
    afKlint,
    "Through its longing to create ever more beautiful forms first on the etheric plan, and then in matter, the body becomes capable of being penetrated by light.",
    "No. 4",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.4.jpeg",
  );
  atomSeriesPartAMatches.addMatch(no4);

  return atomSeriesPartAMatches;
}

function getAtomSeriesPartBCollection() {
  const atomSeriesPartBMatches = new MatchesList();
  const afKlint = artists["afKlint"];

  const no5 = new DescriptionArtworkMatch(
    afKlint,
    "The body is capable of rising above its earthly form by listening to the superphysical powers.",
    "No. 5",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.5.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no5);

  const no6 = new DescriptionArtworkMatch(
    afKlint,
    "When the atom is at rest on the etheric plane, its center absorbs the energy that is stored there. When the body is in harmony, energy radiates outward from the center of the atom.",
    "No. 6",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.6.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no6);

  const no7 = new DescriptionArtworkMatch(
    afKlint,
    "The atom is both limited and capable of development. When the atom expands on the etheric plane, the physical part of the earthly atom begins to glow.",
    "No. 7",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.7.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no7);

  const no8 = new DescriptionArtworkMatch(
    afKlint,
    "On the etheric plane, the atom alternates constantly between the and activity, At rest it retreats inward. This causes the terrestrial atom to emanate energy.",
    "No. 8",
    atomSeriesPartACollection,
    "./assets/images/atom_series/No.8.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no8);

  return atomSeriesPartBMatches;
}

module.exports = {
  getTenLargestCollection,
  getAtomSeriesPartACollection,
  getAtomSeriesPartBCollection,
};
