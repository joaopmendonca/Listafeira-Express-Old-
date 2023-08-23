import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import LogoComponent from "../../Components/LogoComponent";
import StandardButton from "../../Components/StandardButton";

const userIcon = require("../../../assets/userlogin-image.png");
const passwordIcon = require("../../../assets/userpadlock-image.png");

export default function LoginScreen() {
    const [text1, setText1] = useState(''); // Estado para o primeiro campo de entrada
    const [text2, setText2] = useState(''); // Estado para o segundo campo de entrada

    // Função para lidar com mudanças no primeiro campo de entrada
    const handleTextChange1 = (newText) => {
        setText1(newText);
    };

    // Função para lidar com mudanças no segundo campo de entrada
    const handleTextChange2 = (newText) => {
        setText2(newText);
    };

    // Função para lidar com o envio do formulário
    const handleFormSubmit = () => {
        // Faça algo com os valores dos campos de entrada (text1 e text2) aqui
    };

    return (
        <View style={styles.container}>
            <LogoComponent imageSize={50} textSize={20} />

            {/* ContentContainer para agrupar outros blocos */}
            <View style={styles.contentContainer}>

                {/* Campo de entrada de Senha com ícone */}
                <View style={styles.inputs}>
                    <Text style={styles.headerText}>Fazer Login</Text>
                    {/* Campo de entrada de Usuário com ícone */}
                    <View style={styles.inputContainer}>
                        <Image source={userIcon} style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.textInput]}
                            placeholder="Usuário"
                            value={text1}
                            onChangeText={handleTextChange1}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={passwordIcon} style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.textInput]}
                            placeholder="Senha"
                            value={text2}
                            onChangeText={handleTextChange2}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={styles.forgotPaswword}>Esqueci minha senha</Text>
                </View>
                {/* Botão para enviar o formulário */}
                <StandardButton
                    onPress={() => {
                        // Adicione a lógica desejada aqui
                    }}
                    text="Entrar"
                    buttonColor="#EEE7A7"
                    textColor="#000"
                    width={150} // Defina a largura em pixels aqui
                />

            </View>
            <Text style={styles.createAccountText}> Ainda não tem conta?</Text>
            <StandardButton
                onPress={() => {
                    // Adicione a lógica desejada aqui
                }}
                text="Cadastrar"
                buttonColor="#EEE7A7"
                textColor="#000"
                width={150} // Defina a largura em pixels aqui
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AECFE2",
    },
    contentContainer: {
        backgroundColor: "#DA5C5C",
        width: "90%",
        height: 300,
        marginVertical: 20,
        alignItems: "center",
        borderRadius: 10,
    },
    headerText: {
        fontFamily: 'Michroma_400Regular',
        color: "#FFF",
        alignSelf: "center",
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        marginTop: 20,
        backgroundColor: "#EEE7A7",
        borderRadius: 5,
    },
    inputs: {
        width: "80%",
        alignItems: "center",
        alignSelf: "center",
    },
    input: {
        flex: 1,
    },
    icon: {
        aspectRatio: 1,
        width: 30,
        marginRight: 10,
    },
    textInput: {
        fontSize: 16,
        color: '#000',
    },
    forgotPaswword: {
        color: "#FFF",
        marginBottom: 10,
        alignSelf: "flex-end",
        fontFamily: 'Michroma_400Regular',
    },

    createAccountText: {
        fontFamily: 'Michroma_400Regular',
    }
});
