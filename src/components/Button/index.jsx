import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"

const Button = ({textButton, buttonStyle, pressAction, textStyle}) => {
    return (
        <TouchableOpacity style={{...styles.container, ...buttonStyle}} onPress={pressAction}>
            <Text style={{...styles.text, ...textStyle}}>{textButton}</Text>
        </TouchableOpacity>
    )
}

export default Button