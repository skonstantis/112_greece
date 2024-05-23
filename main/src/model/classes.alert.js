/* Author: Sotiris Konstantis */

class Alert {
  static id = 0;
  constructor(date, categories, types, prefectures, text) {
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
  }

  static capitalize(string) {
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

  static add(date, categories, types, prefectures, text) {
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

    this.array.push(new Alert(date, categories, types, prefectures, text));
  }
}
