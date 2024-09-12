/**
 * Colors and spacing are deprecated but kept around for compatibility
 */
export { colors } from "./colors";
export { Spacing } from "../utils/spacing";

export const containers = {
  default: 1540,
};

export const zIndexes = {
  popover: 210,
  listbox: 101,
};
type ZIndexToken = keyof typeof zIndexes;
export const zIndex = (unit: ZIndexToken) => zIndexes[unit];

export {
  colors as textColors,
  color,
  iconColor,
  backgroundColor,
  spacings,
  spacing,
  sizing,
  radius,
  borderWidth,
  borderColor,
  border,
  fontWeight,
  padding,
} from "./token-funcs";