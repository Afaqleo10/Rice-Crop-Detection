import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const BookmarkScreen = () => {
  const [selectedRice, setSelectedRice] = useState('');
  const [bookmarkList, setBookmarkList] = useState([
    'Brown Rice', 'Wild Rice', 'Black Rice', 'Red Rice', 'Jasmine Rice', 'Basmati Rice', 'White Rice', 'Sticky Rice', 'Instant Rice'
  ]);

  const riceOptions = [
    { label: 'Brown Rice (Healthy)', value: 'Brown Rice' },
    { label: 'Wild Rice (Healthy)', value: 'Wild Rice' },
    { label: 'Black Rice (Healthy)', value: 'Black Rice' },
    { label: 'Red Rice (Healthy)', value: 'Red Rice' },
    { label: 'Jasmine Rice (Unhealthy)', value: 'Jasmine Rice' },
    { label: 'Basmati Rice (Unhealthy)', value: 'Basmati Rice' },
    { label: 'White Rice (Unhealthy)', value: 'White Rice' },
    { label: 'Sticky Rice (Unhealthy)', value: 'Sticky Rice' },
    { label: 'Instant Rice (Unhealthy)', value: 'Instant Rice' },
  ];

  const addToBookmark = () => {
    if (bookmarkList.includes(selectedRice)) {
      alert('This rice is already added to the bookmark list.');
      return;
    }
    setBookmarkList([...bookmarkList, selectedRice]);
    setSelectedRice('');
  };

  const removeFromBookmark = (rice) => {
    const updatedList = bookmarkList.filter((item) => item !== rice);
    setBookmarkList(updatedList);
  };

  return (
    <View style={styles.container}>

      <DropDownPicker
        items={riceOptions}
        defaultValue={selectedRice}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        onChangeItem={(item) => setSelectedRice(item.value)}
        placeholder="Select a rice"
      />

      <TouchableOpacity style={styles.addButton} onPress={addToBookmark}>
        <Text style={styles.buttonText}>Add to Bookmark</Text>
      </TouchableOpacity>

      {bookmarkList.length > 0 && (
        <Text style={styles.bookmarkListHeading}>Bookmark List:</Text>
      )}

      {bookmarkList.map((rice, index) => (
        <View key={index} style={styles.bookmarkItem}>
          <Text>{rice}</Text>
          <TouchableOpacity onPress={() => removeFromBookmark(rice)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    backgroundColor: '#fafafa',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookmarkListHeading: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookmarkItem: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default BookmarkScreen;
