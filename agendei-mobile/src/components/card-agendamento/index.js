import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./card-agendamento.style";
import icon from "../../constants/icon";

export default function CardAgendamento(props) {
  const { appointment } = props;

  return (
    <TouchableOpacity style={styles.container}>    
      <View style={styles.content}>
        <Text style={styles.title}>
          {appointment.service} - {appointment.doctor}
        </Text>
        <Text style={styles.text}>{appointment.specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}