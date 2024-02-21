import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Image, Pressable} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = (props) => {
    const { onPress, title = 'Voir Profile'} = props;
    const [isPressed, setIsPressed] = React.useState(false);

    
    const buttonStyles = {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: 100,
        borderRadius: 4,
        backgroundColor: isPressed ? '#67b0ae' : '#84c4c0', // Change background color when pressed
    };
    
    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
      <Pressable 
        style={buttonStyles}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        >
        <Text style={{
            fontSize: 14,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        }}>
            {title}
        </Text>
      </Pressable>
    );
  }
  

export const PostItem = ({ item }) => {
    const {navigate} = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            marginLeft: 0,
            marginTop: 1,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E6E6E6',
            paddingBottom: 10,
            backgroundColor: 'white'

        }}>
            <Image style={{
                resizeMode: 'cover',
                width: 45,
                height: 45,
                borderRadius: 50,
                marginRight: 10,
            }} source={item.sourceImageProfile}/>
            <View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        fontWeight : 'bold',
                        fontSize : 16
                    }}>{item.postOwner}</Text>
                  
                    <Ionicons style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginTop: 5
                    }} name="ellipse-sharp" size={10} color={item.actif == 'True' ? "#26ea01" : "#959595" }/>
                 
                </View>
                
                <Text style={{
                    fontSize : 14
                }}>{item.ownerBio}</Text>
                <Text style={{
                    fontSize : 14,
                    color: '#808080',
                    paddingBottom: 10

                }}>{item.location}</Text>
                <Button onPress={() => { 
                    
                    navigate("VoirProfileDetailsScreen", {item}) }}/>
                
            </View>
            
            
        </View>
    )
}