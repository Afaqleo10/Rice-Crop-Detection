import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const SettingScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Spanish' : 'English'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>App Language</Text>
        <TouchableOpacity style={styles.languageButton} onPress={handleLanguageChange}>
          <Text style={styles.languageButtonText}>{language}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  languageButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
