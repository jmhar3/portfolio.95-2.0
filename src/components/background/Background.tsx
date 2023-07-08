import { Box } from "@chakra-ui/react";
import Clouds from "./Clouds";
import Moon from "./Moon";
import Stars from "./Stars";

export const Background = () => {
  return (
    <Box h="full" w="full" overflow="hidden">
      <Stars />
      <Clouds />
      <Moon />
    </Box>
  );
};
