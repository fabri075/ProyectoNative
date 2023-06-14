import { Image, Text, View } from "react-native";
import styles from "./styles";
import React from "react";

const ProductItem = ({ title, description, image }) => {
  return (
    <View style={styles.productItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
