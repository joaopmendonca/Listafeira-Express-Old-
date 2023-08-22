import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoComponent from "./src/Components/LogoComponent.js"; // Certifique-se de ajustar o caminho

export default function App() {
  return (
    <View>
      <LogoComponent imageSize={100} textSize={30} /> 
    </View>
  );
}

