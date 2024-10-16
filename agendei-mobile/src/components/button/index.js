import { Alert, Text, TouchableOpacity } from "react-native";
import { getStyles } from "./button.style";

function Button({ text, bgColor, disabled }) {
  const styles = getStyles(bgColor);

  function handlePress() {
    Alert.alert("clicou no botão");
  }

  return (
    <TouchableOpacity 
      disabled={ disabled } 
      onPress={handlePress}
      style={styles.btn}
    >
      <Text style={styles.text}>{ text }</Text>
    </TouchableOpacity>
  )
}

export default Button;