import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image, TouchableOpacity, Pressable } from 'react-native';
import AjouterScreen from '../screens/AjouterScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import ParameterScreen from '../screens/ParameterScreen';
import SearchScreen from '../screens/SearchScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from '../screens/HomeStackScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';


const Tab = createBottomTabNavigator();


const homeName = 'Home';
const searchName = 'Rechercher'
const favouritesName = 'Favoris'
const messageName = 'Ajouter'
const parametersName = 'Paramètres'
const notificationsName = 'Notifications'


const Header = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("home3") } style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                            
                            <View style={{width: '100%', marginLeft: 160, flexDirection: 'row', position: 'relative'}}>
                                <Ionicons style={{paddingRight: 10}} name="help-circle-outline" color="black" size={28} />
                                <Ionicons style={{paddingRight: 10}} name="notifications-outline" color="black" size={24} />
                                <Ionicons name="person-outline" color="black" size={24} />
                            </View>

                                
            
        </Pressable>
    )
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="home2" component={HomeScreen}/>
            <HomeStack.Screen name="home3" component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}








export default function Footer(){
    return (

            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, focused, size}) =>{
                        let iconName;
                        if (route.name === homeName) {
                            iconName = focused? "home" : "home-outline";
                        }else if(route.name == searchName) {
                            iconName = focused? "search" : "search-outline";
                        }else if(route.name == favouritesName) {
                            iconName = focused? "heart" : "heart-outline";
                        }else if(route.name == messageName) {
                            iconName = focused? "add" : "add-outline";
                        }else if(route.name == parametersName) {
                            iconName = focused? "settings" : "settings-outline";
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
            >
                <Tab.Screen 
                name={homeName} component={HomeStackGroup} options={{
                    header:() => (
    
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between', paddingTop: 40, backgroundColor: 'white', marginLeft: 5}}>
                            <Image
                                source={require("./SOS.png")}
                                style={{width: 100, height: 40}}
        
                                />
                            <Header/>
                        </View>
    )}}/>
                    
            
            
                <Tab.Screen 
                name={searchName} component={SearchScreen}/>
            <Tab.Screen 
                name={favouritesName} component={FavouritesScreen}/>
              <Tab.Screen 
                name={messageName} component={AjouterScreen}/>
            <Tab.Screen 
                name={parametersName} component={ParameterScreen}/>
            </Tab.Navigator>

 
    )
}
 