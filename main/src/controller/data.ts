/* Author: Sotiris Konstantis */

import provinces from "./arrays.provinces.js";
import epikratia from "./arrays.epikratia.js";

import Alerts from "../model/classes.alert.js";
import Fire from "../model/enums.fire.js";
import Flood from "../model/enums.flood.js";
import Type from "../model/enums.type.js";
import Prefectures from "../model/enums.prefectures.js";
import Provinces from "../model/enums.provinces.js";
import Covid19 from "../model/enums.covid19.js";
import Earthquake from "../model/enums.earthquake.js";
import ExtremeWeather from "../model/enums.extremeWeather.js";
import Volcano from "../model/enums.volcano.js";
import Landslide from "../model/enums.landslides.js";
import Tsunami from "../model/enums.tsunami.js";
import Epikratia from "../model/enums.epikratia.js";
import Event from "../model/enums.event";

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KARDITSAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KARDITSAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KARDITSAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.ROAD_CLOSURE]],
  [
    Prefectures[Prefectures.RANGED_AREA],
  ],
  [Event[Event.NONE]],
  "From Lamia to Katerini"
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.KARDITSAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KARDITSAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.ATTIKIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.FTHIOTIDAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.FTHIOTIDAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    ...provinces[Provinces.THESSALIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.FTHIOTIDAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.FLOODING]],
  [Type[Type.EVACUATION]],
  [
    Prefectures[Prefectures.FTHIOTIDAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.ATTIKIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.LARISAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.KARDITSAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    ...provinces[Provinces.THESSALIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.MAGNISIAS]
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    ...provinces[Provinces.THESSALIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-04"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    ...provinces[Provinces.THESSALIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-02"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-09-02"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-30"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-30"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-29"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KIKLADON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KAVALAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.ROAD_CLOSURE]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KIKLADON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KAVALAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RODOPIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KAVALAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ZAKINTHOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-15"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-13"),
  [Earthquake[Earthquake.EARTHQUAKE], Landslide[Landslide.LANDSLIDE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.CHANION]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-09"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-08-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.IONION_NISON],
    ...provinces[Provinces.IPIROU],
    Prefectures[Prefectures.ETOLOAKARNANIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.CHIOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-29"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER_DIMINISHED]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER_DIMINISHED]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.EXPLOSIONS_CAUSED_BY_FIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER_DIMINISHED]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER_DIMINISHED]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.KORINTHIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KORINTHIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-15"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-07-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.RETHIMNIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-06-18"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.KIKLADON],
    Prefectures[Prefectures.CHIOU],
    Prefectures[Prefectures.LESVOU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-06-18"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVIAS], Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-04-03"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.CHALKIDIKIS],
    Prefectures[Prefectures.KAVALAS],
    Prefectures[Prefectures.XANTHIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-04-03"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.PELLAS],
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.IMATHIAS],
    Prefectures[Prefectures.THESSALONIKIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-07"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-07"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.VIOTIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    Prefectures[Prefectures.EVIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-06"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.VIOTIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-04"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-02-04"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.VIOTIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [Flood[Flood.RIVER_OVERFLOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ARKADIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.EVROU],
    Prefectures[Prefectures.KAVALAS],
    Prefectures[Prefectures.LESVOU],
    Prefectures[Prefectures.CHIOU],
    Prefectures[Prefectures.SAMOU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.DITIKIS_MAKEDONIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KORINTHIAS],
    Prefectures[Prefectures.ARGOLIDAS],
    Prefectures[Prefectures.LAKONIAS],
    Prefectures[Prefectures.MESSINIAS],
    Prefectures[Prefectures.ARKADIAS],
    Prefectures[Prefectures.KARDITSAS],
    Prefectures[Prefectures.TRIKALON],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.ETOLOAKARNANIAS],
    Prefectures[Prefectures.ILIAS],
    Prefectures[Prefectures.ACHAIAS],
    Prefectures[Prefectures.KEFALLINIAS],
    Prefectures[Prefectures.ZAKINTHOU],
    Prefectures[Prefectures.LEFKADAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-11"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.SAMOU], Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-11"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KRITIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.ACHAIAS],
    Prefectures[Prefectures.ILIAS],
    Prefectures[Prefectures.MESSINIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ETOLOAKARNANIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.KEFALLINIAS], ...provinces[Provinces.IPIROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-09"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-08"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-12-01"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.STRONG_WINDS],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.CHALKIDIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.PIERIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.KEFALLINIAS], Prefectures[Prefectures.ZAKINTHOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-23"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.SAMOU], Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.IMATHIAS],
    Prefectures[Prefectures.PELLAS],
    Prefectures[Prefectures.CHALKIDIKIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS], Prefectures[Prefectures.KORINTHIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.PELOPONNISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-04"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.DITIKIS_ELLADAS],
    ...provinces[Provinces.NOTIOU_IONIOU],
    Prefectures[Prefectures.MESSINIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-11-04"),
  [ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.VORIOU_IONIOU], ...provinces[Provinces.IPIROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.LASITHIOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-10-14"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.IPIROU],
    ...provinces[Provinces.DITIKIS_ELLADAS],
    ...provinces[Provinces.IONION_NISON],
    ...provinces[Provinces.DITIKIS_PELOPONISSOU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-09-26"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.KERKIRAS],
    Prefectures[Prefectures.LEFKADAS],
    Prefectures[Prefectures.KEFALLINIAS],
    Prefectures[Prefectures.ETOLOAKARNANIAS],
    ...provinces[Provinces.IPIROU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-09-04"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.THESSALONIKIS],
    Prefectures[Prefectures.IMATHIAS],
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.CHALKIDIKIS],
    Prefectures[Prefectures.LARISAS],
    Prefectures[Prefectures.MAGNISIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-08-24"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS],
    ...provinces[Provinces.KENTRIKIS_MAKEDONIAS],
    ...provinces[Provinces.VORIOU_EGEOU],
    ...provinces[Provinces.THESSALIAS],
    ...provinces[Provinces.ANATOLIKIS_STEREAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-08-23"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-08-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KERKIRAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-08-11"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KAVALAS]],
  [Event[Event.NONE]]
);

Alerts.add(
  new Date("2022-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ZAKINTHOU]],
  [Event[Event.NONE]]
);

Alerts.add(
  new Date("2022-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-26"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVROU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-21"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.ROAD_CLOSURE]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RETHIMNIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.RETHIMNIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-06-18"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-06-10"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.HEAVY_RAIN],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.KENTRIKIS_MAKEDONIAS],
    ...provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS],
    ...provinces[Provinces.VORIOU_EGEOU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-06-09"),
  [
    ExtremeWeather[ExtremeWeather.HEAVY_THUNDERSTORMS],
    ExtremeWeather[ExtremeWeather.HEAVY_RAIN],
  ],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.UNIDENTIFIED_AREA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-06-06"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-06-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-01-24"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  "Elpis"
);

Alerts.add(
  new Date("2022-01-23"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.MAGNISIAS],
    Prefectures[Prefectures.FTHIOTIDAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.KIKLADON],
    Prefectures[Prefectures.LESVOU],
  ],
  [Event[Event.NONE]],
  "Elpis - Vories kyklades and limnos"
);

Alerts.add(
  new Date("2022-01-11"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2022-01-10"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.FTHIOTIDAS],
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.DODEKANISOU],
    ...provinces[Provinces.THESSALIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-12-11"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ETOLOAKARNANIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-12-10"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.IONION_NISON],
    ...provinces[Provinces.IPIROU],
    ...provinces[Provinces.THESSALIAS],
    Prefectures[
      Prefectures.UNIDENTIFIED_AREAS_PELOPONISSOU_AND_STEREAS_ELLADAS
    ],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-11-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.KIKLADON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-10-13"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.UNIDENTIFIED_AREA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-10-06"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    ...provinces[Provinces.DITIKIS_STEREAS],
    ...provinces[Provinces.VORIOU_IONIOU],
    ...provinces[Provinces.IPIROU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-09-27"),
  [Earthquake[Earthquake.EARTHQUAKE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KRITIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-09-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ARKADIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-09-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.VIOTIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KORINTHIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ARKADIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-09"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.GREVENON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KRITIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ARGOLIDAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KORINTHIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-07-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.KEFALLINIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-06-18"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-11-07"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-11-02"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.MAGNISIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-30"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.THESSALONIKIS],
    Prefectures[Prefectures.LARISAS],
    Prefectures[Prefectures.RODOPIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-30"),
  [Tsunami[Tsunami.TSUNAMI], Earthquake[Earthquake.EARTHQUAKE]],
  [Type[Type.DANGER], Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.SAMOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.IOANNINON], Prefectures[Prefectures.SERRON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-23"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KASTRORIAS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-15"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KOZANIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-07"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KOZANIS], Prefectures[Prefectures.IOANNINON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-05"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.ACHAIAS], Prefectures[Prefectures.IOANNINON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-10-01"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KIKLADON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.TRIKALON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-17"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [
    Prefectures[Prefectures.ETOLOAKARNANIAS],
    Prefectures[Prefectures.ACHAIAS],
    Prefectures[Prefectures.ILIAS],
    Prefectures[Prefectures.MESSINIAS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-17"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.IONION_NISON]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-11"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [
    Prefectures[Prefectures.PELLAS],
    Prefectures[Prefectures.PIERIAS],
    Prefectures[Prefectures.IMATHIAS],
    Prefectures[Prefectures.KILKIS],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-09-03"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.DANGER]],
  [
    Prefectures[Prefectures.EVIAS],
    Prefectures[Prefectures.VIOTIAS],
    Prefectures[Prefectures.KERKIRAS],
    Prefectures[Prefectures.KEFALLINIAS],
    Prefectures[Prefectures.ZAKINTHOU],
    Prefectures[Prefectures.ACHAIAS],
    Prefectures[Prefectures.ILIAS],
    Prefectures[Prefectures.MESSINIAS],
    Prefectures[Prefectures.THESSALONIKIS],
    Prefectures[Prefectures.CHALKIDIKIS],
    Prefectures[Prefectures.MAGNISIAS],
    Prefectures[Prefectures.CHIOU],
    Prefectures[Prefectures.SAMOU],
    Prefectures[Prefectures.DODEKANISOU],
  ],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-08-31"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.IRAKLIOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-08-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.ZAKINTHOU], Prefectures[Prefectures.LESVOU]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-08-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.CHANION]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-08-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-03-22"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-03-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  [Event[Event.NONE]],
  ""
);

Alerts.add(
  new Date("2020-03-11"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  [Event[Event.NONE]],
  ""
);

const dataArray = Alerts.array;
export default dataArray;
