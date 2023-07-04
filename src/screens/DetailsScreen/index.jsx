import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";

const DetailsScreen = () => {
  const publication = useSelector((state) => state.publications.selected);
  const parts = publication.fecha_publicacion.split("-");
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{publication.titulo} </Text>
        <View style={styles.boxImage}>
          <Image style={styles.image} source={{ uri: publication.image }} />
        </View>
        <Text style={styles.description}>{publication.descripcion} </Text>
        <Text style={styles.date}>
          Publicado el {day}-{month}-{year}
        </Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
