import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { darkgreen } from './Constants'; 
import Background from './Background'; 

const Rest = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (email !== '') {
    } else {
      alert("Please enter a valid email");
    }
  };
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>Reset your Password</Text>
        <View style={styles.inputContainer}>
          <Feather name="at-sign" size={18} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginLeft: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70%', 
  },
  heading: {
    marginLeft: 24,
        fontSize: 35,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%', 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, 
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'black',
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 20,
    width: '1900%', 
    height: 30, 
  },
  button: {
    width: '90%', 
    height: 50,
    backgroundColor: darkgreen,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 18, 
  },
});

export default Rest;
