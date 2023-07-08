import * as React from "react";

import { MenuProps } from "./Header";
import { BorderButton } from "../buttons/BorderButton";

export interface NavTabProps extends MenuProps {
  name: string;
}

export const NavTab = (props: NavTabProps) => {
  const { name, windows, setWindows, screenOnFront, setScreenOnFront } = props;

  return (
    <BorderButton
      capitalize
      onClick={() => {
        ((screenOnFront === name && !windows[name].minimise) ||
          windows[name].minimise) &&
          setWindows({
            ...windows,
            [name]: {
              minimise: !windows[name].minimise,
              close: false,
            },
          });
        setScreenOnFront(name);
      }}
    >
      {name}
    </BorderButton>
  );
};
