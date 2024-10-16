import { FlatList, Text, View } from "react-native";
import { styles } from "./calendar.style";
import { appointments } from "../../constants/data";
import CardAgendamento from "../../components/card-agendamento";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={appointments}
        keyExtractor={(item) => item.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardAgendamento appointment={item} />
        )}
      />
    </View>
  )
}