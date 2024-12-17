import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Profile = () => {
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // You can place your data fetching logic here
    // For example, fetching data from AsyncStorage or any other local storage
  }, []);

  const saveData = async () => {
    // Implement your logic to save data locally or using any other method
    alert("Profile Saved Successfully");
  };

  const updateProfile = async () => {
    // Implement your logic to update profile locally or using any other method
    alert("Profile Updated Successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Name:</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
          value={name}
        />
      </View>
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <TextInput
          onChangeText={(text) => setBio(text)}
          style={styles.textInput}
          value={bio}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Email:</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          value={email}
        />
      </View>
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Contact:</Text>
        <TextInput
          onChangeText={(text) => setContact(text)}
          style={styles.textInput}
          value={contact}
        />
      </View>
      {name === null && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => saveData()}>
          <Text style={styles.buttonText}>Save Data</Text>
        </TouchableOpacity>
      )}
      {name !== null && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => updateProfile()}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "red",
    marginBottom: 16,
  },
  infoLabel: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 3,
    flex: 1,
    marginLeft: 8,
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
