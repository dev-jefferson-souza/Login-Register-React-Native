import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"


import { Feather } from '@expo/vector-icons'; 

import { styles } from "./styles"
import { InputProps } from "./Props";

export const SecureInput = ({title, ...rest} : InputProps) => {

    const [secure, setSecure] = useState<boolean>(true);
    const [eye, setEye] = useState<string>("eye");
    const handleSecure = () => {
        if(secure === true){
            setEye('eye-off')
            setSecure(false)
            
        } else{ 
            setEye('eye')
            setSecure(true)
        }
    }

    

    return(
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.secureView}>
                <TextInput
                    {...rest}
                    style={styles.textInput}                                       
                    selectionColor={'#37aeae'}
                    secureTextEntry={secure}
                    autoCapitalize="none"
                >
                </TextInput>
                <TouchableOpacity
                 activeOpacity={0.2}
                 style={styles.eyeIcon}
                 onPress={() => handleSecure()}
                >
                    <Feather
                        name={eye}
                        size={22}
                        color="#37aeae"
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}