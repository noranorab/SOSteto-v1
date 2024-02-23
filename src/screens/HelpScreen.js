import * as React from 'react';
import { View, Text} from 'react-native';


export default function HelpScreen() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            style={{ fontSize: 26, fontWeight: 'bold'}}>
                Help page
            </Text>
        </View>
    )
}