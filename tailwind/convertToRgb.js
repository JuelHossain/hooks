const convert = require("color-convert");

// converting color to rgb numbers
function convertToRgb(color) {
  const rgbColor = convert.hex.rgb(color)?.join(" ");
  return rgbColor;
}
module.exports = convertToRgb;
