import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../../store/actions/users.action";
import { signUp } from "../../store/actions/auth.action";

const LoginScreen = ({ navigation }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [logFail, setLogFail] = useState("none");
  const [registerFail, setRegisterFail] = useState("none");
  const [failLogin, setFailLogin] = useState(false);
  const [failRegister, setFailRegister] = useState(false);
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
    const log = users.find((data) => data.user === user && data.password === pass);
    if (!log) {
      setFailLogin(true);
      return;
    }
    setFailLogin(false);
    dispatch(selectedUser(log.id));
    navigation.navigate("Botons");
  };
  const onRegister = (user, pass) => {
    const registro = dispatch(signUp(user, pass));
  };
  return (
    <View style={styles.container}>
      <Card>
        <Image source={require("../../assets/images/LogoApp.png")} style={styles.image} />
        <Text style={styles.title}>INICIAR SESIÓN</Text>
        <Text style={{ ...styles.fail, display: logFail }}>Usuario o contraseña incorrecto</Text>
        <Text style={{ ...styles.fail, display: registerFail }}>Usuario o contraseña incorrecto</Text>
        <View style={styles.inputBox}>
          <AntDesign name="user" size={25} color="black" />
          <Input value={user} onChangeText={handleUser} autoCapitalize="none" autoCorrect={false} placeholder="Email" />
        </View>
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="form-textbox-password" size={25} color="black" />
          <Input value={pass} onChangeText={handlePass} autoCapitalize="none" autoCorrect={false} placeholder="Contraseña" secureTextEntry={true} />
        </View>
        <View style={styles.buttons}>
          <Button textButton={"Login"} pressAction={() => onLogin(user, pass)}></Button>
          <Button textButton={"Registrar"} pressAction={() => onRegister(user, pass)}></Button>
        </View>
      </Card>
    </View>
  );
};

export default LoginScreen;
