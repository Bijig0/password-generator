// Numify styles from window.getComputed()

export const removeSuffix = (style: string) => {
  if (style.slice(-2) === 'px') {
    return style.slice(0, -2)
  }
  return style
};

const numifyStyles = (computedStyle: string) => {
  const styleString = removeSuffix(computedStyle);
  const numifiedStyle = Number(styleString);
  return numifiedStyle;
};

export default numifyStyles;
