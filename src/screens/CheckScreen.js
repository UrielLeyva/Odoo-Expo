import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

const CheckScreen = () => (
    <Background>
      <Logo />
      <Header>Bienvenido</Header>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'CheckScreen' }],
          })
        }
      >
        Realizar Check
      </Button>
    </Background>
  
)

export default CheckScreen;

