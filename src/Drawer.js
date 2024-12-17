import React from 'react';
import { View, Text, Share } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import Bookmark from './Bookmark';
import Support from './Support';
import MainTab from './MainTab';
import About from './About';
import Profile from './Profile';
import Setting from './Setting';

function CustomDrawerContent(props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this app',
        url: 'https://example.com',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Share"
        icon={({ color, size }) => <AntDesign name="sharealt" size={size} color={color} />}
        onPress={onShare}
      />
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => <Feather name="log-out" size={size} color={color} />}
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="MainTab"
        component={MainTab}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name="menu-fold"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Bookmark"
        component={Bookmark}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name="bookmarks-sharp"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="user-check"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="About System"
        component={About}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name="exclamationcircle"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <EvilIcons
              name="gear"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppDrawer() {
  return (
    <MyDrawer />
  );
}
