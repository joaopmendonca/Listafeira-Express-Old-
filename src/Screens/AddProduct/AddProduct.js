import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import CustomButton from "../../Components/CustomButtonComponent";

export default function AddProduct() {
    const handleImageUpload = () => {
        // Handle image upload logic here
    };

    const handleConfirm = () => {
        // Handle confirm button action here
    };

    const handleCancel = () => {
        // Handle cancel button action here
    };

    return (
        <View style={styles.container}>
            <HeaderComponent>
                <Text style={styles.headerText}>Cadastrar Produto</Text>
            </HeaderComponent>
            <View style={styles.mainContent}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome do Produto:</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Digite o nome do produto"
                        // Você pode adicionar outras props, como onChangeText para capturar a entrada
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Preço Médio:</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Digite o preço médio"
                        // Você pode adicionar outras props, como onChangeText para capturar a entrada
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Imagem do Produto:</Text>
                    <TouchableOpacity
                        style={styles.buttonBox}
                        onPress={handleImageUpload}
                    >
                        <Text style={styles.buttonText}>Enviar Imagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Envolve o FooterComponent em uma View */}
            <View style={styles.footerContainer}>
                <FooterComponent>
                    <View style={styles.footer}>
                        <CustomButton
                            imageSource={require('../../../assets/button-confirm.png')}
                            title="Confirm"
                            onPress={handleConfirm}
                        />
                        <CustomButton
                            imageSource={require('../../../assets/button-cancel.png')}
                            title="Cancel"
                            onPress={handleCancel}
                        />
                    </View>
                </FooterComponent>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AECFE2",
    },
    headerText: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: 'Michroma_400Regular',
    },
    mainContent: {
        flex: 1,
        padding: 20,
        width: "95%",
        alignSelf: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        fontFamily: 'Michroma_400Regular',
    },
    inputBox: {
        backgroundColor: "#EEE7A7",
        height: 60,
        borderRadius: 5,
    },
    footerContainer: {
        flex: 1, // Para garantir que o footer ocupe apenas o espaço necessário
        justifyContent: "flex-end", // Alinha o footer na parte inferior
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    buttonBox: {
        marginTop: 5,
        backgroundColor: "#EEE7A7",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
    }
});
