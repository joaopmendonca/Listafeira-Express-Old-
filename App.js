import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

import LoginScreen from "./src/Screens/LoginScreen/LoginScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Isso faz com que a View ocupe toda a tela
  },
});
