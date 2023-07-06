import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { useDispatch } from "react-redux";
import { addPublication } from "../../store/actions/publication.action";

const NewPublicationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [autor, setAutor] = useState("");

  const handleTitleChange = (text) => setTitle(text);
  const handleDescriptionChange = (text) => setDescription(text);
  const handleAutorChange = (text) => setAutor(text);

  const handleSave = () => {
    dispatch(addPublication(title, description, image, autor));
    navigation.navigate("Product");
  };

  return (
    <ScrollView style={styles.bgcolor}>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput style={styles.input} value={title} onChangeText={handleTitleChange} />
        <Text style={styles.label}>Descripción</Text>
        <TextInput style={styles.input} value={description} onChangeText={handleDescriptionChange} />
        <ImageSelector onImage={setImage} />
        <Button title="Subir Publicación" onPress={handleSave} />
        <Text style={styles.label}>Autor</Text>
        <TextInput style={styles.input} value={autor} onChangeText={handleAutorChange} />
      </View>
    </ScrollView>
  );
};

export default NewPublicationScreen;
