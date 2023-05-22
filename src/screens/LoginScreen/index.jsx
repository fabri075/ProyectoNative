import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [logFail, setLogFail] = useState("none");
  const [failLogin, setFailLogin] = useState(false);
  useEffect(() => {
    setLogFail(failLogin ? "flex" : "none");
  }, [failLogin]);

  const handleUser = (text) => {
    setUser(text);
  };
  const handlePass = (text) => {
    setPass(text);
  };
  const onLogin = (user, pass) => {
    if (user !== "prueba" || pass !== "route") {
      setFailLogin(true);
      return;
    }
    setFailLogin(false);
    navigation.navigate("Botons");
  };
  return (
    <View style={styles.container}>
      <Card>
        <AntDesign name="login" size={36} color="black" />
        <Text style={styles.title}>INICIAR SESIÓN</Text>
        <Text style={{ ...styles.fail, display: logFail }}>Usuario o contraseña incorrecto</Text>
        <View style={styles.input}>
          <AntDesign name="user" size={25} color="black" />
          <Input value={user} onChangeText={handleUser} autoCapitalize="none" autoCorrect={false} placeholder="Usuario" />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons name="form-textbox-password" size={25} color="black" />
          <Input value={pass} onChangeText={handlePass} autoCapitalize="none" autoCorrect={false} placeholder="Contraseña" secureTextEntry={true} />
        </View>
        <Button textButton={"Loguearse"} buttonStyle={{ marginTop: 30 }} pressAction={() => onLogin(user, pass)}></Button>
      </Card>
    </View>
  );
};

export default LoginScreen;
