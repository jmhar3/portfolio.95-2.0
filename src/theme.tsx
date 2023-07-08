import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const border = defineStyle({
  borderLeft: "2px solid p95.100",
  borderTop: "2px solid p95.100",
  borderRight: "2px solid p95.400",
  borderBottom: "2px solid p95.400",
  boxShadow: `-2px -2px  p95.300 inset`,
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
        fontColor: `p95.400`,
      },
    },
    Text: {
      baseStyle: {
        fontColor: `p95.400`,
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
        bg: `p95.400`,
      },
    },
  },
  colors: {
    p95: {
      100: "#E7F3F7",
      200: "#E0F0F5",
      300: "#58A4BD",
      400: "#035670",
    },
  },
});
