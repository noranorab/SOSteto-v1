import * as React from 'react';
import { View, Text} from 'react-native';


export default function MessagesScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            onPress = {() => alert('This is the favourites screen.')}
            style={{ fontSize: 26, fontWeight: 'bold'}}>
                Public Profile
            </Text>
        </View>
    )
}