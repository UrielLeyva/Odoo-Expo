import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
//Screens
import RegisterScreen  from '../screens/RegisterScreen'
import CheckScreen from '../screens/CheckScreen'
import RouteScreen from '../screens/RouteScreen'
import HistoryScreen from '../screens/HistoryScreen'
import LoginScreen from '../screens/LoginScreen'

const Auth = createNativeStackNavigator();

function MyAuth () {
  return (
    <Auth.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name='LoginScreen' component={LoginScreen} />
      <Auth.Screen name='RegisterScreen' component={RegisterScreen} />
    </Auth.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTab () {
  return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >  
        <Tab.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              tabBarLabel: 'Register',
              tabBarIcon: () => <MaterialCommunityIcons name="login" size={24} color="#0c4474" />,
            }}
          />
          <Tab.Screen
            name="CheckScreen"
            component={CheckScreen}
            options={{
              tabBarLabel: 'Check',
              tabBarIcon: () => <Ionicons name="checkmark-circle" size={24} color="#0c4474" />,
            }}
          />
          <Tab.Screen
            name="RouteScreen"
            component={RouteScreen}
            options={{
              tabBarLabel: 'Ruta',
              tabBarIcon: () => <MaterialCommunityIcons name="routes" size={24} color="#0c4474" />,
              tabBarBadge: 8,
            }}
          />
          <Tab.Screen 
            name="HistoryScreen"
            component={HistoryScreen}
            options={{
              tabBarLabel: 'Historial',
              tabBarIcon: () => <MaterialCommunityIcons name="history" size={24} color="#0c4474" />
            }}
          />
        </Tab.Navigator>
  );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            {<MyTab />}
        </NavigationContainer>
    );
}

