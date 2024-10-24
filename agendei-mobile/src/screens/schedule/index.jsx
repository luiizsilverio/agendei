import { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./schedule.style";
import { ptBR } from "../../constants/calendar";
import Button from "../../components/button";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function Schedule(props) {
  const { id_doctor, id_service } = props.route.params;
  const hoje = new Date().toISOString().slice(0, 10);
  const [data, setData] = useState(hoje);
  const [horario, setHorario] = useState("9:00");

  function handlePress() {
    console.log( id_doctor, id_service, data, horario);
  }

  return (
    <View  style={styles.container}>
      <Calendar 
        theme={styles.calendar} 
        onDayPress={(day) => setData(day.dateString)}
        markedDates={{
          [data]: { selected: true },
        }}
        minDate={new Date().toDateString()}
      />

      <Text style={styles.horario}>Horário</Text>

      <Picker 
        selectedValue={horario} 
        onValueChange={(itemValue, itemIndex) => {
          setHorario(itemValue);
      }}>
        <Picker.Item label="09:00" value="09:00" />
        <Picker.Item label="09:30" value="09:30" />
        <Picker.Item label="10:00" value="10:00" />
      </Picker>
  
      <View style={styles.btnContainer}>
        <Button text="Confirmar Agendamento" onPress={handlePress} />
      </View>
    </View>
  )
}