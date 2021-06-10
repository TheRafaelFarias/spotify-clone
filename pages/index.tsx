import React, { useState } from "react";
import { FiBook, FiHeart, FiHome, FiSearch } from "react-icons/fi";
import {
  HomeContainer,
  HomeContentContainer,
  Logo,
  SideBarContent,
  SideBarPrimaryButton,
  SideBarPrimaryButtons,
  TracksContent,
  TracksContentButton,
} from "../styles";
import PlusIcon from "../public/plus-icon.svg";

enum ButtonType {
  PRIMARY,
  TRACK,
}

const Home = () => {
  const [sideBarPrimaryActiveButton, setSideBarPrimaryActiveButton] =
    useState(1);
  const [sideBarTrackActiveButton, setSideBarTrackActiveButton] = useState(0);

  const changeButton = (number: number, type: ButtonType) => {
    switch (type) {
      case ButtonType.PRIMARY:
        setSideBarPrimaryActiveButton(number);
        setSideBarTrackActiveButton(0);
        break;

      case ButtonType.TRACK:
        setSideBarTrackActiveButton(number);
        setSideBarPrimaryActiveButton(0);
        break;
    }
  };

  return (
    <HomeContainer>
      <HomeContentContainer>
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
        </SideBarContent>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
