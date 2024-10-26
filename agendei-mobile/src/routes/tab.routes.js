import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Calendar from "../screens/calendar";
import Profile from "../screens/profile";
import icon from "../constants/icon";
import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

export function TabRoutes() { 
  return (
    <Tab.Navigator screenOptions={{ 
      // headerShown: false, 
      headerTitleAlign: "center",
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#121212',
    }}>
      <Tab.Screen 
        name='home' 
        component={Home} 
        options={{
          headerTitle: (props) => (
            <View style={styles.header}>
              <Image source={icon.logo} style={styles.logo} />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image 
              source={icon.home} 
              style={[styles.image, {opacity: focused ? 1: 0.5}]} 
            />
            )
          }
        }
      />
      <Tab.Screen 
        name='calendar' 
        component={Calendar} 
        options={{
          headerTitle: 'Minhas Reservas',
          headerTintColor: COLORS.blue,
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={icon.calendar} 
              style={[styles.image, {opacity: focused ? 1: 0.5}]} 
            />
          )
        }}
      />
      <Tab.Screen 
        name='profile' 
        component={Profile} 
        options={{
          headerTitle: 'Meu Perfil',
          headerTintColor: COLORS.blue,
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={icon.profile} 
              style={[styles.image, {opacity: focused ? 1: 0.5}]} 
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 140,
    objectFit: "contain",
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    color: COLORS.blue,
    fontWeight: "bold"

  }
})