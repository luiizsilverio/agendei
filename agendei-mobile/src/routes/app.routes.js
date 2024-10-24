import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Services from "../screens/services";
import Schedule from "../screens/schedule";
import { TabRoutes } from './tab.routes';
import { COLORS } from '../constants/theme';
import { StyleSheet } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas privadas *****
export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name="main"
        component={TabRoutes}
        options={{ headerShown: false }} 
      />
      <Screen 
        name="services"
        component={Services}
        options={{ 
          headerTitle: "Serviços", 
          headerTitleAlign: "center",
          headerTintColor: COLORS.white,
          headerShadowVisible: false,
          headerStyle: styles.services
        }} 
      />
      <Screen 
        name="schedule"
        component={Schedule}
        options={{ 
          headerTitle: "Fazer uma reserva", 
          headerTitleAlign: "center",
          headerTintColor: COLORS.blue,
          headerShadowVisible: false,
          headerStyle: styles.header
        }} 
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white
  },
  services: {
    backgroundColor: COLORS.blue
  }
})