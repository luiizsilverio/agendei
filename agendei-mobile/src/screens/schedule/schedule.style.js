import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,    
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 16,
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  }
})