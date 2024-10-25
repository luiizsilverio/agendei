import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./calendar.style";
import CardAgendamento from "../../components/card-agendamento";
import api from "../../lib/api";
// import { appointments } from "../../constants/data";

export default function Calendar() {
  const [appointments, setAppointments] = useState([]);

  async function deleteAppointment(id_appointment) {
    try {
      await api.delete(`appointments/${id_appointment}`);

      loadAppointments();
    }
    catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro, tente novamente mais tarde");
      console.log(error);
    }
  }

  async function loadAppointments() {
    try {
      const response = await api.get("appointments");

      if (response.data) {
        setAppointments(response.data);
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

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={appointments}
        keyExtractor={(item) => item.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardAgendamento appointment={item} onPress={deleteAppointment} />
        )}
      />
    </View>
  )
}