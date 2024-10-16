import { Text, TextInput, View } from "react-native"
import { styles } from "./profile.style";
import Button from "../../components/button";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Luiz S.</Text>  
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>luiiz.silverio@gmail.com</Text>
      </View>
    </View>
  )
}