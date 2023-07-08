import * as React from "react";
import { Image, Stack } from "@chakra-ui/react";

import computer from "../../images/computer.png";
import { MenuProps } from "./Header";

export interface StartTabProps extends MenuProps {
  clickable: boolean;
  name: string;
  label: string;
}

export const StartTab = (props: StartTabProps) => {
  const {
    setShowAboutMenu,
    setShowProgramsMenu,
    setWindows,
    setScreenOnFront,
    windows,
    clickable,
    name,
    label,
  } = props;

  return (
    <Stack
      direction="row"
      onMouseEnter={() => {
        if (name === "about") {
          setShowAboutMenu.on();
          setShowProgramsMenu.off();
        }
        if (name === "programs") {
          setShowAboutMenu.off();
          setShowProgramsMenu.on();
        }
      }}
      cursor={clickable ? "pointer" : "default"}
      onClick={() => {
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
      }}
    >
      <Stack direction="row">
        <Image aria-label={label} src={computer} />
        {label}
      </Stack>
      {!clickable && "►"}
    </Stack>
  );
};
