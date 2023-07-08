import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { cleanUser } from "../../store/actions/users.action";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(cleanUser());
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
