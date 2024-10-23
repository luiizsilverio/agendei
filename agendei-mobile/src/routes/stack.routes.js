import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Services from "../screens/services";
import Schedule from "../screens/schedule";

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas privadas *****
export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="services"
        component={Services}
      />
      <Screen 
        name="schedule"
        component={Schedule}
      />
    </Navigator>
  )
}