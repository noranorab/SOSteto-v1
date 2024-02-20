import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';






export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            marginTop: 50,
            paddingHorizontal: 10,
        }}>
            <Image
                source={require('./SOS.png')}
                style={{
                    width: 100,
                    height: 30,
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('AjouterScreen')}>
                    <Ionicons name="help-circle-outline" size={28} color="#808080" style={{ paddingRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AjouterScreen')}>
                    <Ionicons name="notifications-outline" size={24} color="#808080" style={{ paddingRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AjouterScreen')}>
                    <Ionicons name="person-outline" size={24} color="#808080" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
