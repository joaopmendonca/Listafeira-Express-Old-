import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function CustomButton({ imageSource, title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            {title && <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DA5C5C',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        marginTop: 5,
        color: 'white',
        fontSize: 16,
    },
});
