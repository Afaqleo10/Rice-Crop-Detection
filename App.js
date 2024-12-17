import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import SignupScreen from './src/Signup';
import LoginScreen from './src/Login';
import RestScreen from './src/Rest';
import MainTabScreen from './src/MainTab';
import DrawerScreen from './src/Drawer';
import { auth } from './firebase/firebase.config';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainTab" component={MainTabScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;