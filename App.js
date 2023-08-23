import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { useFonts, Michroma_400Regular } from "@expo-google-fonts/michroma"; // Importe as fontes aqui

import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

export default function App() {
  const [fonteLoaded] = useFonts({
    Michroma_400Regular,
    // Outras fontes, se você tiver mais
  });

  // Verifique se as fontes foram carregadas antes de renderizar o conteúdo
  if (!fonteLoaded) {
    return null; // ou exiba um indicador de carregamento, se desejar
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
