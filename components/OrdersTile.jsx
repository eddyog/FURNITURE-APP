import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from "../constants";
import styles from "../screens/cart.style";

const OrdersTile = ({ item }) => {
  return (
    <TouchableOpacity style={styles.favContainer(COLORS.secondary)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.productId.imageUrl }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.productText}>{item.productId.title}</Text>
        <Text numberOfLines={1} style={styles.supplier}>{item.productId.supplier}</Text>
        <Text numberOfLines={1} style={styles.productText}>Quantity:  {item.quantity}</Text>
        <Text numberOfLines={1} style={styles.productText}>Total $ {item.subtotal} </Text>
      </View>
      <View style={styles.orders}
      >

<Text>{item.payment_status}</Text>
<Text>{}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

export default OrdersTile;

