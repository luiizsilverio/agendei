import { useContext, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./login.style";
import icons from "../../constants/icon";
import Button from "../../components/button";
import api from "../../constants/api";
import { authContext } from "../../contexts/auth-context";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(authContext);

  async function handleLogin(props) {
    try {
      const response = await api.post('users/login', {
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

  function handleRegister() {
    props.navigation.navigate("account");
  }

  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icons.logo} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Faça o Login</Text>
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
          <Button text="Acessar" onPress={handleLogin} />
        </View>

        <View style={styles.footer}>
          <Text>Não tenho conta. </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.link}>Criar conta agora</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}