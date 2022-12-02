import React from 'react'
import { ThemeProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import Navigation from './src/Navigation/Navigation';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

