import { Image, Text, TextInput, View } from "react-native"
import { styles } from "./login.style"
import logoImg from "../../assets/logo.png";
import Button from "../../components/button";

export default function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={logoImg} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Senha" />
          <Button text="Acessar" />
        </View>

        <View style={styles.footer}>
          <Text>Não tenho conta.</Text>
          <Text>Criar conta agora</Text>
        </View>
      </View>
  )
}