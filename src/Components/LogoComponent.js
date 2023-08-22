import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LogoComponent({ imageSize = 120, textSize = 35 }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: textSize }]}>ListaFeira</Text>
        <Text style={[styles.text, { fontSize: textSize }]}>Express</Text>
      </View>
      <Image
        source={require('../../assets/logo-image.png')}
        style={[styles.logo, { width: imageSize, height: imageSize }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text: {
    alignSelf: 'center',
  },
});
