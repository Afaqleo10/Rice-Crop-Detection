import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, EvilIcons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Identity from './Identify';
import Finance from './Finance';
import Task from './Task';
const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'grey' }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Identify"
        component={Identity}
        options={{
          tabBarLabel: 'Identify',
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera" color={color} size={26} />
          ),
          backgroundColor: "grey"
        }}
      />
      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarLabel: 'Finance',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
