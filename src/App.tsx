import * as React from "react";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { Web } from "./screens/Web";
import { Mobile } from "./screens/Mobile";

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
      {isMobile ? <Mobile /> : <Web />}
    </ChakraProvider>
  );
};
