function getTailColors(colors) {
  const tailColors = {};
  Object.keys(colors).forEach((key) => {
    const color = {};
    Object.keys([...Array(10)]).forEach((n) => {
      Object.assign(color, { [n]: `rgb(var(--${key}-${n})/<alpha-value>)` });
    });
    Object.assign(tailColors, { [key]: color });
  });
  return tailColors;
}
module.exports = getTailColors;
