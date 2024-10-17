import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,    
    backgroundColor: COLORS.white,
    // width: '100%',
    // height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 16,
  }
})