import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('../assets/SOS.png')}
                style={{ width: 110, height: 45 }}
            />
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={35} color="#8CD2CA" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        marginTop: 25,
        borderBottomWidth: 1,  // Fix the typo here
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
});

export default Header;
