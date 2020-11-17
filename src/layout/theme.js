export const theme = {
  white: "#ffffff",
  black: "#000000",
  grey: "#888888",
  lightgrey: "#EBEBEB",
  blue: "#6791E1",
  secondGrey: "#BFBFBF",
  none: "none",
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  zIndex: level => level * 100,
}

export const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1200,
  bigDesktop: 1439,
  huge: 1700,
}

export const response = {
  phone: `(min-width: ${breakpoints.phone}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
  huge: `(min-width: ${breakpoints.huge}px)`,
}
