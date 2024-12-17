import React from "react";
import { View, Text, ScrollView, Image } from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{marginTop: 2, height: 50, marginLeft: 1, backgroundColor: 'gray', borderColor: 'blue', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, fontStyle: 'italic'}}>
          Rice Crop Detector
        </Text>
      </View>
      <View>
        <Text style={{marginTop: 1, marginLeft: 1, backgroundColor: 'grey', borderColor: 'blue', textAlign: 'center', color: 'yellow', fontWeight: 'bold', fontSize: 16, height: 50, fontStyle: 'italic'}}>
          Classifying Rice Crop as Healthy or Unhealthy
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 3}}>
        <Image 
          source={require("./assets/rice-crop.jpg")} // Update this with the path to your image
          style={{width: 360, height: 255}} // Adjust the width and height as needed
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 1}}>
        <Image 
          source={require("./assets/Crop-Rice.jpg")} // Update this with the path to your image
          style={{width: 360, height: 270}} // Adjust the width and height as needed
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
