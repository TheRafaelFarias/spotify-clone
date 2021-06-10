import styled from "styled-components";
import SpotifyLogo from "../public/logo-spotify.svg";

export const HomeContainer = styled.div`
  display: block;
`;

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideBarContent = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.spaceGray};
  max-width: 15em;
`;

export const Logo = styled(SpotifyLogo)`
  width: 10em;
  padding: 1em;
  margin: 1em 0em;
  color: white;
`;

export const SideBarPrimaryButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 1em;
`;

export const SideBarPrimaryButton = styled.button<{
  isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 1em;
  border: none;
  margin: 0em 0.5em;
  padding-left: 1em;
  font-size: 0.8em;
  transition: 0.5s;

  opacity: ${(props) => !props.isSelected && "50%"};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.grizzly : "none"};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadiusSmall};

  &:hover {
    opacity: 95%;
    cursor: pointer;
  }
`;
