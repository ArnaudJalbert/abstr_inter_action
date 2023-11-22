const DescriptionArtworkMatch = require("../entities/description_artwork_match");
const MatchesList = require("../entities/matches_list");
// Artists constants
const artists = { afKlint: "Hilma Af Klint" };

// Artwork collections
const tenLargestCollection = "The Ten Largest";
const atomSeriesPartACollection = "Atom Series Part A";
const atomSeriesPartBCollection = "Atom Series Part B";
const atomSeriesPartCCollection = "Atom Series Part C";
const atomSeriesPartDCollection = "Atom Series Part D";
const atomSeriesPartECollection = "Atom Series Part E";

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
    atomSeriesPartBCollection,
    "./assets/images/atom_series/No.5.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no5);

  const no6 = new DescriptionArtworkMatch(
    afKlint,
    "When the atom is at rest on the etheric plane, its center absorbs the energy that is stored there. When the body is in harmony, energy radiates outward from the center of the atom.",
    "No. 6",
    atomSeriesPartBCollection,
    "./assets/images/atom_series/No.6.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no6);

  const no7 = new DescriptionArtworkMatch(
    afKlint,
    "The atom is both limited and capable of development. When the atom expands on the etheric plane, the physical part of the earthly atom begins to glow.",
    "No. 7",
    atomSeriesPartBCollection,
    "./assets/images/atom_series/No.7.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no7);

  const no8 = new DescriptionArtworkMatch(
    afKlint,
    "On the etheric plane, the atom alternates constantly between the and activity, At rest it retreats inward. This causes the terrestrial atom to emanate energy.",
    "No. 8",
    atomSeriesPartBCollection,
    "./assets/images/atom_series/No.8.jpeg",
  );
  atomSeriesPartBMatches.addMatch(no8);

  return atomSeriesPartBMatches;
}

function getAtomSeriesPartCCollection() {
  const atomSeriesPartCMatches = new MatchesList();
  const afKlint = artists["afKlint"];

  const no9 = new DescriptionArtworkMatch(
    afKlint,
    "The atom has 4 degrees of development, which it is able to attain in the body.",
    "No. 9",
    atomSeriesPartCCollection,
    "./assets/images/atom_series/No.9.jpeg",
  );
  atomSeriesPartCMatches.addMatch(no9);

  const no10 = new DescriptionArtworkMatch(
    afKlint,
    "The atom has 4 degrees of vigor, which are dependant on one another.",
    "No. 10",
    atomSeriesPartCCollection,
    "./assets/images/atom_series/No.10.jpeg",
  );
  atomSeriesPartCMatches.addMatch(no10);

  const no11 = new DescriptionArtworkMatch(
    afKlint,
    "The atom has the capacity to emit the resistance inherent in matter.",
    "No. 11",
    atomSeriesPartCCollection,
    "./assets/images/atom_series/No.11.jpeg",
  );
  atomSeriesPartCMatches.addMatch(no11);

  const no12 = new DescriptionArtworkMatch(
    afKlint,
    'The atom’s strength increases as it senses and admits its dependence upon Divine energy, it is “inexhaustible and incomprehensible life itself”.',
    "No. 12",
    atomSeriesPartCCollection,
    "./assets/images/atom_series/No.12.jpeg",
  );
  atomSeriesPartCMatches.addMatch(no12);

  return atomSeriesPartCMatches;
}

function getAtomSeriesPartDCollection() {
  const atomSeriesPartDMatches = new MatchesList();
  const afKlint = artists["afKlint"];

  const no13 = new DescriptionArtworkMatch(
    afKlint,
    "The atom is on its way to freely and deliberately transform itself in observance with the Lord Jesus, who has paved the way for all humanity.",
    "No. 13",
    atomSeriesPartDCollection,
    "./assets/images/atom_series/No.13.jpeg",
  );
  atomSeriesPartDMatches.addMatch(no13);

  const no14 = new DescriptionArtworkMatch(
    afKlint,
    'The atom has found the first means to release it from downward-pulling forces; the are: “Reliability and Dutifulness".',
    "No. 14",
    atomSeriesPartDCollection,
    "./assets/images/atom_series/No.14.jpeg",
  );
  atomSeriesPartDMatches.addMatch(no14);

  const no15 = new DescriptionArtworkMatch(
    afKlint,
    'The atom has found the second means, “Order and Cleanliness,” which release it from downward-pulling forces.',
    "No. 15",
    atomSeriesPartDCollection,
    "./assets/images/atom_series/No.15.jpeg",
  );
  atomSeriesPartDMatches.addMatch(no15);

  const no16 = new DescriptionArtworkMatch(
    afKlint,
    "The atom has found that Patience and Forbearance are absolute conditions for progress.",
    "No. 16",
    atomSeriesPartDCollection,
    "./assets/images/atom_series/No.16.jpeg",
  );
  atomSeriesPartDMatches.addMatch(no16);

  return atomSeriesPartDMatches;
}

function getAtomSeriesPartECollection() {
  const atomSeriesPartEMatches = new MatchesList();
  const afKlint = artists["afKlint"];

  const no17 = new DescriptionArtworkMatch(
    afKlint,
    "The atom has discovered the 4th quality, which will advance humanity. Passionate thirst for activity and Stubborn tenacity.",
    "No. 17",
    atomSeriesPartECollection,
    "./assets/images/atom_series/No.17.jpeg",
  );
  atomSeriesPartEMatches.addMatch(no17);

  const no18 = new DescriptionArtworkMatch(
    afKlint,
    "The atom finds within itself Truth and Justice.",
    "No. 18",
    atomSeriesPartECollection,
    "./assets/images/atom_series/No.18.jpeg",
  );
  atomSeriesPartEMatches.addMatch(no18);

  const no19 = new DescriptionArtworkMatch(
    afKlint,
    "The atom releases Energy and pushes back Weakness.",
    "No. 19",
    atomSeriesPartECollection,
    "./assets/images/atom_series/No.19.jpeg",
  );
  atomSeriesPartEMatches.addMatch(no19);

  const no20 = new DescriptionArtworkMatch(
    afKlint,
    "The atom’s innocence is protected by All that is sacred and compassionate.",
    "No. 20",
    atomSeriesPartECollection,
    "./assets/images/atom_series/No.20.jpeg",
  );
  atomSeriesPartEMatches.addMatch(no20);

  return atomSeriesPartEMatches;
}

module.exports = {
  getTenLargestCollection,
  getAtomSeriesPartACollection,
  getAtomSeriesPartBCollection,
  getAtomSeriesPartCCollection,
  getAtomSeriesPartDCollection,
  getAtomSeriesPartECollection,
};
