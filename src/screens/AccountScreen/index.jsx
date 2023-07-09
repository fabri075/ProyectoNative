import { View, Text, ImageBackground, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "../../store/actions/auth.action";
import Publication from "../../components/Publication";
import { selectedPublication } from "../../store/actions/publication.action";
import { ScrollView } from "react-native";
import colors from "../../constants/colors";

const AccountScreen = ({ navigation }) => {
  const publications = useSelector((state) => state.publications.publications);
  const userMail = useSelector((state) => state.users.email);
  const userPubs = publications.filter(item => item.autor == userMail);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(signOut());
    navigation.navigate("Login");
  }
  const handleSelectedPublication = (item) => {
    dispatch(selectedPublication(item.id));
    navigation.navigate("details", {
      name: item.titulo,
    });
  };
  const renderItem = ({ item }) => <Publication item={item} onSelected={handleSelectedPublication} />;
  return (
    <ImageBackground resizeMode="cover" style={styles.bgImage} imageStyle={{ opacity: 0.15 }} source={require("../../assets/images/background.jpg")}>
    <SafeAreaView style={styles.container}>
        <Card otherStyles={{marginBottom: 10, backgroundColor: colors.primary}}>
          <Text style={styles.welcome}>Mis publicaciones</Text>
        </Card>
        <View style={styles.list}>
          <FlatList data={userPubs} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
        <SafeAreaView style={styles.logout}>
          <Button textButton={"Cerrar Sesión"} pressAction={() => onLogout()}></Button>
        </SafeAreaView>
    </SafeAreaView>
      </ImageBackground>
  );
};

export default AccountScreen;
