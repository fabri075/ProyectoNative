import { ScrollView, Text, TextInput, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { useDispatch, useSelector } from "react-redux";
import { addPublication } from "../../store/actions/publication.action";
import Button from "../../components/Button";
import colors from "../../constants/colors";
const NewPublicationScreen = ({ navigation }) => {
  const publications = useSelector((state) => state.publications.publications);
  const autor = useSelector((state) => state.users.email);
  const [key, setKey] = useState(0);
  const id = publications.length + 1;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (text) => setTitle(text);
  const handleDescriptionChange = (text) => setDescription(text);
  const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();
      const fecha = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;

  const handleSave = () => {
    dispatch(addPublication(id, title, description, image, autor, fecha));
    setTitle("");
    setDescription("");
    setImage("");
    setKey((prevKey) => prevKey + 1);
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <ImageBackground resizeMode="cover" style={styles.bgImage} imageStyle={{opacity: 0.2}} source={require("../../assets/images/background.jpg")}>
        <View style={styles.container}>
          <Text style={styles.label}>Titulo</Text>
          <TextInput style={styles.input} value={title} placeholder="Escriba un titulo" onChangeText={handleTitleChange} />
          <Text style={styles.label}>Descripción</Text>
          <TextInput style={styles.input} value={description} placeholder="Escriba una descripción" onChangeText={handleDescriptionChange} />
          <ImageSelector OnKey={key} onImage={setImage} />
          <Button textButton="Subir Publicación" buttonStyle={{ backgroundColor: colors.primary }} pressAction={handleSave} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default NewPublicationScreen;
