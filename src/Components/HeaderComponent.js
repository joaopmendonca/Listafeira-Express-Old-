import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function HeaderComponent({ children }) {
    return (
        <View style={styles.headerContainer}>
            {/* Aqui você pode adicionar qualquer conteúdo personalizado */}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#DA5C5C",
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
})
