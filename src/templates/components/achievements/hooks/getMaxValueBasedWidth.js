export default function getMaxValueBasedWidth(
  minScreenWidth,
  maxScreenWidth,
  minValue,
  maxValue
) {
  const windowWidth = window.innerWidth;
  if (windowWidth <= minScreenWidth) {
    return maxValue;
  } else if (windowWidth >= maxScreenWidth) {
    return minValue;
  } else {
    const result =
      maxValue -
      ((windowWidth - minScreenWidth) * (maxValue - minValue)) /
        (maxScreenWidth - minScreenWidth);
    return result;
  }
}
