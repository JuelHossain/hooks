const colors = require("tailwindcss/colors");

// tailwind css deprecated colors
const deprecatedColors = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"];

// custom colors objects
const tailManColors = {};
const stringColors = {};

// setting custom colors
Object.entries(colors).forEach((b) => {
  if (!deprecatedColors.includes(b[0])) {
    if (typeof b[1] === "object") {
      Object.assign(tailManColors, { [b[0]]: Object.values(b[1]) });
    } else {
      Object.assign(stringColors, {
        [b[0]]: b[1],
      });
    }
  }
});

module.exports = tailManColors;
