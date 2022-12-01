import React from "react"
import { View, Text, TextInput } from "react-native"
import { InputProps } from "./Props"


import { styles } from "./styles"

export const CommonInput = ({title, ...rest} : InputProps) => {

    return(
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                autoCapitalize="none"
                selectionColor={'#37aeae'}
                {...rest}        
            >
            </TextInput>
        </View>
    )
}