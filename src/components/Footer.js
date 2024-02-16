import * as React from 'react'
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PublicProfileScreen from '../screens/PublicProfileScreen';


const publicProfileName = 'Profile';



const Tab = createBottomTabNavigator();

export default function Footer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={publicProfileName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === publicProfileName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>


                }
            })}
            >
                <Tab.Screen name={publicProfileName} component={PublicProfileScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )

}