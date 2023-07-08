import * as React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Web } from "./screens/Web";
import { Mobile } from "./screens/Mobile";
import Fonts from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: `'MS Bold', sans-serif`,
    body: `'MS', sans-serif`,
  },
});

export const App = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {isMobile ? <Mobile /> : <Web />}
    </ChakraProvider>
  );
};
