import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import Account from './src/screens/account';
import Home from './src/screens/home';
import Calendar from './src/screens/calendar';

export default function App() {
  return (
    <View styles={styles.container}>
      <StatusBar style="auto" />
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF'
  },
});
