import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.div`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  color: white;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #282828;
    cursor: pointer;
  }

  & > * {
    vertical-align: bottom;
  }
`;

export const UpgradeButton = styled.button`
  height: 32px;
  width: 100px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    font-size: 13.5px;
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  border-radius: 50px;
  padding: 0px;
  padding-left: 2px;
  height: 32px;
  width: 150px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #282828;
  }

  & > img {
    width: 28px;
    height: 28px;
    border-radius: 50px;
    margin: 0;
    margin-right: 10px;
  }
`;
