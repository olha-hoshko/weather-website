import { ThemeColors } from "../../enums/enums"

export type ThemeIconProps = {
  currentTheme: ThemeColors,
}

export type ApplyClassNameProps = ThemeIconProps & {
  currentIcon: ThemeColors,
}