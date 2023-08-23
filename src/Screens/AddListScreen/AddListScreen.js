import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import CustomButton from "../../Components/CustomButtonComponent";
import ProductComponent from "../../Components/ProductComponent";

export default function AddListScreen() {
    const handleButtonPress = () => {
        // Ação a ser executada quando o botão for clicado
        console.log("Botão clicado!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <HeaderComponent>
                    <Text style={styles.userName}>Minha Lista de Compras</Text>
                    <CustomButton
                        imageSource={require('../../../assets/button-edit.png')}
                        onPress={handleButtonPress}
                    />
                </HeaderComponent>
                <View style={styles.mainContent}>
                    <ProductComponent productName="Nome do Produto" price={0.00} quantity={0} />
                    <CustomButton
                        imageSource={require('../../../assets/button-add-item.png')}
                        onPress={handleButtonPress}
                    />
                </View>
                <FooterComponent>
                    <View style={styles.footer}>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                imageSource={require('../../../assets/button-save.png')}
                                title="Salvar Lista"
                                onPress={handleButtonPress}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                imageSource={require('../../../assets/button-home.png')}
                                title="Home"
                                onPress={handleButtonPress}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                imageSource={require('../../../assets/button-share.png')}
                                title="Compartilhar"
                                onPress={handleButtonPress}
                            />
                        </View>
                    </View>
                </FooterComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AECFE2",
        position: 'relative',
    },
    userName: {
        fontFamily: 'Michroma_400Regular',
        color: "#FFF",
    },
    mainContent: {
        flex: 1,
        padding: 20,
        width: "95%",
        alignSelf: "center",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    buttonContainer: {
        flex: 1, // Equal flex for all button containers
        marginHorizontal: 10, // Adjust this value as needed
    },
})
