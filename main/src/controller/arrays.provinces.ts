/* Author: Sotiris Konstantis */

import Prefectures from "../model/enums.prefectures.js";
import Provinces from "../model/enums.provinces.js";
import Epikratia from "../model/enums.epikratia.js";

const provinces: string[][] = [];

provinces[Provinces.DITIKIS_STEREAS] = [
  Prefectures[Prefectures.ETOLOAKARNANIAS],
  Prefectures[Prefectures.EVRITANIAS],
];

provinces[Provinces.DITIKIS_PELOPONISSOU] = [
  Prefectures[Prefectures.ILIAS],
  Prefectures[Prefectures.MESSINIAS],
];


provinces[Provinces.VORIOU_IONIOU] = [
  Prefectures[Prefectures.KERKIRAS],
  Prefectures[Prefectures.LEFKADAS],
];

provinces[Provinces.ANATOLIKIS_STEREAS] = [
  Prefectures[Prefectures.EVIAS],
  Prefectures[Prefectures.VIOTIAS],
  Prefectures[Prefectures.FTHIOTIDAS],
];


provinces[Provinces.NOTIOU_IONIOU] = [
  Prefectures[Prefectures.KEFALLINIAS],
  Prefectures[Prefectures.ZAKINTHOU],
];

provinces[Provinces.ATTIKIS] = [Prefectures[Prefectures.ATTIKIS]];

provinces[Provinces.STEREAS_ELLADAS] = [
  Prefectures[Prefectures.EVIAS],
  Prefectures[Prefectures.EVRITANIAS],
  Prefectures[Prefectures.FOKIDAS],
  Prefectures[Prefectures.FTHIOTIDAS],
  Prefectures[Prefectures.VIOTIAS],
];

provinces[Provinces.KENTRIKIS_MAKEDONIAS] = [
  Prefectures[Prefectures.CHALKIDIKIS],
  Prefectures[Prefectures.IMATHIAS],
  Prefectures[Prefectures.KILKIS],
  Prefectures[Prefectures.PELLAS],
  Prefectures[Prefectures.PIERIAS],
  Prefectures[Prefectures.SERRON],
  Prefectures[Prefectures.THESSALONIKIS],
];

provinces[Provinces.KRITIS] = [
  Prefectures[Prefectures.CHANION],
  Prefectures[Prefectures.IRAKLIOU],
  Prefectures[Prefectures.LASITHIOU],
  Prefectures[Prefectures.RETHIMNIS],
];

provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS] = [
  Prefectures[Prefectures.DRAMAS],
  Prefectures[Prefectures.EVROU],
  Prefectures[Prefectures.KAVALAS],
  Prefectures[Prefectures.RODOPIS],
  Prefectures[Prefectures.XANTHIS],
];

provinces[Provinces.IPIROU] = [
  Prefectures[Prefectures.ARTAS],
  Prefectures[Prefectures.IOANNINON],
  Prefectures[Prefectures.PREVEZAS],
  Prefectures[Prefectures.THESPROTIAS],
];

provinces[Provinces.IONION_NISON] = [
  Prefectures[Prefectures.KERKIRAS],
  Prefectures[Prefectures.KEFALLINIAS],
  Prefectures[Prefectures.LEFKADAS],
  Prefectures[Prefectures.ZAKINTHOU],
];

provinces[Provinces.VORIOU_EGEOU] = [
  Prefectures[Prefectures.CHIOU],
  Prefectures[Prefectures.LESVOU],
  Prefectures[Prefectures.SAMOU],
];

provinces[Provinces.PELOPONNISOU] = [
  Prefectures[Prefectures.ARKADIAS],
  Prefectures[Prefectures.ARGOLIDAS],
  Prefectures[Prefectures.KORINTHIAS],
  Prefectures[Prefectures.LAKONIAS],
  Prefectures[Prefectures.MESSINIAS],
];

provinces[Provinces.NOTIOU_EGEOU] = [
  Prefectures[Prefectures.KIKLADON],
  Prefectures[Prefectures.DODEKANISOU],
];

provinces[Provinces.THESSALIAS] = [
  Prefectures[Prefectures.KARDITSAS],
  Prefectures[Prefectures.LARISAS],
  Prefectures[Prefectures.MAGNISIAS],
  Prefectures[Prefectures.TRIKALON],
];

provinces[Provinces.DITIKIS_ELLADAS] = [
  Prefectures[Prefectures.ACHAIAS],
  Prefectures[Prefectures.ETOLOAKARNANIAS],
  Prefectures[Prefectures.ILIAS],
];

provinces[Provinces.DITIKIS_MAKEDONIAS] = [
  Prefectures[Prefectures.FLORINAS],
  Prefectures[Prefectures.GREVENON],
  Prefectures[Prefectures.KASTRORIAS],
  Prefectures[Prefectures.KOZANIS],
];

provinces[Provinces.AGIOU_OROUS] = [Prefectures[Prefectures.AGIOU_OROUS]];

export default provinces;
