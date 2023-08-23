import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
                    <View style={styles.inputBox}></View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Preço Médio:</Text>
                    <View style={styles.inputBox}></View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Imagem do Produto:</Text>
                    <CustomButton
                        imageSource={require('../../../assets/button-upload.png')}
                        title="Fazer Upload de Imagem"
                        onPress={handleImageUpload}
                    />
                </View>
            </View>
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
        fontSize: 18,
        marginBottom: 5,
    },
    inputBox: {
        backgroundColor: "#EEE7A7",
        height: 60,
        borderRadius: 5,
    },
    footer: {
        flexDirection: "row",
    }

});
