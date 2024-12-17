import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Background from './Background';
import { darkgreen } from './Constants';
import Field from './Field';
import Btn from './Btn';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User Created Successfully:', userCredential);
        alert("User Created Successfully");
        navigation.navigate("Drawer"); // Navigating to MainTab after successful signup
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width: 370 }}>
        <Text style={{ color: 'white', fontSize: 65, fontWeight: 'bold', marginTop: 140 }}>Signup</Text>
        <Text style={{ color: 'white', fontSize: 19, fontWeight: "bold", marginBottom: 40 }}>Create a New Account</Text>
        <View style={{ backgroundColor: "white", height: 700, width: 370, borderTopLeftRadius: 45, paddingTop: 50, alignItems: 'center' }}>
          <Field placeholder="Name" />
          <Field placeholder="Email Address" keyboardType={"email-address"} onChangeText={(text) => setEmail(text)} />
          <Field placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
          <View style={{ display: "flex", flexDirection: "row", width: '100%', paddingRight: 16 }}>
            <Text style={{ color: "grey", fontSize: 16 }}>By signing in, you agree to our {""}</Text>
            <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 16 }}>Terms & Conditions</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: '80%', paddingRight: 16, marginBottom: 10 }}>
            <Text style={{ color: "grey", fontSize: 16 }}>and {" "}</Text>
            <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
          </View>
          <Btn textColor='white' bgColor={darkgreen} btnLabel="Signup" Press={handleSignup} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Already Have An Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 13 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

export default Signup;