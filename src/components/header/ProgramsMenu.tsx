import * as React from "react";
import { Stack } from "@chakra-ui/react";

import { DropdownTab } from "./DropdownTab";
import { MenuProps } from "./Header";

export const ProgramsMenu = (props: MenuProps) => {
  const { setShowProgramsMenu } = props;

  return (
    <Stack spacing="0" onMouseLeave={setShowProgramsMenu.off}>
      <DropdownTab {...props} name="music" label="Music Player" />

      <DropdownTab {...props} name="minesweeper" label="MineSweeper" />
    </Stack>
  );
};
