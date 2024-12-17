import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Background from "./Background";
import Btn from "./Btn";
import { darkgreen } from "./Constants";

const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 20, marginVertical: 35 }}>
            <Text style={{ color: 'white', fontSize: 45 }}></Text>
            <Text style={{ color: 'white', fontSize: 45, marginBottom: 200 }}></Text>
            <Btn bgColor='white' textColor={darkgreen} btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
            <Btn bgColor='white' textColor={darkgreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;