import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import CardService from "../../components/card-service";
import icon from "../../constants/icon";

export default function Services(props) {
  const { id_doctor, name, specialty, icon: iconDoctor } = props.route.params;

  function handleClick(id_service) {
    props.navigation.navigate("schedule", {
      id_doctor,
      id_service
    });
  }

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={iconDoctor === "F" ? icon.female : icon.male} style={styles.image} />
        <Text style={styles.doctor}>{ name }</Text>
        <Text style={styles.specialty}>{ specialty}</Text>
      </View>

      <FlatList 
        data={doctors_services}
        keyExtractor={(item) => item.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardService service={item} onPress={handleClick} />
        )}
      />
    </View>
  )
}