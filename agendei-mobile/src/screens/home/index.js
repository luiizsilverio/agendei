import { FlatList, Text, View } from "react-native";
import { styles } from "./home.style";
import { doctors } from "../../constants/data";
import CardDoctor from "../../components/card-doctor";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus serviços médicos</Text>

      <FlatList 
        data={doctors}
        keyExtractor={(doctor) => doctor.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardDoctor doctor={item} />
        )}
      />
    </View>
  )
}
