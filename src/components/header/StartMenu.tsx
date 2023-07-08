import { Stack } from "@chakra-ui/react";
import { MenuProps } from "./Header";
import { StartTab } from "./StartTab";

export const StartMenu = (props: MenuProps) => {
  const { showStartMenu } = props;

  return (
    <Stack display={showStartMenu ? "visible" : "hidden"}>
      <StartTab {...props} clickable={false} name="about" label="Profile" />

      {/* <StartTab
    {...props}
    clickable={true}
    name="resume"
    label="Resume"
   />

   <StartTab
    {...props}
    clickable={false}
    name="programs"
    label="Programs"
   /> */}

      <StartTab
        {...props}
        clickable={true}
        name="minesweeper"
        label="MineSweeper"
      />

      <StartTab {...props} clickable={true} name="welcome" label="Run" />
    </Stack>
  );
};
