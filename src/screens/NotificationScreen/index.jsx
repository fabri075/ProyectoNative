import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Card from "../../components/Card";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Card otherStyles={{ marginTop: 20 }}>
        <Text style={styles.welcome}>Notificaciones</Text>
      </Card>
    </View>
  );
};

export default NotificationScreen;
