import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InfoIncome } from './src/Screen/InfoIncome/InfoIncome'
import { Starter } from './src/Screen/Starter/Starter'
import { Register } from './src/Screen/Registrer/Register';

export default function App() {

  const Stack = createNativeStackNavigator();

return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen  name='Starter' component={Starter}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="InfoIncome" component={InfoIncome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


