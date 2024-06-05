import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import UkrToEngScreen from './UkrToEngScreen';
import EngToUkrScreen from './EngToUkrScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Головна' }} />
        <Stack.Screen name="UkrToEng" component={UkrToEngScreen} options={{ title: 'Українська -> Англійська' }} />
        <Stack.Screen name="EngToUkr" component={EngToUkrScreen} options={{ title: 'Англійська -> Українська' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
