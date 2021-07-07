import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadiusSmall: string;

    colors: {
      green: string;
      spaceGray: string;
      darkGray: string;
      grizzly: string;
      background: string;
      itemsBackground: string;
      white: string;
    };
  }
}

export interface MusicCardProps {
  title: string;
  description: string
  imageSrc?: string;
  type: "playlist" | "artist";
}
