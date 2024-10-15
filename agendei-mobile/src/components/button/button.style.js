import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const getStyles = (disabled) => StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor:  disabled ? COLORS.gray3 : COLORS.blue,
    color: COLORS.white,
    padding: 12,
    borderRadius: 8
  },
  text: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  }
})
