import * as React from "react";
import dayjs from "dayjs";
import OutsideClickHandler from "react-outside-click-handler";
import { Box, Image, Stack, IconButton, Divider } from "@chakra-ui/react";

import logo from "../../images/heart.png";
import email from "../../images/email.png";

import { NavTab } from "./NavTab";
import { MenuProps } from "./Header";
import { BorderButton } from "../buttons/BorderButton";

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

  const time = React.useMemo(() => dayjs().format("hh:mmA"), [dayjs]);

  return (
    <Stack p="2" pb="1" direction="row" justify="space-between" bg="p95.200">
      <Stack direction="row">
        <Stack direction="row">
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowStartMenu.off();
              setShowAboutMenu.off();
              setShowProgramsMenu.off();
            }}
          >
            <BorderButton
              onClick={() => {
                setShowStartMenu.toggle();
                if (showStartMenu) {
                  setShowAboutMenu.off();
                  setShowProgramsMenu.off();
                }
              }}
            >
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

      <Box>
        <Image src={logo} onClick={setIsMuted.toggle} />
        {time}
      </Box>
    </Stack>
  );
};
