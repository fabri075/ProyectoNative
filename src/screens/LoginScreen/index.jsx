import { Text, View, Image, Alert } from "react-native";
import React, { useEffect, useState, useCallback, useReducer } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../store/actions/auth.action";
import { ImageBackground } from "react-native";
import colors from "../../constants/colors";
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert('Ha ocurrido un error', error, [{ text: 'ok' }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signUp(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert('Formulario invalido', 'Ingrese email y password validos', [{ text: 'OK' }]);
    }
  };
  const handleSignIn = () => {
    if (formState.formIsValid) {
      dispatch(signIn(formState.inputValues.email, formState.inputValues.password));
      navigation.navigate("Botons");
    } else {
      Alert.alert('Formulario invalido', 'Ingrese email y password validos', [{ text: 'OK' }]);
    }
  };
  return (
    <ImageBackground resizeMode="cover" style={styles.bgImage} imageStyle={{ opacity: 0.5 }} source={require("../../assets/images/backgroundLogin.jpeg")}>
      <View style={styles.container}>
        <Card>
          <View style={styles.logoView}>
            <Image source={require("../../assets/images/LogoApp.png")} style={styles.image} />
            <Text style={styles.titleLogo}>Botanicus</Text>
          </View>
          <Text style={styles.title}>INICIAR SESIÓN</Text>

          <View style={styles.inputBox}>
            <AntDesign name="user" size={25} color="black" />
            <Input
              id="email"
              placeholder="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Por favor ingrese un email valido"
              onInputChange={onInputChangeHandler}
              initialValue="" />
          </View>
          <View style={styles.inputBox}>
            <MaterialCommunityIcons name="form-textbox-password" size={25} color="black" />
            <Input id="password"
              placeholder="Contraseña"
              keyboardType="default"
              required
              password
              secureTextEntry
              autoCapitalize="none"
              errorText="Por favor ingrese una contrasena valida"
              onInputChange={onInputChangeHandler}
              initialValue="" />
          </View>
          <View style={styles.buttons}>
            <Button textButton={"Login"} pressAction={() => handleSignIn()}></Button>
            <Button textButton={"Registrar"} pressAction={() => handleSignUp()}></Button>
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
