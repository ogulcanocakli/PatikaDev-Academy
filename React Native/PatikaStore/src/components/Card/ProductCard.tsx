import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/metrics";

const ProductCard = ({ product }: any) => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.img} source={{ uri: product.imgURL }} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.stock} >{product.inStock ? "" : "STOKTA YOK"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: moderateScale(10),
        width: horizontalScale(170),
        height: verticalScale(300),
        backgroundColor: "#e0e0e0",
        margin: 10,
    },
    img: {
        borderRadius: moderateScale(13),
        width: horizontalScale(150),
        height: verticalScale(170),
        alignSelf: "center",
        marginTop: verticalScale(10),
        resizeMode : "center"
    },
    title: {
        fontSize: moderateScale(17),
        fontWeight: "bold",
        color: "black",
        marginLeft: horizontalScale(10),
    },
    price: {
        fontSize: moderateScale(15),
        fontWeight: "700",
        color: "gray",
        marginLeft: horizontalScale(10),
    },
    stock: {
        fontSize: moderateScale(15),
        fontWeight: "700",
        color: "red",
        marginLeft: horizontalScale(10),
    },
});

export default ProductCard;