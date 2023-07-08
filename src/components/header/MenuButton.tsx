import * as React from "react";
import { Image, Stack, Button } from "@chakra-ui/react";

import computer from "../../images/computer.png";
import { MenuProps } from "./Header";

export interface MenuButtonProps extends MenuProps {
  clickable?: boolean;
  isDropdown?: boolean;
  name: string;
  label: string;
}

export const MenuButton = (props: MenuButtonProps) => {
  const {
    setShowAboutMenu,
    setShowProgramsMenu,
    setWindows,
    setScreenOnFront,
    windows,
    clickable = true,
    isDropdown = true,
    name,
    label,
  } = props;

  const onMouseEnter = React.useCallback(() => {
    if (name === "about") {
      setShowAboutMenu.on();
      setShowProgramsMenu.off();
    }
    if (name === "programs") {
      setShowAboutMenu.off();
      setShowProgramsMenu.on();
    }
  }, [name]);

  const onClick = React.useCallback(() => {
    if (clickable) {
      setScreenOnFront(name);
      setWindows({
        ...windows,
        [name]: {
          minimise: false,
          close: false,
        },
      });
    }
  }, [clickable, name]);

  return (
    <Button
      px="3"
      py="5"
      bg="p95.200"
      color="p95.400"
      onClick={onClick}
      textTransform="capitalize"
      onMouseEnter={onMouseEnter}
      cursor={clickable ? "pointer" : "default"}
      _hover={{ bg: "p95.400", color: "p95.100" }}
      justifyContent={isDropdown ? "center" : "space-between"}
      leftIcon={
        isDropdown ? undefined : (
          <Image aria-label={label} src={computer} pr="2" w="33px" />
        )
      }
    >
      {label}
      {!clickable && " ►"}
    </Button>
  );
};
