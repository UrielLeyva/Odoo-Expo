import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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


export default function LoginScreen({ navigation }) {
  const [name, setName] = useState({value:'', error: ''})
  const [employee, setEmployee] = useState({ value: '', error: '' })
  const [nip, setNip] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    const employeeError = employeeValidator(employee.value)
    const nipError = nipValidator(nip.value)
    if (nameError || employeelError || nipError) {
      setName({ ...name, error: nameError})
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
      <Header>Bienvenido.</Header>
      <TextInput
        label="Cuenta"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        autoCapitalize="none"
        autoCompleteType="name"
      />
      <TextInput
        label="Empleado ID"
        returnKeyType="next"
        value={employee.value}
        onChangeText={(text) => setEmployee({ value: text, error: '' })}
        error={!!employee.error}
        errorText={employee.error}
        autoCapitalize="none"
        autoCompleteType="id"
      />
      <TextInput
        label="NIP"
        returnKeyType="done"
        value={nip.value}
        onChangeText={(text) => setNip({ value: text, error: '' })}
        error={!!nip.error}
        errorText={nip.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Iniciar
      </Button>

    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
