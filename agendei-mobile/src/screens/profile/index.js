import { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native"
import { styles } from "./profile.style";
import api from "../../lib/api";
import Button from "../../components/button";
import { COLORS } from "../../constants/theme";
import { authContext } from "../../contexts/auth-context";

export default function Profile() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(authContext);

  function handleLogout() {
    api.defaults.headers.common['Authorization'] = "";
    setUser({});
  }

  async function loadProfile() {
    try {
      const response = await api.get("users/profile");

      if (response.data) {
        setNome(response.data?.name);
        setEmail(response.data?.email);
      }
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
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{nome}</Text>  
      </View>
      
      <View style={styles.itemContainer}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Button 
          text="Desconectar" 
          bgColor={COLORS.red} 
          onPress={handleLogout}
        />
      </View>
    </View>
  )
}