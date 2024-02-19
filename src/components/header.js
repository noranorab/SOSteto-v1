import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export default function Header(){
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'right',
            height: 50,
            marginTop: 50,
            paddingHorizontal: 10,
        }}>
            <Image
                source={require('../../assets/SOS.png')}
                style={
                    {
                        width: 100,
                        height: 30,
                    }
                }
            />
            <View style={
                {
                   flexDirection: 'row',
                }
            }>
                    <Ionicons style={{
                        paddingLeft: 13
                    }} name="help-circle-outline" size={28} color="black" />
                    <Ionicons style={{
                        paddingLeft: 13
                    }}
                        name="notifications-outline" size={24} color="black" />
                    <Ionicons style={{
                        paddingLeft: 13
                    }} name="person-outline" size={24} color="black" />
                

            </View>
           

        </View>

    );
}
