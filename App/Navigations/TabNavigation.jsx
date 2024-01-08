import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="home" 
          component={HomeScreen} 
          options={{ 
            tabBarLabel: "Search",
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon: ({color, size}) => (
              <Feather name="search" size={24} color="black" />
            ) 
          }} 
        />
        <Tab.Screen 
          name="profile" 
          component={ProfileScreen} 
          options={{ 
            tabBarLabel: "profile",
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon: ({color, size}) => (
              <AntDesign name="profile" size={24} color="black" />
            )  
          }} 
        />
        <Tab.Screen 
          name="favourite" 
          component={FavouriteScreen} 
          options={{ 
            tabBarLabel: "favourite",
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon: ({color, size}) => (
              <AntDesign name="heart" size={24} color="black" />
            )  
          }} 
        />
      </Tab.Navigator>
  )
}

export default TabNavigation
