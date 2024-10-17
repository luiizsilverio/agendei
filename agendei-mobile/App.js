import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes';
import Services from './src/screens/services';
import Schedule from './src/screens/schedule';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Routes />
        {/* <Services /> */}
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