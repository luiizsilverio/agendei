import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    flex: 1,
    gap: 10,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 12,
    borderRadius: 4,
    padding: 8,
  },
  content: {
    justifyContent: "center"
  },
  title: {
    color: COLORS.gray1,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold"
  },
  text: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },

})
