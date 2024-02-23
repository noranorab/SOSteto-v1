import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Image, Pressable} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from './Button';
import { PostContent } from './PostContent';


  

export const PostItem = ({ item }) => {
    const {navigate} = useNavigation();
    return (
        <View style={{
            marginLeft: 0,
            marginTop: 1,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E6E6E6',
            paddingBottom: 10,
            backgroundColor: 'white'}}>

            <PostContent item={item}/>
            <Button onPress={() => { 
                navigate("VoirProfileDetailsScreen", {item}) }}  title='Voir Profile' />
                

        </View>    
      
           
            
       
    )
}

