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

const Home = () => {
  const [sideBarActiveButton, setSideBarActiveButton] = useState(1);

  return (
    <HomeContainer>
      <HomeContentContainer>
        <SideBarContent>
          <Logo />
          <SideBarPrimaryButtons>
            <SideBarPrimaryButton
              isSelected={sideBarActiveButton == 1}
              onClick={() => setSideBarActiveButton(1)}
            >
              <FiHome />
              <p>Home</p>
            </SideBarPrimaryButton>
            <SideBarPrimaryButton
              isSelected={sideBarActiveButton == 2}
              onClick={() => setSideBarActiveButton(2)}
            >
              <FiSearch />
              <p>Search</p>
            </SideBarPrimaryButton>
            <SideBarPrimaryButton
              isSelected={sideBarActiveButton == 3}
              onClick={() => setSideBarActiveButton(3)}
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
