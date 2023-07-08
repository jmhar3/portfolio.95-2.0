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

  const onClick = React.useCallback(() => {
    setScreenOnFront(name);

    setWindows({
      ...windows,
      [name]: {
        minimise: false,
        close: false,
      },
    });

    name === "profile" && setSelectedTab(label);
  }, []);

  return (
    <Button
      bg="p95.200"
      color="p95.400"
      textTransform="capitalize"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
