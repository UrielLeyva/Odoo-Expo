import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { employeeValidator } from '../helpers/employeeValidator'
import { nipValidator } from '../helpers/nipValidator'
import { nameValidator } from '../helpers/nameValidator'

const response = () => {
  return fetch('https://biocheck.argil.mx/biocheckapp/registro', { 
    method: 'POST',
    body: JSON.stringify({
      cuenta: 'biocheck29691',
      empleado_id: '123123',
      nip: '1234',
    })
})
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
  };


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [employee, setEmployee] = useState({ value: '', error: '' })
  const [nip, setNip] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const employeeError = employeeValidator(employee.value)
    const nipError = nipValidator(nip.value)
    if ( nameError || employeeError || nipError ) {
      setName({ ...name, error: nameError })
      setEmployee({ ...employee, error: employeeError })
      setNip({ ...nip, error: nipError })
      return
    }
    navigation.reset({
      routes: [{ name: 'CheckScreen' }],
    })
  }
  
    return ( 
      <Background>
        <Logo />
        <Header>Registro</Header>
        <TextInput
          name="cuenta"
          label="Cuenta"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          name="empleadoid"
          label="Empleado ID"
          returnKeyType="next"
          value={employee.value}
          onChangeText={(text) => setEmployee({ value: text, error: '' })}
          error={!!employee.error}
          errorText={employee.error}
        />
        <TextInput
          name="nip"
          label="NIP"
          returnKeyType="done"
          value={nip.value}
          onChangeText={(text) => setNip({ value: text, error: '' })}
          secureTextEntry
          error={!!nip.error}
          errorText={nip.error}
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Registrar
        </Button>
      </Background>
    );
  }


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})


