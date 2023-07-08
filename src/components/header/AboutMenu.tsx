import * as React from "react";
import { Stack, useToken } from "@chakra-ui/react";

import { DropdownTab } from "./DropdownTab";
import { MenuProps } from "./Header";
import { MenuButton } from "./MenuButton";

export const AboutMenu = (props: MenuProps) => {
  const { setShowAboutMenu } = props;

  const [c100, c400] = useToken("colors", [
    "p95.100",
    "p95.200",
    "p95.300",
    "p95.400",
  ]);

  return (
    <Stack
      spacing="0"
      direction="column"
      borderLeft={`2px solid ${c100}`}
      borderTop={`2px solid ${c100}`}
      borderRight={`2px solid ${c400}`}
      borderBottom={`2px solid ${c400}`}
      onMouseLeave={setShowAboutMenu.off}
    >
      <MenuButton {...props} name="profile" label="about" />

      <MenuButton {...props} name="profile" label="skills" />

      <MenuButton {...props} name="profile" label="education" />

      <MenuButton {...props} name="profile" label="work" />

      <MenuButton {...props} name="profile" label="projects" />
    </Stack>
  );
};
