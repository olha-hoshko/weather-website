import { createSlice } from "@reduxjs/toolkit"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { ThemeColors } from "../../enums/enums";
import { ThemeColorProps } from "./types";

const initialState: ThemeColorProps = {
  value: ThemeColors.light,
}

export const ThemeColorSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    changeThemeColor: (state: ThemeColorProps) => {
      if (state.value === ThemeColors.light) {
        state.value = ThemeColors.dark;
      } else {
        state.value = ThemeColors.light;
      }
    }
  }
});

export const useThemeColor = () => {
  const themeColor = useAppSelector((state: RootState) => state.themeColor.value);
  const dispatch = useAppDispatch();

  return {
    themeColor,
    dispatch,
    changeThemeColor: () => dispatch(ThemeColorSlice.actions.changeThemeColor()),
  }
}

export const themeColorReducer = ThemeColorSlice.reducer;