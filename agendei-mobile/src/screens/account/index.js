import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./account.style"
import icons from "../../constants/icon";
import Button from "../../components/button";

export default function Account() {
  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icons.logo} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button text="Criar Conta" />
        </View>

        <View style={styles.footer}>
          <Text>Já tenho conta. </Text>
          <TouchableOpacity onPress={() => Alert.alert("clicou")}>
            <Text style={styles.link}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}