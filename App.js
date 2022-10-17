import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,

  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const Odoo = require('react-native-odoo');

const odoo = new Odoo({
  host: 'localhost',
  port: 8069,
  database: 'Odoo15Prueba',
  username: 'admin',
  password: 'Uriel12zG!'
});

// Connect to Odoo 
odoo.connect(function (err) {
  if (err) { return console.log(err); }
});

// Get a partner
// https://www.odoo.com/documentation/8.0/api_integration.html#read-records
// https://www.odoo.com/documentation/8.0/reference/orm.html#openerp.models.Model.read
var params = {
  ids: [1,2,3,4,5],
  fields: [ 'name' ],
}; //params
odoo.get('res.partner', params, function (err, partners) {
  if (err) { return console.log(err); }
 
  console.log(partners);
// [
//   { id: 1, name: 'Demo Company' },
//   { id: 3, name: 'Administrator' },
//   { id: 4, name: 'Public user' },
//   { id: 5, name: 'Demo User' }
// ]
}); //get




