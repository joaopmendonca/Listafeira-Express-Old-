import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function ListComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.listImage}>

            </View>
            <View style={styles.listDetails}>
                <Text style={styles.detailsTitle}>Nome da Lista</Text>
                <Text style={styles.descriptionText}>Descrição da Lista</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 70,
    },

    listImage: {
        backgroundColor: "#EEE7A7",
        width: 70,
        borderRadius: 5,
        marginRight: 10,
    },
    listDetails: {
        backgroundColor: "#EEE7A7",
        flex: 1, // Para ocupar o restante da tela horizontalmente
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-evenly",
    },
    detailsTitle:{
        fontSize:20,
        color:"#4B497E",
        marginLeft:5,
    },
    descriptionText: {
        fontSize:15,
        color:"#848484",
        marginLeft:5,
    }
})
