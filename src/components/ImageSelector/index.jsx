import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles"

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissons = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitamos dar permisos de la camara para usar la aplicacion",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const hasPermission = await verifyPermissons();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>No hay imagen seleccionada...</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button
        title="Tomar Foto"
        onPress={handlerTakeImage}
      />
    </View>
  );
};

export default ImageSelector;