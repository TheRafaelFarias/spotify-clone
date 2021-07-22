import React, { useEffect, useState } from "react";
import MusicCard from "~/components/MusicCard";
import SideBar from "~/components/SideBar/";
import { Description, Title } from "~/styles/common";
import { FaPlay } from "react-icons/fa";
import { MadeForYou, MostPlayedData } from "~/data";
import { Navbar } from "~/components/Navbar";
import {
  HomeContainer,
  HomeContent,
  HomeContentContainer,
  MostPlayedCard,
  MostPlayedCardActionsContainer,
  MostPlayedCardImage,
  MostPlayedContainer,
  MostPlayerdCardTitle,
  MusicCards,
  MusicCardsContainer,
  PlayButton,
} from "../styles";

const Home = () => {
  const [cardsDisplayedNumber, setCardsDisplayedNumber] = useState(0);

  const handleWindowSize = () => {
    if (window.innerWidth <= 945) {
      setCardsDisplayedNumber(4);
    } else if (window.innerWidth > 1113) {
      setCardsDisplayedNumber(6);
    } else if (window.innerWidth > 1263) {
      setCardsDisplayedNumber(8);
    }
  };

  useEffect(() => {
    handleWindowSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
  });

  const renderMusicCards = () => {
    return MadeForYou.map((music, index) => (
      <MusicCard
        key={index}
        title={music.title}
        description={music.description}
        imageSrc={music.imageSrc}
        type={music.type}
      />
    ));
  };

  const renderMostPlayedCards = () => {
    let list = [];
    const number = cardsDisplayedNumber == 0 ? 2 : cardsDisplayedNumber;
    for (let i = 0; i < number; i++) {
      const music = MostPlayedData[i];
      list.push(
        <MostPlayedCard key={i}>
          <MostPlayedCardImage src={music.imageSrc} />
          <MostPlayedCardActionsContainer>
            <MostPlayerdCardTitle>{music.title}</MostPlayerdCardTitle>
            <PlayButton>
              <FaPlay />
            </PlayButton>
          </MostPlayedCardActionsContainer>
        </MostPlayedCard>
      );
    }
    return list;
  };

  return (
    <HomeContainer>
      <HomeContentContainer>
        <SideBar />
        <HomeContent>
          <Navbar />
          <MostPlayedContainer>{renderMostPlayedCards()}</MostPlayedContainer>
          <MusicCards>
            <div>
              <Title>Made for you</Title>
              <Description>
                Get better recommendations the more you listen.
              </Description>
            </div>
            <MusicCardsContainer>{renderMusicCards()}</MusicCardsContainer>
          </MusicCards>
          <MusicCards>
            <div>
              <Title>Made for you</Title>
              <Description>
                Get better recommendations the more you listen.
              </Description>
            </div>
            <MusicCardsContainer>{renderMusicCards()}</MusicCardsContainer>
          </MusicCards>
          <MusicCards>
            <div>
              <Title>Made for you</Title>
              <Description>
                Get better recommendations the more you listen.
              </Description>
            </div>
            <MusicCardsContainer>{renderMusicCards()}</MusicCardsContainer>
          </MusicCards>
        </HomeContent>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
