import styled from "styled-components";

export const MusicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  box-shadow: -7px 7px 21px ${(props) => props.theme.colors.itemsBackground};
  background-color: ${(props) => props.theme.colors.itemsBackground};
  max-width: 180px;
`;

export const MusicCardImage = styled.img<{ type: "playlist" | "artist" }>`
  width: 150px;
  border-radius: ${(props) => props.type == "artist" ? "100px" : "5px"};
`;

export const MusicCardTitle = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const MusicCardDescription = styled.p`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  opacity: 30%;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.white};
`;
