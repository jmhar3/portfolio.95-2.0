import { Stack, useToken } from "@chakra-ui/react";
import { MenuProps } from "./Header";
import { MenuButton } from "./MenuButton";

export const StartMenu = (props: MenuProps) => {
  const { showStartMenu } = props;

  const [c100, c200, c300, c400] = useToken("colors", [
    "p95.100",
    "p95.200",
    "p95.300",
    "p95.400",
  ]);

  return (
    <Stack
      spacing="0"
      borderLeft={`2px solid ${c100}`}
      borderTop={`2px solid ${c100}`}
      borderRight={`2px solid ${c400}`}
      borderBottom={`2px solid ${c400}`}
    >
      <MenuButton
        {...props}
        clickable={false}
        name="about"
        label="Profile"
        isDropdown={false}
      />

      {/* <MenuButton
    {...props}
    clickable={true}
    name="resume"
    label="Resume"
   />

   <MenuButton
    {...props}
    clickable={false}
    name="programs"
    label="Programs"
   /> */}

      <MenuButton
        {...props}
        name="minesweeper"
        label="MineSweeper"
        isDropdown={false}
      />

      <MenuButton {...props} name="welcome" label="Run" isDropdown={false} />
    </Stack>
  );
};
