import React, { useState } from "react";
import { FiBook, FiHome, FiSearch } from "react-icons/fi";
import {
  HomeContainer,
  HomeContentContainer,
  Logo,
  SideBarContent,
  SideBarPrimaryButton,
  SideBarPrimaryButtons,
} from "../styles";

enum ButtonType {
  PRIMARY
}

const Home = () => {
  const [sideBarPrimaryActiveButton, setSideBarPrimaryActiveButton] =
    useState(1);

  const changeButton = (number: number, type: ButtonType) => {
    switch (type) {
      case ButtonType.PRIMARY:
        setSideBarPrimaryActiveButton(number);
        setSideBarTrackActiveButton(0);
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
        </SideBarContent>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
