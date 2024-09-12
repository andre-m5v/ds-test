import tokens from "./tokens2";

/**
 * These are our accessors to the tokens from the design system,
 * we should only use these to get values from it
 */

const backgroundColors = tokens.bg;
type BackgroundToken = keyof typeof backgroundColors;
export const backgroundColor = (unit: BackgroundToken) => {
  return backgroundColors[unit];
};

export const colors = tokens.text;
type TextColorToken = keyof typeof colors;
export const color = (unit: TextColorToken) => {
  return colors[unit];
};

const iconColors = tokens.icon;
type IconColorToken = keyof typeof iconColors;
export const iconColor = (unit: IconColorToken) => {
  return iconColors[unit];
};

const borderColors = tokens.border;
type BorderColorToken = keyof typeof borderColors;
export const borderColor = (unit: BorderColorToken) => {
  return borderColors[unit];
};

const borderWidths = tokens.borderWidth;
type BorderWidthToken = keyof typeof borderWidths;
export const borderWidth = (unit: BorderWidthToken) => {
  return borderWidths[unit];
};

export const border = (width: BorderWidthToken, color: BorderColorToken) =>
  `${borderWidth(width)}px solid ${borderColor(color)}`;

const radiuses = tokens.borderRadius;
type RadiusToken = keyof typeof radiuses;
export const radius = (unit: RadiusToken) => {
  return radiuses[unit];
};

export const spacings = tokens.spacing;
type SpacingToken = keyof typeof spacings;
export const spacing = (unit: SpacingToken) => {
  return spacings[unit];
};

const sizings = tokens.sizing;
type SizingToken = keyof typeof sizings;
export const sizing = (unit: SizingToken) => {
  return sizings[unit];
};

type TokenColorsKey = keyof Pick<
  typeof tokens,
  "neutral" | "brand" | "accent" | "green" | "red" | "blue" | "yellow"
>;
/**
 * generic color tokens as "color" func implies text
 *
 * Use these defined color values if the colors are not part of default tokens
 * for component, or is for a specific non-standard component
 *
 */
export const tokenColor = <K extends TokenColorsKey>(
  key: K,
  value: keyof (typeof tokens)[K],
) => {
  return tokens[key][value];
};

/**
 * This is a helper waiting for tokens
 */
export const fontWeight = (weight: 400 | 600 | 700) => {
  return weight;
};

/**
 * A function that implements CSS spec conformant expansion for "padding"
 *
 * @example
 *   padding(10)
 *   padding(10, 5)
 *   padding(2, 4, 8)
 *   padding(1, 0, 3, '4)
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 */
export const padding = (...values: (SpacingToken | 0)[]) => {
  if (values.length === 1) {
    return {
      padding: values[0],
    };
  }

  if (values.length === 2) {
    return { padding: `${values[0]}px ${values[1]}px` };
  }

  if (values.length === 3) {
    return { padding: `${values[0]}px ${values[1]}px ${values[2]}px` };
  }

  return {
    padding: `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px`,
  };
};
