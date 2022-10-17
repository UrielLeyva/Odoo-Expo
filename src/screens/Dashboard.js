import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Comencemos</Header>
      <Paragraph>
        ¡Que tengas un excelente día!
      </Paragraph>
      <Paragraph>
        Para registrar tu hora de salida cierra la sesión.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Cerrar sesión
      </Button>
    </Background>
  )
}
