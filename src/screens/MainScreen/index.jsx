import { View, FlatList, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Publication from "../../components/Publication";
import { selectedPublication, loadPublication } from "../../store/actions/publication.action";
import { useEffect } from "react";

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const publications = useSelector((state) => state.publications.publications);
  useEffect(() => {
    dispatch(loadPublication());
  }, []);
  //Acomodo las publicaciones en orden de creacion 
  publications.sort((a, b) => b.id - a.id);
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
