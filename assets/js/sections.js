// This registry defines the navigation order and connects sections to their content.
// To add a section, create a content module and add one record with a stable URL id.
import home from "../../content/home.js";
import physics from "../../content/physics.js";
import travel from "../../content/travel.js";
import yugioh from "../../content/yugioh.js";

export const sections = [
  { id: "home", content: home },
  { id: "physics", content: physics },
  { id: "travel", content: travel },
  { id: "yugioh", content: yugioh },
];
