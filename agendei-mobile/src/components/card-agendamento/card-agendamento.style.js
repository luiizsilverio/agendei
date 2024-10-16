import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: 4,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 12,
    paddingBottom: 12,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 4,
    // flex: 1
  },
  contentData: {
    gap: 4
  },  
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  image: {
    width: 28,
    height: 28,
  },
  btnContainer: {
    paddingBottom: 6
  },
  title: {
    color: COLORS.gray1,
    fontSize: FONT_SIZE.md,
    // fontWeight: "bold"
  },
  text: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },

})
