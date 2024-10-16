import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const getStyles = (bgColor) => StyleSheet.create({
  btn: {
    // width: "100%",
    backgroundColor:  bgColor || COLORS.blue,
    color: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8
  },
  text: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  }
})
