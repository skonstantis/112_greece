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

Alerts.add(
  new Date("2022-06-10"),
  [ExtremeWeather[ExtremeWeather.HEAVY_RAIN]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KENTRIKIS_MAKEDONIAS], ...provinces[Provinces.ANATOLIKIS_MAKEDONIAS_KAI_THRAKIS],...provinces[Provinces.VORIOU_EGEOU]]
);

Alerts.add(
  new Date("2022-06-09"),
  [ExtremeWeather[ExtremeWeather.HEAVY_RAIN]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.UNIDENTIFIED_AREA]]
);

Alerts.add(
  new Date("2022-06-06"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]]
);

Alerts.add(
  new Date("2022-06-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]]
);

Alerts.add(
  new Date("2022-01-24"),
  [ExtremeWeather[ExtremeWeather.HEAVY_SNOW]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
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
  "Elpis - Vories kyklades and limnos"
);

Alerts.add(
  new Date("2022-01-11"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.MAGNISIAS]],
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
  ""
);

Alerts.add(
  new Date("2021-12-11"),
  [Flood[Flood.FLOODING]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ETOLOAKARNANIAS]],
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
  ""
);

Alerts.add(
  new Date("2021-11-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.KIKLADON]],
  ""
);

Alerts.add(
  new Date("2021-10-13"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.UNIDENTIFIED_AREA]],
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
  ""
);

Alerts.add(
  new Date("2021-09-27"),
  [Earthquake[Earthquake.EARTHQUAKE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KRITIS]],
  ""
);

Alerts.add(
  new Date("2021-09-21"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ARKADIAS]],
  ""
);

Alerts.add(
  new Date("2021-09-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.VIOTIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KORINTHIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ARKADIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-09"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FTHIOTIDAS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.FOKIDAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.GREVENON]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ILIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.DODEKANISOU]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.INCREASED_FIRE_RISK]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.KRITIS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.MESSINIAS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.DODEKANISOU]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.DODEKANISOU]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ACHAIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-07-25"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ARGOLIDAS]],
  ""
);

Alerts.add(
  new Date("2021-07-24"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.KORINTHIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-10"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.EVIAS]],
  ""
);

Alerts.add(
  new Date("2021-07-03"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.DANGER]],
  [Prefectures[Prefectures.KEFALLINIAS]],
  ""
);

Alerts.add(
  new Date("2021-06-18"),
  [Fire[Fire.INDUSTRIAL_FIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.EVACUATION]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2020-11-07"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  ""
);

Alerts.add(
  new Date("2020-11-02"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.MAGNISIAS]],
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
  ""
);

Alerts.add(
  new Date("2020-10-30"),
  [Tsunami[Tsunami.TSUNAMI], Earthquake[Earthquake.EARTHQUAKE]],
  [Type[Type.DANGER], Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.SAMOU]],
  ""
);

Alerts.add(
  new Date("2020-10-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.IOANNINON], Prefectures[Prefectures.SERRON]],
  ""
);

Alerts.add(
  new Date("2020-10-23"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KASTRORIAS]],
  ""
);

Alerts.add(
  new Date("2020-10-05"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.ACHAIAS], Prefectures[Prefectures.IOANNINON]],
  ""
);

Alerts.add(
  new Date("2020-10-01"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.KIKLADON]],
  ""
);

Alerts.add(
  new Date("2020-09-27"),
  [Fire[Fire.WILDFIRE]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [Prefectures[Prefectures.ATTIKIS]],
  ""
);

Alerts.add(
  new Date("2020-09-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.TRIKALON]],
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
  ""
);

Alerts.add(
  new Date("2020-09-17"),
  [ExtremeWeather[ExtremeWeather.EXTREME_WEATHER]],
  [Type[Type.PROTECTION_INSTRUCTIONS]],
  [...provinces[Provinces.IONION_NISON]],
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
  ""
);

Alerts.add(
  new Date("2020-08-31"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.IRAKLIOU]],
  ""
);

Alerts.add(
  new Date("2020-08-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.ZAKINTHOU], Prefectures[Prefectures.LESVOU]],
  ""
);

Alerts.add(
  new Date("2020-08-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [Prefectures[Prefectures.CHANION]],
  ""
);

Alerts.add(
  new Date("2020-08-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  ""
);

Alerts.add(
  new Date("2020-03-22"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  ""
);

Alerts.add(
  new Date("2020-03-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  ""
);

Alerts.add(
  new Date("2020-03-11"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.CURFEW]],
  [...epikratia[Epikratia.EPIKRATIA]],
  ""
);

const dataArray = Alerts.array;
export default dataArray;
