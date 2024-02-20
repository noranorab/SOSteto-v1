import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import MessagesScreen from './src/screens/AjouterScreen';
import ParameterScreen from './src/screens/ParameterScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';



function App(){
  return(
  <NavigationContainer>
    <View style={{
        flex: 1
    }}>
    <Footer/>
    </View>
    
</NavigationContainer>
    
  )
}

export default App;