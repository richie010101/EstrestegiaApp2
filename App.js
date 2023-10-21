import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';
import Juego1 from './src/screens/juego1/Juego1';
import Juego2 from './src/screens/juego2/Juego2';
import Juego3 from './src/screens/Juego3/Juego3';
import JuegosMenu from './src/screens/JuegosMenu';
import Reproductor from './src/components/Reproductor';
import HerramientasMenu from './src/screens/HerramientasMenu';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/> 
            <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name='Juego1' component={Juego1} options={{ headerShown: false }} />
            <Stack.Screen name='Juego2' component={Juego2} options={{ headerShown: false }} />
            <Stack.Screen name='Juego3' component={Juego3} options={{ headerShown: false }} />
            <Stack.Screen name='MenuJ' component={JuegosMenu} options={{ headerShown: false }} />
            <Stack.Screen name='Herramientas' component={HerramientasMenu} options={{ headerShown: false }} />
            <Stack.Screen name='Reproductor' component={Reproductor} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
     
    )
}