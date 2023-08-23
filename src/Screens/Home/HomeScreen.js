import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import HeaderComponent from '../../Components/HeaderComponent';
import FooterComponent from '../../Components/FooterComponent';
import CustomButton from '../../Components/CustomButtonComponent';
import ListComponent from '../../Components/ListComponent';

export default function HomeScreen() {

    const handleButtonPress = () => {
        // Ação a ser executada quando o botão for clicado
        console.log("Botão clicado!");
    };

    return (
        <View style={styles.container}>
            <HeaderComponent>
                <View style={styles.headerUserImage}>
                    <CustomButton
                        imageSource={require('../../../assets/header-user-icon.png')}
                        onPress={handleButtonPress}
                    />
                    <Text style={styles.userName}>User Name</Text>
                </View>
                <CustomButton
                    imageSource={require('../../../assets/configurations-icon.png')}
                    onPress={handleButtonPress}
                />
            </HeaderComponent>
            <View style={styles.contentContainer}>
                <View style={styles.grayBlock} />
                <Text style={styles.subtitle}>Minhas Listas</Text>
                <ListComponent></ListComponent>
            </View>
            <FooterComponent>
            <CustomButton
                    imageSource={require('../../../assets/button-add.png')}
                    title="Nova Lista"
                    onPress={handleButtonPress}
                />             
            </FooterComponent>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AECFE2",
        position: 'relative',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        width: "95%",
        alignSelf: "center",
    },
    headerUserImage: {
        flexDirection: "row",
        alignItems: 'center',
    },
    userName: {
        fontFamily: 'Michroma_400Regular',
        color: "#FFF",
    },
    grayBlock: {
        backgroundColor: "gray",
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    subtitle: {
        fontFamily: 'Michroma_400Regular',
        color: "#4B497E",
        fontSize: 20,
    }
});
