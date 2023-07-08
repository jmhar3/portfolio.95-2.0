import * as React from "react";
import dayjs from "dayjs";
import OutsideClickHandler from "react-outside-click-handler";
import {
  Box,
  Image,
  Stack,
  IconButton,
  Divider,
  Text,
  useToken,
} from "@chakra-ui/react";

import logo from "../../images/heart.png";
import email from "../../images/email.png";

import { NavTab } from "./NavTab";
import { MenuProps } from "./Header";
import { BorderButton } from "../buttons/BorderButton";
import { Clock } from "../../helpers/Clock";

export const NavBar = (props: MenuProps) => {
  const {
    windows,
    setWindows,
    showStartMenu,
    setShowStartMenu,
    setShowProgramsMenu,
    setShowAboutMenu,
    setScreenOnFront,
    setIsMuted,
  } = props;

  const [c100, c200, c300, c400] = useToken("colors", [
    "p95.100",
    "p95.200",
    "p95.300",
    "p95.400",
  ]);

  const onOutsideClick = React.useCallback(() => {
    setShowStartMenu.off();
    setShowAboutMenu.off();
    setShowProgramsMenu.off();
  }, []);

  const onStartClick = React.useCallback(() => {
    setShowStartMenu.toggle();
    if (showStartMenu) {
      setShowAboutMenu.off();
      setShowProgramsMenu.off();
    }
  }, [showStartMenu]);

  return (
    <Stack p="2" pb="1" direction="row" justify="space-between" bg="p95.200">
      <Stack direction="row">
        <Stack direction="row">
          <OutsideClickHandler onOutsideClick={onOutsideClick}>
            <BorderButton onClick={onStartClick}>
              <Image src={logo} aria-label="JH" pr="2" />
              Start
            </BorderButton>
          </OutsideClickHandler>

          {/* add theme <Divider /> */}
        </Stack>

        <hr className="border" />

        <IconButton
          bg="none"
          icon={<Image src={email} />}
          aria-label="E-Mail"
          onClick={() => {
            setWindows({
              ...windows,
              contact: {
                minimise: false,
                close: false,
              },
            });
            setScreenOnFront("contact");
          }}
        />

        <hr className="border" />

        <Stack direction="row">
          {!windows.welcome.close && <NavTab {...props} name="welcome" />}

          {!windows.profile.close && <NavTab {...props} name="profile" />}

          {!windows.dreamjournal.close && (
            <NavTab {...props} name="dreamjournal" />
          )}

          {!windows.glasshouse.close && <NavTab {...props} name="glasshouse" />}

          {!windows.apocalypto.close && <NavTab {...props} name="apocalypto" />}

          {!windows.contact.close && <NavTab {...props} name="contact" />}

          {/* {!windows.music.close &&
      <NavTab {...props} name="music"/>} */}

          {!windows.minesweeper.close && (
            <NavTab {...props} name="minesweeper" />
          )}
        </Stack>
      </Stack>

      <Stack
        px="2"
        bg={c200}
        color={c400}
        align="center"
        direction="row"
        borderRight={`2px solid ${c100}`}
        borderBottom={`2px solid ${c100}`}
        borderLeft={`2px solid ${c400}`}
        borderTop={`2px solid ${c400}`}
        boxShadow={`2px 2px  ${c300} inset`}
      >
        <Image src={logo} onClick={setIsMuted.toggle} h="18px" w="18px" />
        <Text>{Clock()}</Text>
      </Stack>
    </Stack>
  );
};
