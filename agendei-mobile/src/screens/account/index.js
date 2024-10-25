import { useContext, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./account.style"
import icons from "../../constants/icon";
import Button from "../../components/button";
import api from "../../lib/api";
import { authContext } from "../../contexts/auth-context";

export default function Account(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(authContext);

  async function handleRegister() {
    try {
      const response = await api.post('users/register', {
        name,
        email,
        password
      })

      setUser(response.data);
    }
    catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro, tente novamente mais tarde");
      console.log(error);
    }
  }

  function handleLogin() {
    props.navigation.goBack();
  }

  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icons.logo} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Crie sua conta</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Nome" 
            onChangeText={setName} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="E-mail" 
            keyboardType="email-address" 
            onChangeText={setEmail} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            secureTextEntry 
            onChangeText={setPassword} 
          />
          <Button text="Criar Conta" onPress={handleRegister} />
        </View>

        <View style={styles.footer}>
          <Text>Já tenho conta. </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.link}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}