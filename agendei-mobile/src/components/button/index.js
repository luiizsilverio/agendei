import { Text, TouchableOpacity } from "react-native";
import { getStyles } from "./button.style";

function Button(props) {
  const { text, bgColor, disabled } = props;
  const styles = getStyles(bgColor);

  return (
    <TouchableOpacity 
      disabled={ disabled } 
      onPress={props.onPress}
      style={styles.btn}
    >
      <Text style={styles.text}>{ text }</Text>
    </TouchableOpacity>
  )
}

export default Button;