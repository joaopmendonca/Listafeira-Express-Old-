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
      <LogoComponent imageSize={60} textSize={20} />

      {/* ContentContainer para agrupar outros blocos */}
      <View style={styles.contentContainer}>
        {/* Campo de entrada de Usuário com ícone */}
        <View style={styles.inputContainer}>
          <Image source={userIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={text1}
            onChangeText={handleTextChange1}
          />
        </View>

        {/* Campo de entrada de Senha com ícone */}
        <View style={styles.inputContainer}>
          <Image source={passwordIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={text2}
            onChangeText={handleTextChange2}
            secureTextEntry={true} // Para ocultar o texto da senha
          />
        </View>

        <Text>Esqueci minha senha</Text>
        {/* Botão para enviar o formulário */}
        <StandardButton
          onPress={() => {
            // Adicione a lógica desejada aqui
          }}
          text="Entrar"
          buttonColor="#EEE7A7"
          textColor="#000"
        />
      </View>
      <Text> Ainda não tem conta?</Text>
      <StandardButton
        onPress={() => {
          // Adicione a lógica desejada aqui
        }}
        text="Cadastrar"
        buttonColor="#EEE7A7"
        textColor="#000"
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
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#EEE7A7",
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
  icon: {
    aspectRatio: 1, // Mantém a proporção original da imagem
    width: 30, // A largura do ícone
    marginRight: 10,
  },
});
