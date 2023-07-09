import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "../../store/actions/auth.action";

const AccountScreen = ({ navigation }) => {
  const publications = useSelector((state) => state.publications.publications);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(signOut());
    navigation.navigate("Login");
  }
  return (
    <ImageBackground resizeMode="cover" style={styles.bgImage} imageStyle={{ opacity: 0.15 }} source={require("../../assets/images/background.jpg")}>
    <View style={styles.container}>
        <Card otherStyles={{ marginTop: 20 }}>
          <Text style={styles.welcome}>Favoritos</Text>
        </Card>
        <SafeAreaView style={styles.logout}>
          <Button textButton={"Cerrar Sesión"} pressAction={() => onLogout()}></Button>
        </SafeAreaView>
    </View>
      </ImageBackground>
  );
};

export default AccountScreen;
