/* Author: Sotiris Konstantis */

import Provinces from "../model/enums.provinces.js";
import Epikratia from "../model/enums.epikratia.js";
import provinces from "./arrays.provinces.js";

const epikratia: string[][] = [];

epikratia[Epikratia.EPIKRATIA] = [
  ...provinces[Provinces.AGIOU_OROUS],
  ...provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS],
  ...provinces[Provinces.ATTIKIS],
  ...provinces[Provinces.DITIKIS_ELLADAS],
  ...provinces[Provinces.DITIKIS_MAKEDONIAS],
  ...provinces[Provinces.IONION_NISON],
  ...provinces[Provinces.IPIROU],
  ...provinces[Provinces.KENTRIKIS_MAKEDONIAS],
  ...provinces[Provinces.KRITIS],
  ...provinces[Provinces.NOTIOU_EGEOU],
  ...provinces[Provinces.PELOPONNISOU],
  ...provinces[Provinces.STEREAS_ELLADAS],
  ...provinces[Provinces.THESSALIAS],
  ...provinces[Provinces.VORIOU_EGEOU],
];

export default epikratia;
