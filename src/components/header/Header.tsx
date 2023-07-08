import * as React from "react";
import { Stack, useBoolean } from "@chakra-ui/react";

import { NavBar } from "./NavBar";
import { StartMenu } from "./StartMenu";
import { AboutMenu } from "./AboutMenu";
import { ProgramsMenu } from "./ProgramsMenu";
import { WebProps, UseBooleanProps } from "../../screens/Web";

export interface MenuProps extends WebProps {
  showStartMenu: boolean;
  setShowStartMenu: UseBooleanProps;
  showAboutMenu: boolean;
  setShowAboutMenu: UseBooleanProps;
  showProgramsMenu: boolean;
  setShowProgramsMenu: UseBooleanProps;
}

export const Header = (props: WebProps) => {
  const [showStartMenu, setShowStartMenu] = useBoolean(false);
  const [showAboutMenu, setShowAboutMenu] = useBoolean(false);
  const [showProgramsMenu, setShowProgramsMenu] = useBoolean(false);

  const menuProps: MenuProps = {
    ...props,
    showStartMenu,
    setShowStartMenu,
    showAboutMenu,
    setShowAboutMenu,
    showProgramsMenu,
    setShowProgramsMenu,
  };

  return (
    <Stack position="fixed" bottom="0" w="full" zIndex={3} spacing="0">
      <Stack direction="row" spacing="0" align="flex-end">
        {showStartMenu && <StartMenu {...menuProps} />}

        {showAboutMenu && <AboutMenu {...menuProps} />}

        {showProgramsMenu && <ProgramsMenu {...menuProps} />}
      </Stack>

      <NavBar {...menuProps} />
    </Stack>
  );
};
