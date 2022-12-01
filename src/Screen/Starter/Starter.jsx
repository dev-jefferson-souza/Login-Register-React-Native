import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import LoginImage from '../../assets/LoginImage.png'
import Logo from '../../assets/logo.jpg'
import { SecureInput } from '../../components/Input/SecureInput';
import { CommonInput } from '../../components/Input/CommonInput';
import { BorderButton } from '../../components/Buttons/BorderButton/BorderButton';
import { GreenButton } from '../../components/Buttons/GreenButton/GreenButton';


export  const Starter = ({navigation}) => {

  const signin = () => {
    // if(userName === preUser.name && userPassword === preUser.password){
    //   navigation.reset({
    //     index: 0,
    //     routes: [{name: "InfoIncome"}]
    //   })
    // } else{
    //   alert("Usuário ou senha inválida. Tente novamente!")
    // }

    navigation.reset({
      index: 0,
      routes: [{name: "Register"}]
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>ESTÁ NA HORA DE DAR UM GIRO NAS SUAS FINANÇAS</Text>
      <Image style={styles.image} source={LoginImage}/>
     
      <TouchableOpacity 
        style={{marginBottom:20}}
        activeOpacity={0.7}
        onPress={() => signin()}>
        <BorderButton
          title={"CADASTRAR"}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <GreenButton
          title={'POSSUO CADASTRO'}
        />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={Logo}
      />
    </View>
  );
  
}