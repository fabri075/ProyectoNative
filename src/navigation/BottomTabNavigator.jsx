import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native";
import NewPublicationScreen from "../screens/NewPublicationScreen";
import AccountScreen from "../screens/AccountScreen";
import DetailsScreen from "../screens/DetailsScreen";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarActiveBackgroundColor: colors.tertiary,
        tabBarHideOnKeyboard: true
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={MainScreen}
        options={({ navigation }) => ({
          title: "Menú principal",
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Ionicons name="home" size={30} color="black" />
              <Text>Inicio</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate("newPublication")}>
              <Ionicons name="md-add" color="white" size={23} />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTabs.Screen
        name="newPublication"
        component={NewPublicationScreen}
        options={{
          title: "Subir publicacion",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
            <Ionicons name="add-circle" size={30} color="black" />
              <Text>Publicar</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Mi cuenta",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: () => (
            <View style={styles.tabButtons}> 
              <Ionicons name="person-circle-sharp" size={30} color="black" />
              <Text>Mi cuenta</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
      name="details"
      component={DetailsScreen}
      options={{
        title: "Detalles de Publicación", 
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarButton: () => null
      }}
    />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    paddingTop: 0,
    height: 75,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  tabButtons: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon:{
    marginRight: 10
  }
});
