import Theme from "./colorConstants";

type ThemeType = typeof Theme;

declare module "styled-components" {
 export interface DefaultTheme extends ThemeType {}
}