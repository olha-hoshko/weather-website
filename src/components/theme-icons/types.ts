import { ThemeChangeButtonIcons } from "../../enums/enums"

export type ThemeIconProps = {
  currentTheme: ThemeChangeButtonIcons,
}

export type ApplyClassNameProps = ThemeIconProps & {
  currentIcon: ThemeChangeButtonIcons,
}