/* Author: Sotiris Konstantis */

import provinces from "./arrays.provinces.js";
import epikratia from "./arrays.epikratia.js";

import Alerts from "../model/classes.alert.js";
import Fire from "../model/enums.fire.js";
import Flood from "../model/enums.flood.js";
import Type from "../model/enums.type.js";
import Prefectures from "../model/enums.prefectures.js";
import Provinces from "../model/enums.provinces.js";
import Covid19 from "../model/enums.covid19.js"
import Earthquake from "../model/enums.earthquake.js";
import ExtremeWeather from "../model/enums.extremeWeather.js";
import Volcano from "../model/enums.volcano.js";
import Landslide from "../model/enums.landslides.js";
import Tsunami from "../model/enums.tsunami.js";
import Epikratia from "../model/enums.epikratia.js";

//todo: more prefectures and provinces

Alerts.add(
  new Date("2024-04-23"),
  [Fire[Fire.WILDFIRE], Flood[Flood.RIVER_BULWARK_BREAK]],
  [Type[Type.EVACUATION], Type[Type.EXCERSISE]],
  [...provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS], Prefectures[Prefectures.ANATOLIKIS_ATTIKIS]],
  "Evacuate now! This is a test. A major fire has been observed near your area. Evacuate towards the south now. Leave your belongings behind. This is a test.",
);

const dataArray = Alerts.array;
export default dataArray;