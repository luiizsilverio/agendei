import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./login.style";
import icons from "../../constants/icon";
import Button from "../../components/button";

export default function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icons.logo} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button text="Acessar" />
        </View>

        <View style={styles.footer}>
          <Text>Não tenho conta. </Text>
          <TouchableOpacity onPress={() => Alert.alert("clicou")}>
            <Text style={styles.link}>Criar conta agora</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}