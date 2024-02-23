import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image, TouchableOpacity, Pressable, Text } from 'react-native';

export const Button = (props) => {
    const { onPress, title, style} = props;
    const [isPressed, setIsPressed] = React.useState(false);

    
    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    
    const buttonStyles = {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginLeft: 55,
        width: 100,
        borderRadius: 4,
        backgroundColor: isPressed ? '#67b0ae' : '#84c4c0', // Change background color when pressed
    };

    return (
      <Pressable 
        style={buttonStyles}
        onPress={props.onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        >
        <Text style={{
            fontSize: 14,
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'white',
        }}>
            {props.title}
        </Text>
      </Pressable>
    );
  }