import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const border = defineStyle({
  borderLeft: "2px solid p95.light.100",
  borderTop: "2px solid p95.light.100",
  borderRight: "2px solid p95.light.400",
  borderBottom: "2px solid p95.light.400",
  boxShadow: `-2px -2px  p95.light.300 inset`,
});

export const borderVariantTheme = defineStyleConfig({
  variants: { border },
});

export const theme = extendTheme({
  fonts: {
    heading: `'MS Bold', sans-serif`,
    body: `'MS', sans-serif`,
  },
  components: {
    Divider: borderVariantTheme,
    Heading: {
      baseStyle: {
        fontColor: `p95.light.400`,
      },
    },
    Text: {
      baseStyle: {
        fontColor: `p95.light.400`,
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "none",
      },
      variants: { border: border },
    },
  },
  styles: {
    global: {
      body: {
        bg: `p95.light.100`,
      },
    },
  },
  colors: {
    p95: {
      light: {
        100: "#E4F4F5",
        200: "#C6E8EA",
        300: "#84C2C6",
        400: "#025258",
      },
      dark: {
        100: "#025258",
        200: "#84C2C6",
        300: "#C6E8EA",
        400: "#E4F4F5",
      },
    },
  },
});
