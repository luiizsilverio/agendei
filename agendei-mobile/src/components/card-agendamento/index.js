import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./card-agendamento.style";
import icon from "../../constants/icon";
import { COLORS } from "../../constants/theme";
import Button from "../button";

export default function CardAgendamento(props) {
  const { appointment } = props;

  return (
    <View style={styles.container}>    
      <Text style={styles.title}>{appointment.service} - {appointment.doctor}</Text>
      <Text style={styles.text}>{appointment.specialty}</Text>

      <View style={styles.content}>
        <View style={styles.contentData}>
          <View style={styles.iconContainer}>
            <Image source={icon.calendar} alt="Data do agendamento" style={styles.image} />
            <Text style={styles.text}>{appointment.booking_date}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Image source={icon.clock} alt="Hora do agendamento" style={styles.image} />
            <Text style={styles.text}>{appointment.booking_hour}</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Button 
            text="Cancelar Reserva" 
            bgColor={COLORS.red} 
            onPress={() => props.onPress(appointment.id_appointment)} 
          />        
        </View>
      </View>
    </View>
  )
}