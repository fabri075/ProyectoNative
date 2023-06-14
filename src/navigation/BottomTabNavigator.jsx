import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProductScreen from "../screens/ProductScreen";
import MainScreen from "../screens/MainScreen";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native";
import NewProductScreen from "../screens/NewProductScreen";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarActiveBackgroundColor: colors.tertiary,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "Menú principal",
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Ionicons name="home" size={30} color="black" />
              <Text>Inicio</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Product"
        component={ProductScreen}
        options={({ navigation }) => ({
          title: "Productos",
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Entypo name="shop" size={24} color="black" />
              <Text>Productos</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("newProduct")}>
              <Ionicons name="md-add" color="black" size={23} />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTabs.Screen
        name="Configuration"
        component={ConfigurationScreen}
        options={{
          title: "Configuración",
          tabBarIcon: () => (
            <View style={styles.tabButtons}> 
              <Ionicons name="settings" size={30} color="black" />
              <Text>Configuración</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
      name="newProduct"
      component={NewProductScreen}
      options={{ title: "Nuevo producto", tabBarButton: () => null}}
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
});
