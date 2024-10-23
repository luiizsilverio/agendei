import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import CardService from "../../components/card-service";
import icon from "../../constants/icon";

export default function Services(props) {

  function handleClick(id_service) {
    props.navigation.navigate("schedule");
  }

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon.female} style={styles.image} />
        <Text style={styles.doctor}>Dra. Nise da Silva</Text>
        <Text style={styles.specialty}>Cirurgia Plástica</Text>
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