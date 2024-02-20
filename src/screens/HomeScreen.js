import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PostsList} from '../components/PostsList';

export default function HomeScreen() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <Pressable onPress={() => alert('hello')} style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between',
               
                }}>
                    <Image
                        source={require("../components/SOS.png")}
                        style={{width: 100, height: 40, marginLeft: 10}}

                    />
                    <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 160, width: '100%'}}>
                        <Ionicons style={{paddingRight: 10}} name="help-circle-outline" color="#808080" size={28} />
                        <Ionicons style={{paddingRight: 10}} name="notifications-outline" color="#808080" size={24} />
                        <Ionicons name="person-outline" color="#808080" size={24} />

                    </View>
                    

                </Pressable>
            ),
            
        })
    }, [])
    return(
       <PostsList/>
    )
}