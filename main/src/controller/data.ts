/* Author: Sotiris Konstantis */

import Alerts from "./classes.alert.js";
import Fire from "./enums.fire.js";
import Flood from "./enums.flood.js";
import Type from "./enums.type.js";
import Prefectures from "./enums.prefectures.js";
import provinces from "./arrays.provinces.js";
import Provinces from "./enums.provinces.js";

//todo: import all, more prefectures and provinces

console.log(provinces[Provinces.DYTIKIS_MAKEDONIAS].map((prefecture) => prefecture));

Alerts.add(
  new Date("2022-03-25"),
  [Fire[Fire.RESIDENTIAL_FIRE], Flood[Flood.RIVER_BULWARK_BREAK]],
  [Type[Type.EVACUATION], Type[Type.EXCERSISE]],
  [...provinces[Provinces.DYTIKIS_MAKEDONIAS], Prefectures[Prefectures.ATTIKIS]],
  "Evacuate now! This is a test.",
);

const dataArray = Alerts.array;
export default dataArray;