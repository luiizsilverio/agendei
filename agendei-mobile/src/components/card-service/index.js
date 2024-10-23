import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./card-service.style";
import icon from "../../constants/icon";
import Button from "../button";

export default function CardService(props) {
  const { service } = props;

  return (
      <View style={styles.container} >
        <View style={styles.content}>
          <Text style={styles.text}>{service.description}</Text>
          <Text style={styles.price}>
            {service.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </Text>
        </View>
        <View>
          <Button text="Agendar" onPress={() => props.onPress(service.id_service)} />
        </View>
      </View>
  )
}