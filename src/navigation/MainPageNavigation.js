import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image, TouchableOpacity, Pressable, StyleSheet, Text, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { villes } from '../data/villes';
import { specialities } from '../data/specialities';
import MainPageScreen from '../screens/MainPageScreen';
import { Button } from '../components/Button';
import Footer from '../components/Footer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HelpScreen from '../screens/HelpScreen';
import SearchResultNonConnct from '../screens/SearchResultNonConnct';
import VoirProfileDetailsScreen from '../screens/VoirProfileDetailsScreen';
import Connect from '../screens/Connect';
import PublicProfileScreen from '../screens/PublicProfileScreen';
import EditPublicProfileScreen from '../screens/EditPublicProfileScreen';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#84c4c0',
    },
};


const HomeStack = createNativeStackNavigator();



function MainPageNavigation() {
    return (
        <HomeStack.Navigator headerMode="float">

            <HomeStack.Screen name="home6" component={MainPageScreen} options={{
                header: () => (

                    <View style={{ paddingTop: 50 }}>
                        <Image
                            source={require("../../assets/SOS.png")}
                            style={{ width: 100, height: 40, marginLeft: 150, marginBottom: 10 }}
                        />
                    </View>
                )

            }} />
            <HomeStack.Screen name="home7" component={Footer} options={{

                headerShown: false
            }} />
            <HomeStack.Screen name="homeSearch" component={SearchResultNonConnct} options={{

                headerShown: false
            }} />
            <HomeStack.Screen name="VoirProfileDetailsScreen" component={VoirProfileDetailsScreen} options={{

                headerShown: false
            }} />
            <HomeStack.Screen name="connect" component={Connect} options={{

                headerShown: false
            }} />



        </HomeStack.Navigator>
    )
}




export default function Navigation() {
    return (
        <NavigationContainer style={{ backgroundColor: 'white' }} theme={MyTheme}>
            <View style={{
                flex: 1
            }}>
                <MainPageNavigation />




                {/* <MainPageScreen/> */}

                {/* <Footer/> */}
            </View>

        </NavigationContainer>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 0,
    },

    additionalSection: {
        backgroundColor: '#84c7c0',
        alignItems: 'center',
    },
    sectionText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },

    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: 90,
    },
    buttonText: {
        color: 'red',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'black',
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 0,
    },
    image: {

        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    Section2: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
    },
    sectionText2: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },
    sectionText22: {
        color: 'black',
        fontSize: 17,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },
    icon: {
        color: '#fff',
        fontSize: 24,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});