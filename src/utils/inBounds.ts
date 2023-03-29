export const inBounds = (value: number, maxValue: number) => {
  if (value >= 0 && value < maxValue) {
    return value;
  } else {
    // throws array search out of bounds
    return -100000;
  }
};
