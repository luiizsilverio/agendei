import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./card-doctor.style";
import icon from "../../constants/icon";

export default function CardDoctor(props) {
  const { doctor } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        source={doctor.icon === "F" ? icon.female : icon.male} 
        alt={doctor.name} 
      />      
      <View style={styles.content}>
        <Text style={styles.title}>{doctor.name}</Text>
        <Text style={styles.text}>{doctor.specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}