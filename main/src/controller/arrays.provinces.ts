/* Author: Sotiris Konstantis */

import Prefectures from "../model/enums.prefectures.js";
import Provinces from "../model/enums.provinces.js";
import Epikratia from "../model/enums.epikratia.js";

const provinces: string[][] = [];

provinces[Provinces.ΔΥΤΙΚΉΣ_ΣΤΕΡΕΆΣ] = [
  Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
  Prefectures[Prefectures.ΕΥΡΥΤΑΝΊΑΣ],
];

provinces[Provinces.ΔΥΤΙΚΉΣ_ΠΕΛΟΠΟΝΉΣΟΥ] = [
  Prefectures[Prefectures.ΗΛΕΊΑΣ],
  Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
];


provinces[Provinces.ΒΟΡΕΊΟΥ_ΙΟΝΊΟΥ] = [
  Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ],
  Prefectures[Prefectures.ΛΕΥΚΆΔΑΣ],
];

provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΣΤΕΡΕΆΣ] = [
  Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
  Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
];


provinces[Provinces.ΝΟΤΊΟΥ_ΙΟΝΊΟΥ] = [
  Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
  Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ],
];

provinces[Provinces.ΑΤΤΙΚΉΣ] = [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]];

provinces[Provinces.ΣΤΕΡΕΆΣ_ΕΛΛΆΔΑΣ] = [
  Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  Prefectures[Prefectures.ΕΥΡΥΤΑΝΊΑΣ],
  Prefectures[Prefectures.ΦΩΚΊΔΑΣ],
  Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
];

provinces[Provinces.ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ] = [
  Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ],
  Prefectures[Prefectures.ΗΜΑΘΊΑΣ],
  Prefectures[Prefectures.ΚΙΛΚΊΣ],
  Prefectures[Prefectures.ΠΈΛΛΑΣ],
  Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
  Prefectures[Prefectures.ΣΕΡΡΏΝ],
  Prefectures[Prefectures.ΘΕΣΣΑΛΟΝΊΚΗΣ],
];

provinces[Provinces.ΚΡΉΤΗΣ] = [
  Prefectures[Prefectures.ΧΑΝΊΩΝ],
  Prefectures[Prefectures.ΗΡΑΚΛΕΊΟΥ],
  Prefectures[Prefectures.ΛΑΣΙΘΊΟΥ],
  Prefectures[Prefectures.ΡΕΘΎΜΝΗΣ],
];

provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ_ΚΑΙ_ΘΡΆΚΗΣ] = [
  Prefectures[Prefectures.ΔΡΆΜΑΣ],
  Prefectures[Prefectures.ΈΒΡΟΥ],
  Prefectures[Prefectures.ΚΑΒΆΛΑΣ],
  Prefectures[Prefectures.ΡΟΔΌΠΗΣ],
  Prefectures[Prefectures.ΞΆΝΘΗΣ],
];

provinces[Provinces.ΗΠΕΊΡΟΥ] = [
  Prefectures[Prefectures.ΆΡΤΑΣ],
  Prefectures[Prefectures.ΙΩΑΝΝΊΝΩΝ],
  Prefectures[Prefectures.ΠΡΈΒΕΖΑΣ],
  Prefectures[Prefectures.ΘΕΣΠΡΩΤΊΑΣ],
];

provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ] = [
  Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ],
  Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
  Prefectures[Prefectures.ΛΕΥΚΆΔΑΣ],
  Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ],
];

provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ] = [
  Prefectures[Prefectures.ΧΊΟΥ],
  Prefectures[Prefectures.ΛΈΣΒΟΥ],
  Prefectures[Prefectures.ΣΆΜΟΥ],
];

provinces[Provinces.ΠΕΛΟΠΟΝΝΉΣΟΥ] = [
  Prefectures[Prefectures.ΑΡΚΑΔΊΑΣ],
  Prefectures[Prefectures.ΑΡΓΟΛΊΔΑΣ],
  Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ],
  Prefectures[Prefectures.ΛΑΚΩΝΊΑΣ],
  Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
];

provinces[Provinces.ΝΟΤΊΟΥ_ΑΙΓΑΊΟΥ] = [
  Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ],
  Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ],
];

provinces[Provinces.ΘΕΣΣΑΛΊΑΣ] = [
  Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
];

provinces[Provinces.ΔΥΤΙΚΉΣ_ΕΛΛΆΔΑΣ] = [
  Prefectures[Prefectures.ΑΧΑΐΑΣ],
  Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
  Prefectures[Prefectures.ΗΛΕΊΑΣ],
];

provinces[Provinces.ΔΥΤΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ] = [
  Prefectures[Prefectures.ΦΛΏΡΙΝΑΣ],
  Prefectures[Prefectures.ΓΡΕΒΕΝΏΝ],
  Prefectures[Prefectures.ΚΑΣΤΟΡΙΆΣ],
  Prefectures[Prefectures.ΚΟΖΆΝΗΣ],
];

provinces[Provinces.ΑΓΊΟΥ_ΌΡΟΥΣ] = [Prefectures[Prefectures.ΑΓΊΟΥ_ΌΡΟΥΣ]];

export default provinces;
