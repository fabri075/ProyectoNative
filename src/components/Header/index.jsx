import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header