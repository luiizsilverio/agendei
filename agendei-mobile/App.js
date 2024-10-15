import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import Account from './src/screens/account';

export default function App() {
  return (
    <View styles={styles.container}>
      <StatusBar style="auto" />
      <Account />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF'
  },
});
