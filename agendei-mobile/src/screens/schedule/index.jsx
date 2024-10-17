import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./schedule.style";
import { ptBR } from "../../constants/calendar";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function Schedule() {

  return (
    <View  style={styles.container}>
      <Calendar theme={styles.theme} />
    </View>
  )
}