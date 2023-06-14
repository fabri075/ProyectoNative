import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";

const ProductItem = ({ title, description, image }) => {
  return (
    <TouchableOpacity style={styles.productItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
