import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF'
  },
});
