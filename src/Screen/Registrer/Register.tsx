import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, View, Image, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';
import { styles } from './styles';

import LoginImage from '../../assets/LoginImage.png'
import Logo from '../../assets/logo.jpg'

import { SecureInput } from '../../components/Input/SecureInput';
import { CommonInput } from '../../components/Input/CommonInput';
import { BorderButton } from '../../components/Buttons/BorderButton/BorderButton';
import { GreenButton } from '../../components/Buttons/GreenButton/GreenButton';

import { AntDesign } from '@expo/vector-icons'; 
import Container, { Toast } from 'toastify-react-native';


export  const Register = ({navigation}) => {

  const [usereEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  
  const goBack = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Starter"}]
    })
  }
  
  // Password Input
  const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserPassword(value);
  }
  

  const signUp = (password) => {
    let validationPassword : boolean
    
    //Validando senha
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password.match(check)) {
       console.log("Your password is strong.");
       validationPassword = true
    } else {
      console.log("Meh, not so much.");
      validationPassword = false
      Toast.error('Escolha uma senha forte!');
    }

    if(validationPassword === true){
      navigation.reset({
        index: 0,
        routes: [{name: "InfoIncome"}]
      })
    }
  }

  return (
    <View style={styles.container}>
       <Container 
          positionValue= {30}
          duration={1800}
          position="top"
          width= {255}
        />
      <StatusBar style="auto"/>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={38} color="black" />
        </TouchableOpacity>
        <Image style={styles.logo} source={Logo}/>
      </View>
      <View style={{marginBottom:70}}>
        <CommonInput
          title={'COMO GOSTARIA DE SER CHAMADO?'}
        />
      </View>
      <View style={{marginBottom:70}}>
        <CommonInput
          title={'E-MAIL'}
        />
      </View>
      <SecureInput
        onChange={onChangePassword}
        title={'SENHA'}
      />
      <View  style={styles.warningBox}>
        <AntDesign name="warning" size={18} color="black" />
        <Text style={{marginLeft: 8,  fontStyle: 'italic'}}>
          SUA SENHA DEVE CONTER:
        </Text>
      </View>
      <Text style={styles.list}> ● 8 DÍGITOS</Text>
      <Text style={styles.list}> ● UM NÚMERO</Text>
      <Text style={styles.list}> ● UMA LETRA MAÍUSCULA</Text>
      <TouchableOpacity 
        style={{marginBottom:20, marginTop: 80}}
        activeOpacity={0.7}
        onPress={() => signUp(userPassword)}
        
        >
        <BorderButton
          title={"CONCORDAR"}
        />
      </TouchableOpacity>
      <Text style={styles.termsText}>Ao utilizar o Neki Finance você está de acordo com nossos 
        <Text style={styles.textHighligth}>TERMOS DE USO</Text> e <Text style={styles.textHighligth}>AVISOS DE PRIVACIDADE</Text>.
      </Text>
    </View>
  );
  
}