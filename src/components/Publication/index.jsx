import { Image, Text, View } from "react-native";
import styles from "./styles";
import React from "react";
import { TouchableOpacity } from "react-native";

const Publication = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.productItem} onPress={() => onSelected(item)}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Publication;
