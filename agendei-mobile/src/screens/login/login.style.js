import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: '100%',
    padding: 50,
    justifyContent: "space-between"
  },
  containerLogo: {
    alignItems: "center"
  },
  image: {
    maxWidth: 140,
    objectFit: "contain"
    // width: 100,
    // height: 23
  },
  text: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.blue,
    textAlign: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  formContainer: {
    rowGap: 14
  },
  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6
  },
  link: {
    color: COLORS.blue,
  },
})