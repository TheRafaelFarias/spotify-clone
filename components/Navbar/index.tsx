import React from "react";
import {
  Button,
  NavbarContainer,
  ProfileButton,
  Row,
  UpgradeButton,
} from "~/components/Navbar/styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface NavbarProps {
  renderUpgradeButton?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  renderUpgradeButton,
}) => {
  return (
    <NavbarContainer>
      <Row>
        <Button>
          <FiChevronLeft fontSize={20} />
        </Button>
        <Button>
          <FiChevronRight fontSize={20} />
        </Button>
      </Row>
      <Row>
        <UpgradeButton>Upgrade</UpgradeButton>
        <ProfileButton>
          <img src="https://i.scdn.co/image/ab6775700000ee8527f4cbb35f104d92ec7008eb" />
          Rafael Farias
        </ProfileButton>
      </Row>
    </NavbarContainer>
  );
};
