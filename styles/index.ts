import styled from "styled-components";
import { MusicCardContainer } from "~/components/MusicCard/styles";

export const HomeContainer = styled.div`
  display: block;
`;

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  overflow-y: scroll;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const PlayButton = styled.button`
  display: flex;
  opacity: 0%;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 10px;
  border: none;
  transition: opacity 0.3s ease;
  border-radius: 500px;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
`;

export const MostPlayedContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;

export const MostPlayedCard = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  background-color: hsla(0, 0%, 100%, 0.1);
  cursor: pointer;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }

  &:hover ${PlayButton} {
    cursor: pointer;
    opacity: 100%;
  }
`;

export const MostPlayedCardImage = styled.img`
  min-width: 80px;
  min-height: 80px;
`;

export const MostPlayedCardActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  padding: 16px;
`;

export const MostPlayerdCardTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const MusicCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const MusicCardsContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-x: auto;
  gap: 30px;

  > ${MusicCardContainer} {
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.itemsBackground};
  }
`;
