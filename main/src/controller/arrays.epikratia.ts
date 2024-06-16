/* Author: Sotiris Konstantis */

import Provinces from "../model/enums.provinces.js";
import Epikratia from "../model/enums.epikratia.js";
import provinces from "./arrays.provinces.js";

const epikratia: string[][] = [];

epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ] = [
  ...provinces[Provinces.ΑΓΊΟΥ_ΌΡΟΥΣ],
  ...provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ_ΚΑΙ_ΘΡΆΚΗΣ],
  ...provinces[Provinces.ΑΤΤΙΚΉΣ],
  ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΕΛΛΆΔΑΣ],
  ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ],
  ...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ],
  ...provinces[Provinces.ΗΠΕΊΡΟΥ],
  ...provinces[Provinces.ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ],
  ...provinces[Provinces.ΚΡΉΤΗΣ],
  ...provinces[Provinces.ΝΟΤΊΟΥ_ΑΙΓΑΊΟΥ],
  ...provinces[Provinces.ΠΕΛΟΠΟΝΝΉΣΟΥ],
  ...provinces[Provinces.ΣΤΕΡΕΆΣ_ΕΛΛΆΔΑΣ],
  ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ],
];

export default epikratia;
