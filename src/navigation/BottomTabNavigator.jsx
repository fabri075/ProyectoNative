import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MainScreen from "../screens/MainScreen";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Ionicons name="home" size={30} color="black" />
              <Text>Inicio</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Configuration"
        component={ConfigurationScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Ionicons name="settings" size={30} color="black" />
              <Text>Configuración</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabButtons}>
              <Ionicons name="notifications" size={30} color="black" />
              <Text>Notificaciones</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    paddingTop: 1,
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
