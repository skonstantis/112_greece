/* Author: Sotiris Konstantis */

import "./enums.event.ts";

class Alert {
  static id = 0;
  constructor(date, categories, types, prefectures,  events, text) {
    this.id = Alert.id++;
    this.date = date;
    this.text = text;
    for(let i = 0; i < categories.length; i++){
      categories[i] = Alert.capitalize(categories[i])
    }
    this.categories = categories;

    for(let i = 0; i < types.length; i++){
      types[i] = Alert.capitalize(types[i])
    }
    this.types = types;

    for(let i = 0; i < prefectures.length; i++){
      prefectures[i] = Alert.capitalize(prefectures[i])
    }
    this.prefectures = prefectures;

    for(let i = 0; i < events.length; i++){
      events[i] = Alert.capitalize(events[i])
    }
    this.events = events;
  }

  static capitalize(string) {
    if(string.length < 1)
      return;
    const words = string.split(" ");
    string = "";
    for (let i = 0; i < words.length; i++) {
      i != 0 ? string += " " + words[i][0].toUpperCase() + words[i].substr(1) : string += words[i][0].toUpperCase() + words[i].substr(1);
    }
    return string;
  }
}

export default class Alerts {
  static array = [];

  static add(date, categories, types, prefectures, events, text) {
    for(let i = 0; i < categories.length; i++)
    {
      categories[i] = categories[i].replaceAll("_", " ").toLowerCase();
    }

    for(let i = 0; i < types.length; i++)
    {
      types[i] = types[i].replaceAll("_", " ").toLowerCase();
    }

    for(let i = 0; i < prefectures.length; i++)
    {
      prefectures[i] = prefectures[i].replaceAll("_", " ").toLowerCase();
    }

    for(let i = 0; i < events.length; i++)
    {
      events[i] = events[i].replace("NONE", "").replaceAll("_", " ").toLowerCase();
    }

    this.array.push(new Alert(date, categories, types, prefectures, events, text));
  }
}
