import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FooterComponent({ children }) {
  return (
    <View style={styles.footerContainer}>
      {/* Aqui você pode adicionar qualquer conteúdo personalizado */}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#DA5C5C",
    width: "100%",
    height: 120,
    justifyContent: "space-between",
    alignItems: 'center', // Centraliza o conteúdo verticalmente
    padding: 10,
    borderTopLeftRadius: 35, // Aumente este valor para um arredondamento maior
    borderTopRightRadius: 35, // Aumente este valor para um arredondamento maior
  },
});
