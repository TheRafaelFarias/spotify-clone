import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadiusSmall: string
    
    colors: {
      green: string
      spaceGray: string
      darkGray: string
      grizzly: string
      white: string
    }
  }
}