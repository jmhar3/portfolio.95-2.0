import * as React from "react";
import { Button } from "@chakra-ui/react";

import { MenuProps } from "./Header";

export interface DropdownTabProps extends MenuProps {
  name: string;
  label: string;
}

export const DropdownTab = (props: DropdownTabProps) => {
  const { setScreenOnFront, setWindows, windows, setSelectedTab, name, label } =
    props;

  return (
    <Button
      bg="p95.light.200"
      color="p95.light.400"
      textTransform="capitalize"
      onClick={() => {
        setScreenOnFront(name);

        setWindows({
          ...windows,
          [name]: {
            minimise: false,
            close: false,
          },
        });

        name === "profile" && setSelectedTab(label);
      }}
    >
      {label}
    </Button>
  );
};
