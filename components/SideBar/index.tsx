import React, { useState } from "react"
import { FiBook, FiHeart, FiHome, FiSearch } from "react-icons/fi";
import PlusIcon from "~/public/plus-icon.svg"
import {
  Logo,
  SideBarContent,
  SideBarPrimaryButton,
  SideBarPrimaryButtons,
  TracksContent,
  TracksContentButton,
  PlaylistsButtons,
  PlaylistButton,
  Bar,
} from "./styles";

enum ButtonType {
  PRIMARY,
  TRACK,
  PLAYLIST,
}

const SideBar: React.FC = () => {
  const [sideBarPrimaryActiveButton, setSideBarPrimaryActiveButton] =
    useState(1);
  const [sideBarTrackActiveButton, setSideBarTrackActiveButton] = useState(0);
  const [sideBarPlaylistActiveButton, setSideBarPlaylistActiveButton] =
    useState(0);

  const changeButton = (number: number, type: ButtonType) => {
    switch (type) {
      case ButtonType.PRIMARY:
        setSideBarPrimaryActiveButton(number);
        setSideBarTrackActiveButton(0);
        setSideBarPlaylistActiveButton(0);
        break;

      case ButtonType.TRACK:
        setSideBarTrackActiveButton(number);
        setSideBarPrimaryActiveButton(0);
        setSideBarPlaylistActiveButton(0);
        break;

      case ButtonType.PLAYLIST:
        setSideBarPlaylistActiveButton(number);
        setSideBarTrackActiveButton(0);
        setSideBarPrimaryActiveButton(0);
        break;
    }
  };

  return (
    <SideBarContent>
      <Logo />
      <SideBarPrimaryButtons>
        <SideBarPrimaryButton
          isSelected={sideBarPrimaryActiveButton == 1}
          onClick={() => changeButton(1, ButtonType.PRIMARY)}
        >
          <FiHome />
          <p>Home</p>
        </SideBarPrimaryButton>
        <SideBarPrimaryButton
          isSelected={sideBarPrimaryActiveButton == 2}
          onClick={() => changeButton(2, ButtonType.PRIMARY)}
        >
          <FiSearch />
          <p>Search</p>
        </SideBarPrimaryButton>
        <SideBarPrimaryButton
          isSelected={sideBarPrimaryActiveButton == 3}
          onClick={() => changeButton(3, ButtonType.PRIMARY)}
        >
          <FiBook />
          <p>Your library</p>
        </SideBarPrimaryButton>
      </SideBarPrimaryButtons>
      <TracksContent>
        <TracksContentButton
          isSelected={sideBarTrackActiveButton == 1}
          onClick={() => changeButton(1, ButtonType.TRACK)}
        >
          <PlusIcon />
          <p>Create Playlist</p>
        </TracksContentButton>
        <TracksContentButton
          isSelected={sideBarTrackActiveButton == 2}
          onClick={() => changeButton(2, ButtonType.TRACK)}
        >
          <FiHeart />
          <p>Liked Songs</p>
        </TracksContentButton>
      </TracksContent>
      <Bar />
      <PlaylistsButtons>
        <PlaylistButton
          isSelected={sideBarPlaylistActiveButton == 1}
          onClick={() => changeButton(1, ButtonType.PLAYLIST)}
        >
          My Playlist
        </PlaylistButton>
        <PlaylistButton
          isSelected={sideBarPlaylistActiveButton == 2}
          onClick={() => changeButton(2, ButtonType.PLAYLIST)}
        >
          My Playlist
        </PlaylistButton>
        <PlaylistButton
          isSelected={sideBarPlaylistActiveButton == 3}
          onClick={() => changeButton(3, ButtonType.PLAYLIST)}
        >
          My Playlist
        </PlaylistButton>
        <PlaylistButton
          isSelected={sideBarPlaylistActiveButton == 4}
          onClick={() => changeButton(4, ButtonType.PLAYLIST)}
        >
          My Playlist
        </PlaylistButton>
        <PlaylistButton
          isSelected={sideBarPlaylistActiveButton == 5}
          onClick={() => changeButton(5, ButtonType.PLAYLIST)}
        >
          My Playlist
        </PlaylistButton>
      </PlaylistsButtons>
    </SideBarContent>
  );
};

export default SideBar;
