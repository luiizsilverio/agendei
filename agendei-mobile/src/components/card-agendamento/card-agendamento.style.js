import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.gray4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    // alignItems: "flex-end",
    // flex: 1
  },
  contentData: {
    gap: 4,
    flex: 1
  },  
  iconContainer: {
    flexDirection: "row",
    gap: 4
  },
  image: {
    width: 28,
    height: 28,
  },
  btnContainer: {},
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
