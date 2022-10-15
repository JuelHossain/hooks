const convertToRgb = require("./convertToRgb");

// setting root Color
function setRootColor(colors) {
  const root = window.document.documentElement;
  Object.keys(colors).forEach((key) => {
    Object.keys([...Array(10)]).forEach((n) => {
      root.style.setProperty(`--${key}-${n}`, convertToRgb(colors[key][n]));
    });
  });
}
module.exports = setRootColor;
