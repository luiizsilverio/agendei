import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from "../screens/account";
import Login from "../screens/login";

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas públicas *****
export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="login"
        component={Login}
      />
      <Screen 
        name="account"
        component={Account}
      />
    </Navigator>
  )
}