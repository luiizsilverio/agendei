import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray4,
    padding: 16,
  },
  content: {
    flex: 1
  },
  price: {
    color: COLORS.blue,
    fontSize: FONT_SIZE.sm,
  },
  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray3,
  },

})