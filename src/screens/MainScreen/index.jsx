import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./styles";
import home from "../../assets/images/home.png";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { cleanUser } from "../../store/actions/users.action";

const MainScreen = ({ navigation }) => {
  const userLogued = useSelector(state => state.users.selected);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(cleanUser());
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View>
        <Card >
          <Text style={styles.welcome}>
            ¡Bienvenido <Text style={styles.user}>{`${userLogued.name} ${userLogued.last_name}` }!  </Text>
          </Text>
        </Card>
      </View>
      <View>
        <Image source={home} style={styles.image} />
      </View>
      <SafeAreaView style={styles.logout}>
        <Button textButton={"Cerrar Sesión"} pressAction={() => onLogout()}></Button>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
