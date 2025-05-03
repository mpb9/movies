export default class MenuItem {
  constructor(name = "", img = "", url = "", section = "") {
    this.name = name;
    this.icon = img;
    this.url = url;
    this.section = section;
  }
}
export const menuItems = [
  new MenuItem("Home", "home", "/"),
  new MenuItem("Bartender", "bartender", "/bartender"),
  new MenuItem("Boxd", "boxd", "/bartender/boxd"),
  new MenuItem("Spreadsheet", "spreadsheet", "/bartender/spreadsheet"),
  new MenuItem("Jsonified", "jsonified", "/bartender/jsonified"),
];
