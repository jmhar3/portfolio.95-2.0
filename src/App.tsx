import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Web } from "./screens/Web";
import { Mobile } from "./screens/Mobile";
import Fonts from "./Fonts";
import { theme } from "./theme";

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
