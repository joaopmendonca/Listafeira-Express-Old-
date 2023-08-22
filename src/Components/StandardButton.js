import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StandardButton({ onPress, text, buttonColor, textColor }) {
  // Use as cores personalizadas ou as cores padrão se elas não forem fornecidas
  const backgroundColor = buttonColor || '#4287f5';
  const color = textColor || 'white';

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});
