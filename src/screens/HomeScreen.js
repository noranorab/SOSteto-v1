import * as React from 'react';
import { View, Text} from 'react-native';


export default function HomeScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            onPress = {() => alert('This is the favourites screen.')}
            style={{ fontSize: 50, fontWeight: 'bold', color:'#8cd2ca'}}>
                   SOSteto
            </Text>
        </View>
    )
}