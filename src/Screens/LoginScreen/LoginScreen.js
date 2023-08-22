import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Importe StyleSheet da biblioteca react-native

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Inhai, querida</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Adicione estilos conforme necessário
    flex: 1, // Para fazer com que a View ocupe toda a tela
    justifyContent: 'center', // Alinhe o conteúdo verticalmente no centro
    alignItems: 'center', // Alinhe o conteúdo horizontalmente no centro
    backgroundColor: "#AECFE2"
  },
});
