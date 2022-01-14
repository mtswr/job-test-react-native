import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { AuthProvider } from './src/routes/AuthProvider';

import { Routes } from './src/routes';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}


