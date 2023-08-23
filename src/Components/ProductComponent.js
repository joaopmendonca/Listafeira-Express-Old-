import React from "react";
import { Text, View, StyleSheet } from 'react-native';

import CustomButton from '../Components/CustomButtonComponent';

export default function ProductComponent({ productName, price, quantity }) {

    const handleButtonPress = () => {
        // Ação a ser executada quando o botão for clicado
        console.log("Botão clicado!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.productImage}>

            </View>
            <View style={styles.productDetail}>
                <View>
                    <Text style={styles.detailsTitle}>{productName}</Text>
                    <Text style={styles.productInfo}>Preço: R$ {price.toFixed(2)}</Text>
                    <Text style={styles.productInfo}>Quantidade: {quantity}</Text>
                </View>
                <View>
                    <CustomButton
                        imageSource={require('../../assets/button-delete-item.png')}
                        onPress={handleButtonPress}
                    />
                </View>

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

    productImage: {
        backgroundColor: "#EEE7A7",
        width: 70,
        borderRadius: 5,
        marginRight: 10,
    },
    productDetail: {
        backgroundColor: "#EEE7A7",
        flex: 1, // To occupy the rest of the horizontal space
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    detailsTitle: {
        fontSize: 20,
        color: "#4B497E",
        marginLeft: 5,
    },
    productInfo: {
        fontSize: 15,
        color: "#848484",
        marginLeft: 5,
    }
})
