import React from "react";
import { MusicCardProps } from "~/typings";
import {
  MusicCardContainer,
  MusicCardDescription,
  MusicCardImage,
  MusicCardTitle,
} from "./styles";

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  description,
  imageSrc,
  type,
}) => {
  return (
    <MusicCardContainer>
      <MusicCardImage type={type} src={imageSrc} alt="" />
      <MusicCardTitle>{title}</MusicCardTitle>
      <MusicCardDescription>{description}</MusicCardDescription>
    </MusicCardContainer>
  );
};

export default MusicCard;
