import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./home.style";
import CardDoctor from "../../components/card-doctor";
import api from "../../lib/api";
// import { doctors } from "../../constants/data";

export default function Home(props) {
  const [doctors, setDoctors] = useState([]);

  function handleClick(doctor) {
    props.navigation.navigate("services", doctor);
  }

  async function loadDoctors() {
    try {
      const response = await api.get("doctors");
      setDoctors(response.data);
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
    loadDoctors();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus serviços médicos</Text>

      <FlatList 
        data={doctors}
        keyExtractor={(doctor) => doctor.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardDoctor doctor={item} onPress={handleClick} />
        )}
      />
    </View>
  )
}
