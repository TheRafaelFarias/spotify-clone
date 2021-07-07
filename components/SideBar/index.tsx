import React, { useState } from "react";
import { FiBook, FiHeart, FiHome, FiSearch } from "react-icons/fi";
import PlusIcon from "~/public/plus-icon.svg";
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

  const [playlists, setPlaylists] = useState<
    { id: string; number: number; name: string }[]
  >([
    {
      id: "0",
      number: 1,
      name: "My Playlist #1",
    },
  ]);

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

  const createNewPlaylist = () => {
    const lastPlaylistNumber = playlists[0].number;

    const playlist = {
      id: Math.floor(Math.random() * 20).toString(),
      number: lastPlaylistNumber + 1,
      name: `My Playlist #${lastPlaylistNumber + 1}`,
    };
    const newArray = [playlist, ...playlists];

    setPlaylists(newArray);
  };

  const renderPlaylists = () => {
    return (
      <PlaylistsButtons>
        {playlists.map((playlist) => (
          <PlaylistButton
            key={playlist.id}
            isSelected={sideBarPlaylistActiveButton == playlist.number}
            onClick={() => changeButton(playlist.number, ButtonType.PLAYLIST)}
          >
            {playlist.name}
          </PlaylistButton>
        ))}
      </PlaylistsButtons>
    );
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
          onClick={createNewPlaylist}
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
      {renderPlaylists()}
    </SideBarContent>
  );
};

export default SideBar;
