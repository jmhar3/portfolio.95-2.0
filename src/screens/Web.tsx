import * as React from "react";
import { useBoolean, Stack } from "@chakra-ui/react";

// import Clouds from '../background/Clouds.js';
// import Stars from '../background/Stars.js';
// import Moon from '../background/Moon.js';

import { Links } from "../components/Links";
import { Header } from "../components/header/Header";

// import Window from './components/windows/Window';
// import Welcome from './components/windows/Welcome';
// import Profile from './components/windows/Profile';
// import DreamJournal from './components/windows/DreamJournal';
// import Glasshouse from './components/windows/Glasshouse';
// import Apocalypto from './components/windows/Apocalypto';
// import Contact from './components/windows/Contact';
// import Resume from './components/windows/Resume';
// import Music from './components/windows/Music';
// import MineSweeper from './components/windows/MineSweeper';

export interface WindowProps {
  minimise: boolean;
  close: boolean;
}

export interface WindowsProps {
  [key: string]: WindowProps;
}

export interface UseBooleanProps {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export interface WebProps {
  windows: WindowsProps;
  setWindows: React.Dispatch<React.SetStateAction<WindowsProps>>;
  screenOnFront: string;
  setScreenOnFront: React.Dispatch<React.SetStateAction<string>>;
  isMuted: boolean;
  setIsMuted: UseBooleanProps;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Web = () => {
  const [isMuted, setIsMuted] = useBoolean(false);

  const [screenOnFront, setScreenOnFront] = React.useState("welcome");

  const [windows, setWindows] = React.useState<WindowsProps>({
    welcome: {
      minimise: false,
      close: false,
    },
    profile: {
      minimise: false,
      close: true,
    },
    dreamjournal: {
      minimise: false,
      close: true,
    },
    glasshouse: {
      minimise: false,
      close: true,
    },
    apocalypto: {
      minimise: false,
      close: true,
    },
    contact: {
      minimise: false,
      close: true,
    },
    resume: {
      minimise: false,
      close: true,
    },
    music: {
      minimise: true,
      close: false,
    },
    minesweeper: {
      minimise: false,
      close: true,
    },
  });

  const [selectedTab, setSelectedTab] = React.useState("about");

  const props: WebProps = {
    windows: windows,
    setWindows: setWindows,
    screenOnFront: screenOnFront,
    setScreenOnFront: setScreenOnFront,
    isMuted: isMuted,
    setIsMuted: setIsMuted,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
  };

  return (
    <>
      <Stack>
        <Links />

        <Header {...props} />

        {/* 
        {!windows.welcome.close && (
          <Window
            {...props}
            name="welcome"
            topValues={[5, 50]}
            leftValues={[15, 60]}
            body={<Welcome {...props} />}
          />
        )}

        {!windows.profile.close && (
          <Window
            {...props}
            name="profile"
            topValues={[5, 15]}
            leftValues={[15, 50]}
            body={<Profile {...props} />}
          />
        )}

        {!windows.dreamjournal.close && (
          <Window
            {...props}
            name="dreamjournal"
            topValues={[3, 6]}
            leftValues={[6, 30]}
            body={<DreamJournal />}
          />
        )}

        {!windows.glasshouse.close && (
          <Window
            {...props}
            name="glasshouse"
            topValues={[3, 6]}
            leftValues={[6, 30]}
            body={<Glasshouse />}
          />
        )}

        {!windows.apocalypto.close && (
          <Window
            {...props}
            name="apocalypto"
            topValues={[3, 6]}
            leftValues={[6, 30]}
            body={<Apocalypto />}
          />
        )}

        {!windows.contact.close && (
          <Window
            {...props}
            name="contact"
            topValues={[10, 30]}
            leftValues={[10, 60]}
            body={<Contact />}
          />
        )}

        {!windows.resume.close && (
          <Window
            {...props}
            name="resume"
            topValues={[3, 6]}
            leftValues={[6, 30]}
            body={<Resume />}
          />
        )}

        {!windows.music.close && (
          <Window
            {...props}
            name="music"
            topValues={[10, 30]}
            leftValues={[20, 60]}
            body={<Music {...props} />}
          />
        )}

        {!windows.minesweeper.close && (
          <Window
            {...props}
            name="minesweeper"
            topValues={[10, 30]}
            leftValues={[20, 60]}
            body={<MineSweeper />}
          />
        )} */}
      </Stack>

      {/* <Stars />
      <Clouds />
      <Moon /> */}
    </>
  );
};
