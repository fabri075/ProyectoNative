import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./styles";
import home from "../../assets/images/home.png";
import Button from "../../components/Button";
import Card from "../../components/Card";

const MainScreen = ({ nameUser, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Card otherStyles={{ marginTop: 20 }}>
          <Text style={styles.welcome}>
            Bienvenido <Text style={styles.user}>{nameUser} </Text>
          </Text>
        </Card>
      </View>
      <View>
        <Image source={home} style={styles.image} />
      </View>
      <SafeAreaView style={styles.logout}>
        <Button textButton={"Cerrar Sesión"} pressAction={() => navigation.navigate("Login")}></Button>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
