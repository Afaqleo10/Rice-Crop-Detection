import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Background from './Background';
import { darkgreen } from './Constants';
import Field from './Field';
import Btn from './Btn';
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User logged in successfully');
                alert("User Login Successfully");
                navigation.replace("Drawer"); // Navigate to MainTab after successful login
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <Background>
            <View style={{ alignItems: "center", width: 360 }}>
                <Text style={{ color: 'white', fontSize: 65, fontWeight: 'bold', marginVertical: 100 }}>Login</Text>
                <View style={{ backgroundColor: "white", height: 700, width: 370, borderTopLeftRadius: 45, paddingTop: 100, alignItems: 'center' }}>
                    <Text style={{ fontSize: 36, color: darkgreen, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>Login To Your Account</Text>
                    <Field placeholder="Email Address" keyboardType={"email-address"} onChangeText={(text) => setEmail(text)} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                    <View style={{ alignItems: 'flex-end', width: '80%', paddingRight: 16, marginBottom: 30 }}>
                        <TouchableOpacity 
        onPress={() => navigation.navigate('Rest')}
        color="green">
         <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
      </TouchableOpacity>
                    </View>
                    <Btn textColor='white' bgColor={darkgreen} btnLabel="Login" Press={handleLogin} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Don't Have An Account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 13 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
}

export default Login;