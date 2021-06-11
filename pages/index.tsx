import React from "react";
import SideBar from "~/components/SideBar/";
import { HomeContainer, HomeContentContainer } from "../styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContentContainer>
        <SideBar />
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
