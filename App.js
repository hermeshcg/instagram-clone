import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyClf2ucVbvTpv8sqFW55_6GWWZjHItYJ2k',
  authDomain: 'inst-clone-454a5.firebaseapp.com',
  projectId: 'inst-clone-454a5',
  storageBucket: 'inst-clone-454a5.appspot.com',
  messagingSenderId: '586921841120',
  appId: '1:586921841120:web:eada43447bb63cca87db85',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
