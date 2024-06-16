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
import Traffic from "../model/enums.traffic.js";

Alerts.add(
  new Date("2024-06-14"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  "Δασική πυρκαγιά στον Άγιο Θωμά Λάρισας. Αν βρίσκεστε στην περιοχή απομακρυνθείτε προς την πόλη της Λάρισας."
);

Alerts.add(
  new Date("2024-06-14"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΠΈΛΛΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-14"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΚΙΛΚΊΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-12"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΤΤΙΚΉΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-09"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-09"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-08"),
  [Traffic[Traffic.ΟΔΙΚΉ_ΚΊΝΗΣΗ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΟΛΛΈΣ_ΠΕΡΙΟΧΈΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-08"),
  [Traffic[Traffic.ΟΔΙΚΉ_ΚΊΝΗΣΗ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΟΛΛΈΣ_ΠΕΡΙΟΧΈΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΧΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-06-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΧΑΝΊΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-23"),
  [Earthquake[Earthquake.ΣΕΙΣΜΙΚΉ_ΔΌΝΗΣΗ]],
  [Type[Type.ΆΚΣΗΣΗΣ]],
  [
    Prefectures[Prefectures.ΗΡΑΚΛΕΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-22"),
  [Earthquake[Earthquake.ΣΕΙΣΜΙΚΉ_ΔΌΝΗΣΗ]],
  [Type[Type.ΆΚΣΗΣΗΣ]],
  [
    Prefectures[Prefectures.ΡΕΘΎΜΝΗΣ],
    Prefectures[Prefectures.ΧΑΝΊΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-19"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΕΡΙΟΧΈΣ_ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ],
    Prefectures[Prefectures.ΠΕΡΙΟΧΈΣ_ΣΤΕΡΕΆΣ_ΕΛΛΆΔΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
    ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΑΣΙΘΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-04-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΑΣΙΘΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2024-01-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
    Prefectures[Prefectures.ΗΛΕΊΑΣ],
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    ...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΤΤΙΚΉΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ_ΚΑΙ_ΘΡΆΚΗΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-11-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-10-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-28"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-28"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-28"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-28"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-28"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-27"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-26"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΤΤΙΚΉΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-26"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΥΡΥΤΑΝΊΑΣ],
    Prefectures[Prefectures.ΦΩΚΊΔΑΣ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-26"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
    Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-26"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΕΡΙΟΧΈΣ_ΠΕΛΟΠΟΝΝΉΣΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-24"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ], ExtremeWeather[ExtremeWeather.ΧΑΛΑΖΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-18"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΡΟΔΌΠΗΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-09"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-08"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-08"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-08"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-08"),
  [Flood[Flood.ΣΠΆΣΙΜΟ_ΑΝΑΧΏΜΑΤΟΣ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-08"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Landslide[Landslide.ΚΊΝΔΥΝΟΣ_ΚΑΤΟΛΙΣΘΉΣΕΩΝ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ], Traffic[Traffic.ΚΛΕΊΣΙΜΟ_ΔΡΌΜΟΥ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ], Prefectures[Prefectures.ΛΆΡΙΣΑΣ], Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  "From Lamia to Katerini"
);

Alerts.add(
  new Date("2023-09-07"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΤΤΙΚΉΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΤΤΙΚΉΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-04"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-02"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-09-02"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-30"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-30"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-29"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΑΒΆΛΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ], Traffic[Traffic.ΚΛΕΊΣΙΜΟ_ΔΡΌΜΟΥ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΑΒΆΛΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΟΔΌΠΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΑΒΆΛΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-15"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-13"),
  [Earthquake[Earthquake.ΣΕΙΣΜΙΚΉ_ΔΌΝΗΣΗ], Landslide[Landslide.ΚΊΝΔΥΝΟΣ_ΚΑΤΟΛΙΣΘΉΣΕΩΝ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΧΑΝΊΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-09"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-08-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
    Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΧΊΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-29"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-28"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΆΡΣΗΣ_ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-28"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΆΡΣΗΣ_ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΕΚΡΉΞΕΙΣ_ΛΌΓΩ_ΠΥΡΚΑΓΙΆΣ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΆΡΣΗΣ_ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΆΡΣΗΣ_ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-22"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-17"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-15"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-07-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΕΘΎΜΝΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-06-18"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ],
    Prefectures[Prefectures.ΧΊΟΥ],
    Prefectures[Prefectures.ΛΈΣΒΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-06-18"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ], Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-04-03"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ],
    Prefectures[Prefectures.ΚΑΒΆΛΑΣ],
    Prefectures[Prefectures.ΞΆΝΘΗΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-04-03"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΈΛΛΑΣ],
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΗΜΑΘΊΑΣ],
    Prefectures[Prefectures.ΘΕΣΣΑΛΟΝΊΚΗΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-07"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-07"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-06"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-04"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-02-04"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [Flood[Flood.ΥΠΕΡΧΕΊΛΗΣΗ_ΠΟΤΑΜΟΎ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΡΚΑΔΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΈΒΡΟΥ],
    Prefectures[Prefectures.ΚΑΒΆΛΑΣ],
    Prefectures[Prefectures.ΛΈΣΒΟΥ],
    Prefectures[Prefectures.ΧΊΟΥ],
    Prefectures[Prefectures.ΣΆΜΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-26"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΔΥΤΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ],
    Prefectures[Prefectures.ΑΡΓΟΛΊΔΑΣ],
    Prefectures[Prefectures.ΛΑΚΩΝΊΑΣ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
    Prefectures[Prefectures.ΑΡΚΑΔΊΑΣ],
    Prefectures[Prefectures.ΚΑΡΔΊΤΣΑΣ],
    Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2023-01-25"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
    Prefectures[Prefectures.ΗΛΕΊΑΣ],
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
    Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ],
    Prefectures[Prefectures.ΛΕΥΚΆΔΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-11"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΣΆΜΟΥ], Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-11"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΚΡΉΤΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    Prefectures[Prefectures.ΗΛΕΊΑΣ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-10"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ], ...provinces[Provinces.ΗΠΕΊΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-09"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-08"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-12-01"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΟΊ_ΆΝΕΜΟΙ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΠΙΕΡΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-30"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ], Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-23"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΣΆΜΟΥ], Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΗΜΑΘΊΑΣ],
    Prefectures[Prefectures.ΠΈΛΛΑΣ],
    Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ], Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-05"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΠΕΛΟΠΟΝΝΉΣΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-04"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΕΛΛΆΔΑΣ],
    ...provinces[Provinces.ΝΟΤΊΟΥ_ΙΟΝΊΟΥ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-11-04"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΒΟΡΕΊΟΥ_ΙΟΝΊΟΥ], ...provinces[Provinces.ΗΠΕΊΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-10-15"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΑΣΙΘΊΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-10-14"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
    ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΕΛΛΆΔΑΣ],
    ...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ],
    ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΠΕΛΟΠΟΝΉΣΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-09-26"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ],
    Prefectures[Prefectures.ΛΕΥΚΆΔΑΣ],
    Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
    Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-09-04"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΘΕΣΣΑΛΟΝΊΚΗΣ],
    Prefectures[Prefectures.ΗΜΑΘΊΑΣ],
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ],
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-08-24"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ_ΚΑΙ_ΘΡΆΚΗΣ],
    ...provinces[Provinces.ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ],
    ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
    ...provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΣΤΕΡΕΆΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-08-23"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-08-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-08-11"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΑΒΆΛΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]]
);

Alerts.add(
  new Date("2022-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]]
);

Alerts.add(
  new Date("2022-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-26"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΈΒΡΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-21"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ], Traffic[Traffic.ΚΛΕΊΣΙΜΟ_ΔΡΌΜΟΥ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-19"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΕΘΎΜΝΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΡΕΘΎΜΝΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-15"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-07-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-06-18"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-06-10"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΒΡΟΧΟΠΤΏΣΕΙΣ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΚΕΝΤΡΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ],
    ...provinces[Provinces.ΑΝΑΤΟΛΙΚΉΣ_ΜΑΚΕΔΟΝΊΑΣ_ΚΑΙ_ΘΡΆΚΗΣ],
    ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΑΙΓΑΊΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-06-09"),
  [
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΚΑΤΑΙΓΊΔΕΣ],
    ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΒΡΟΧΟΠΤΏΣΕΙΣ],
  ],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΠΟΛΛΈΣ_ΠΕΡΙΟΧΈΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-06-06"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-06-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-01-24"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  "Elpis"
);

Alerts.add(
  new Date("2022-01-23"),
  [ExtremeWeather[ExtremeWeather.ΙΣΧΥΡΈΣ_ΧΙΟΝΟΠΤΏΣΕΙΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ],
    Prefectures[Prefectures.ΛΈΣΒΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  "Elpis - Vories kyklades and limnos"
);

Alerts.add(
  new Date("2022-01-11"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2022-01-10"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ],
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-12-11"),
  [Flood[Flood.ΠΛΗΜΜΎΡΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-12-10"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
    ...provinces[Provinces.ΘΕΣΣΑΛΊΑΣ],
    Prefectures[
      Prefectures.ΠΕΡΙΟΧΈΣ_ΠΕΛΟΠΟΝΝΉΣΟΥ
    ],
    Prefectures[
      Prefectures.ΠΕΡΙΟΧΈΣ_ΣΤΕΡΕΆΣ_ΕΛΛΆΔΑΣ
    ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-11-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-10-13"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΠΟΛΛΈΣ_ΠΕΡΙΟΧΈΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-10-06"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    ...provinces[Provinces.ΔΥΤΙΚΉΣ_ΣΤΕΡΕΆΣ],
    ...provinces[Provinces.ΒΟΡΕΊΟΥ_ΙΟΝΊΟΥ],
    ...provinces[Provinces.ΗΠΕΊΡΟΥ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-09-27"),
  [Earthquake[Earthquake.ΣΕΙΣΜΙΚΉ_ΔΌΝΗΣΗ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΚΡΉΤΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-09-21"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΑΡΚΑΔΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-09-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-23"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-16"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-14"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΡΚΑΔΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-09"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-08"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΑΥΞΗΜΈΝΟΣ_ΚΊΝΔΥΝΟΣ_ΠΥΡΚΑΓΙΆΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-07"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΘΙΏΤΙΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-06"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΦΩΚΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΓΡΕΒΕΝΏΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-05"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΗΛΕΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΑΥΞΗΜΈΝΟΣ_ΚΊΝΔΥΝΟΣ_ΠΥΡΚΑΓΙΆΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΑΥΞΗΜΈΝΟΣ_ΚΊΝΔΥΝΟΣ_ΠΥΡΚΑΓΙΆΣ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΚΡΉΤΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-04"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-08-01"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-31"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-28"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-25"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΡΓΟΛΊΔΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-24"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΚΟΡΙΝΘΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-10"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΕΎΒΟΙΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-07-03"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-06-18"),
  [Fire[Fire.ΒΙΟΜΗΧΑΝΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2021-05-20"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΚΚΈΝΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-11-07"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [...epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-11-02"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-30"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΘΕΣΣΑΛΟΝΊΚΗΣ],
    Prefectures[Prefectures.ΛΆΡΙΣΑΣ],
    Prefectures[Prefectures.ΡΟΔΌΠΗΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-30"),
  [Tsunami[Tsunami.ΤΣΟΥΝΆΜΙ], Earthquake[Earthquake.ΣΕΙΣΜΙΚΉ_ΔΌΝΗΣΗ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ], Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΣΆΜΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΙΩΑΝΝΊΝΩΝ], Prefectures[Prefectures.ΣΕΡΡΏΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-23"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΚΑΣΤΟΡΙΆΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-15"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΚΟΖΆΝΗΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-07"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΚΟΖΆΝΗΣ], Prefectures[Prefectures.ΙΩΑΝΝΊΝΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-05"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΑΧΑΐΑΣ], Prefectures[Prefectures.ΙΩΑΝΝΊΝΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-10-01"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΚΥΚΛΆΔΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-27"),
  [Fire[Fire.ΔΑΣΙΚΉ_ΠΥΡΚΑΓΙΆ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [Prefectures[Prefectures.ΑΤΤΙΚΉΣ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΤΡΙΚΆΛΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-17"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [
    Prefectures[Prefectures.ΑΙΤΟΛΟΑΚΑΡΝΑΝΊΑΣ],
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    Prefectures[Prefectures.ΗΛΕΊΑΣ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-17"),
  [ExtremeWeather[ExtremeWeather.ΑΚΡΑΊΑ_ΚΑΙΡΙΚΆ_ΦΑΙΝΌΜΕΝΑ]],
  [Type[Type.ΕΝΗΜΈΡΩΣΗΣ]],
  [...provinces[Provinces.ΙΟΝΊΩΝ_ΝΉΣΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-11"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [
    Prefectures[Prefectures.ΠΈΛΛΑΣ],
    Prefectures[Prefectures.ΠΙΕΡΊΑΣ],
    Prefectures[Prefectures.ΗΜΑΘΊΑΣ],
    Prefectures[Prefectures.ΚΙΛΚΊΣ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-09-03"),
  [Fire[Fire.ΑΥΞΗΜΈΝΟΣ_ΚΊΝΔΥΝΟΣ_ΠΥΡΚΑΓΙΆΣ]],
  [Type[Type.ΕΤΟΙΜΌΤΗΤΑΣ]],
  [
    Prefectures[Prefectures.ΕΎΒΟΙΑΣ],
    Prefectures[Prefectures.ΒΟΙΩΤΊΑΣ],
    Prefectures[Prefectures.ΚΈΡΚΥΡΑΣ],
    Prefectures[Prefectures.ΚΕΦΑΛΛΟΝΙΆΣ],
    Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ],
    Prefectures[Prefectures.ΑΧΑΐΑΣ],
    Prefectures[Prefectures.ΗΛΕΊΑΣ],
    Prefectures[Prefectures.ΜΕΣΣΗΝΊΑΣ],
    Prefectures[Prefectures.ΘΕΣΣΑΛΟΝΊΚΗΣ],
    Prefectures[Prefectures.ΧΑΛΚΙΔΙΚΉΣ],
    Prefectures[Prefectures.ΜΑΓΝΗΣΊΑΣ],
    Prefectures[Prefectures.ΧΊΟΥ],
    Prefectures[Prefectures.ΣΆΜΟΥ],
    Prefectures[Prefectures.ΔΩΔΕΚΑΝΉΣΩΝ],
  ],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-08-31"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΗΡΑΚΛΕΊΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-08-29"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΖΑΚΎΝΘΟΥ], Prefectures[Prefectures.ΛΈΣΒΟΥ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-08-25"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [Prefectures[Prefectures.ΧΑΝΊΩΝ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-08-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [...epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-03-22"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [...epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-03-17"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [...epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

Alerts.add(
  new Date("2020-03-11"),
  [Covid19[Covid19.COVID_19]],
  [Type[Type.ΑΠΑΓΌΡΕΥΣΗΣ_ΚΥΚΛΟΦΟΡΊΑΣ]],
  [...epikratia[Epikratia.ΕΠΙΚΡΆΤΕΙΑ]],
  [Event[Event.ΚΑΝΈΝΑ]],
  ""
);

const dataArray = Alerts.array;
export default dataArray;
