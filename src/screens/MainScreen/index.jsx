import { View, FlatList, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Publication from "../../components/Publication";
import { selectedPublication } from "../../store/actions/publication.action";

const MainScreen = ({ navigation }) => {
  const publications = useSelector((state) => state.publications.publications);
  //Acomodo las publicaciones en orden de creacion
  publications.sort((a, b) => b.id - a.id);
  const dispatch = useDispatch();
  const handleSelectedPublication = (item) => {
    dispatch(selectedPublication(item.id));
    navigation.navigate("details", {
      name: item.titulo,
    });
  };
  const renderItem = ({ item }) => <Publication item={item} onSelected={handleSelectedPublication} />;
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.bgImage} imageStyle={{ opacity: 0.15 }} source={require("../../assets/images/background.jpg")}>
        <View>
          <FlatList data={publications} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;
