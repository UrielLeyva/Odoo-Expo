import React from 'react'
import { Provider } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from './src/core/theme'
//Screens
import {
  RegisterScreen,
  CheckScreen,
  RouteScreen,
  HistoryScreen
} from './src/screens'


const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="RegisterScreen"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            headerShown: false,
          }}
        >        
          <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen}
            options={{
              tabBarLabel: 'Registro'
            }}
          />
          <Stack.Screen
            name="CheckScreen"
            component={CheckScreen}
            options={{
              tabBarLabel: 'Check',
              tabBarIcon: ({color, size}) => {
                <Ionicons name="checkmark-circle-outline" size={30} color="black" />
              },
            }}
          />
          <Stack.Screen
            name="RouteScreen"
            component={RouteScreen}
            options={{
              tabBarLabel: 'Ruta'
            }}
          />
          <Stack.Screen 
            name="HistoryScreen"
            component={HistoryScreen}
            options={{
              tabBarLabel: 'Historial'
            }}
          />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

