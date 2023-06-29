import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tarefas from './src/views/Tarefas';
import Login from './src/views/Login';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar hidden /> 
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tarefas" component={Tarefas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

