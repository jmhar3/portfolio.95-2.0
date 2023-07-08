import * as React from "react";
import { Stack, useToken } from "@chakra-ui/react";

import { DropdownTab } from "./DropdownTab";
import { MenuProps } from "./Header";

const AboutMenu = (props: MenuProps) => {
  const { showAboutMenu, setShowAboutMenu } = props;

  const [c100, c300, c400] = useToken("colors", [
    "p95.light.100",
    "p95.light.200",
    "p95.light.300",
    "p95.light.400",
  ]);

  return (
    <Stack
      direction="column"
      borderLeft={`2px solid ${c100}`}
      borderTop={`2px solid ${c100}`}
      borderRight={`2px solid ${c400}`}
      borderBottom={`2px solid ${c400}`}
      boxShadow={`-2px -2px  ${c300} inset`}
      display={showAboutMenu ? "visible" : "hidden"}
      onMouseLeave={setShowAboutMenu.off}
    >
      <DropdownTab {...props} name="profile" label="about" />

      <DropdownTab {...props} name="profile" label="skills" />

      <DropdownTab {...props} name="profile" label="education" />

      <DropdownTab {...props} name="profile" label="work" />

      <DropdownTab {...props} name="profile" label="projects" />
    </Stack>
  );
};

export default AboutMenu;
