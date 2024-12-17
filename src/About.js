import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const AboutScreen = () => {
  const handleLinkPress = () => {
    const url = "https://example.com/healthy-unhealthy-rice-detection";
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Healthy and Unhealthy Rice Detection</Text>
        <Text style={styles.description}>
          This project focuses on the detection of Healthy and Unhealthy Rice using computer vision techniques. It aims to provide a solution for identifying Rice that has deteriorated in quality and may not be safe for consumption.
        </Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.link}>
            Learn more about the Healthy and Unhealthy Rice Detection project
            <Text style={styles.linkText}> here</Text>.
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>How to Use</Text>
        <Text style={styles.description}>
          To use this app, you need to log-in or sign-up. After completing the registration process, you will see a message indicating successful app opening. In the Home, you can view the Rice. If you want to identify the healthy and unhealthy rice simply tap on identify and choice the gallery or upload the image. For providing feedback, go to the Support in the Drawer menu. You can also find more information about the system in the About.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: 'aqua', 
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    backgroundColor: 'pink', 
    paddingVertical: 8,
    borderRadius: 8,
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'pink', 
    paddingVertical: 8,
    marginBottom: 30,
    borderRadius: 8,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AboutScreen;
