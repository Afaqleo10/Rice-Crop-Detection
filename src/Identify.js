import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const IdentifyScreen = () => {
  const onSelectImage = async () => {
    Alert.alert(
      'Select an option',
      'Choose an option to pick an image',
      [
        { text: 'Camera', onPress: onCamera },
        { text: 'Gallery', onPress: onGallery },
        { text: 'Cancel', onPress: () => {} },
      ]
    );
  };

  const onCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 9],
        });

        // Log the result to inspect the response
        console.log('Camera result:', result);

        // Access the URI from the assets array
        const imageUri = result.assets?.[0]?.uri;

        if (imageUri) {
          console.log('Camera result URI:', imageUri);
          imageUpload(imageUri);
        } else {
          console.log('Camera cancelled or no URI available.');
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error in onCamera:', error);
    }
  };

  const onGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 9],
        });

        // Log the result to inspect the response
        console.log('Gallery result:', result);

        // Access the URI from the assets array
        const imageUri = result.assets?.[0]?.uri;

        if (imageUri) {
          console.log('Gallery result URI:', imageUri);
          imageUpload(imageUri);
        } else {
          console.log('Gallery cancelled or no URI available.');
        }
      } else {
        console.log('Gallery permission denied');
      }
    } catch (error) {
      console.error('Error in onGallery:', error);
    }
  };

  const imageUpload = async (imagePath) => {
    try {
      if (!imagePath) {
        console.log('Image path is undefined. Skipping image upload.');
        return;
      }

      const imageData = new FormData();
      imageData.append('image', {
        uri: imagePath,
        name: 'image.jpg',
        type: 'image/jpeg', // Ensure the correct MIME type
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      console.log('Uploading image data:', imageData);
      const response = await axios.post('http://192.168.227.61:5000/predict_2', imageData, config);
      console.log('Image upload successful:', response.data);

      const { predicted_class } = response.data;
      console.log('Predicted Class:', predicted_class);

      // Show the result in an alert
      Alert.alert('Prediction Result', `Predicted Class: ${predicted_class}`);
    } catch (error) {
      console.error('Failed to upload image:', error);
      Alert.alert('Error', 'Failed to upload image, please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} activeOpacity={0.8} onPress={onSelectImage}>
        <Text style={styles.textStyle}>Select your image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  btnStyle: {
    backgroundColor: 'gray',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
});

export default IdentifyScreen;
