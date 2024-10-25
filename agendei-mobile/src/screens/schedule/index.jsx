import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./schedule.style";
import { ptBR } from "../../constants/calendar";
import Button from "../../components/button";
import api from "../../lib/api";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function Schedule(props) {
  const { id_doctor, id_service } = props.route.params;
  const hoje = new Date().toISOString().slice(0, 10);
  const [data, setData] = useState(hoje);
  const [horario, setHorario] = useState("9:00");

  async function handleSchedule() {
    try {
      const response = await api.post("appointments", {
        id_doctor,
        id_service,
        booking_date: data, 
        booking_hour: horario
      });

      if (response.data?.id_appointment) {
        props.navigation.popToTop();
      }
    }
    catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro, tente novamente mais tarde");
      console.log(error);
    }
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
        <Button text="Confirmar Agendamento" onPress={handleSchedule} />
      </View>
    </View>
  )
}