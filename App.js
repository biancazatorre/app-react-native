import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen}
                     options={{ headerShown: false  }}  
                    
                />
                <Stack.Screen 
                    name="DetailScreen" 
                    component={DetailScreen} 
                    options={{ headerShown: false  }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
