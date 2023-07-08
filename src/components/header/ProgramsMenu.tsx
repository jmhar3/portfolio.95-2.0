import * as React from "react";
import { Stack } from "@chakra-ui/react";

import { DropdownTab } from "./DropdownTab";
import { MenuProps } from "./Header";

const ProgramsMenu = (props: MenuProps) => {
  const { showProgramsMenu, setShowProgramsMenu } = props;

  return (
    <Stack
      display={showProgramsMenu ? "visible" : "hidden"}
      onMouseLeave={setShowProgramsMenu.off}
    >
      <DropdownTab {...props} name="music" label="Music Player" />

      <DropdownTab {...props} name="minesweeper" label="MineSweeper" />
    </Stack>
  );
};

export default ProgramsMenu;
