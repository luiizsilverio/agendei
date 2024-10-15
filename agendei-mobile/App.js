import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';

export default function App() {
  return (
    <View styles={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF'
  },
});
