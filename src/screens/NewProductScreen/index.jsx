import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { addProduct } from "../../store/actions/products.action";
import { useDispatch } from "react-redux";

const NewProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = text => setTitle(text);
  const handleDescriptionChange = text => setDescription(text);

  const handleSave = () => {
    dispatch(addProduct(title, description, image));
    navigation.navigate("Product");
  };

  return (
    <ScrollView style={styles.bgcolor}>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <Text style={styles.label}>Descripción</Text>
        <TextInput
        style={styles.input}
        value={description}
        onChangeText={handleDescriptionChange}
      />
        <ImageSelector onImage={setImage} />
        <Button
          title="Guardar producto"
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

export default NewProductScreen;
