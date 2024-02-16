import * as React from 'react'
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import SearchScreen from '../screens/SearchScreen';
import ParameterScreen from '../screens/ParameterScreen';
import MessagesScreen from '../screens/MessagesScreen';


const homeName = 'Home';
const searchName = 'Rechercher'
const favouritesName = 'Favoris'
const messageName = 'Messages'
const parametersName = 'Paramètres'

const Tab = createBottomTabNavigator();

export default function Footer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline'
                    }else if (rn === favouritesName) {
                        iconName = focused ? 'heart' : 'heart-outline'
                    }else if (rn === messageName) {
                        iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'
                    }else if (rn === parametersName) {
                        iconName = focused ? 'settings-sharp' : 'settings-outline'
                    }
                    return <Ionicons name={iconName} size={size} color="#00000"/>
                },
                tabBarStyle: {
                    backgroundColor: '#fb3739',
                    
                }
            })}
    
            >
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={searchName} component={SearchScreen}/>
                <Tab.Screen name={favouritesName} component={FavouritesScreen}/>
                <Tab.Screen name={messageName} component={MessagesScreen}/>
                <Tab.Screen name={parametersName} component={ParameterScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )

}