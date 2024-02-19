import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ParameterScreen from './src/screens/ParameterScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';
import Header from './src/components/Header';


const homeName = 'Home';
const searchName = 'Rechercher'
const favouritesName = 'Favoris'
const messageName = 'Messages'
const parametersName = 'Paramètres'

const Tab = createBottomTabNavigator();

function App(){
  return(
  <NavigationContainer>
    <View style={{
        flex: 1
    }}>
      <Header/>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={
        ({route}) => ({
          headerShown : false,
          tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                  iconName = focused ? 'home' : 'home-outline'
              }else if (rn === searchName) {
                  iconName = focused ? 'search' : 'search-outline'
              }else if (rn === favouritesName) {
                  iconName = focused ? 'heart' : 'heart-outline'
              }else if (rn === messageName) {
                  iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline'
              }else if (rn === parametersName) {
                  iconName = focused ? 'settings-sharp' : 'settings-outline'
              }
              return  <Ionicons name={iconName} size={size} color={color}/>
          }
          
      })}
      >
          <Tab.Screen name={homeName} component={HomeScreen}/>
          <Tab.Screen name={searchName} component={SearchScreen}/>
          <Tab.Screen name={favouritesName} component={FavouritesScreen}/>
          <Tab.Screen name={messageName} component={MessagesScreen}/>
          <Tab.Screen name={parametersName} component={ParameterScreen}/>

      </Tab.Navigator>
    </View>
    
</NavigationContainer>
    
  )
}

export default App;