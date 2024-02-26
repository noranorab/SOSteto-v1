import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, FlatList} from 'react-native';
import { Demande } from '../components/Demande';


export default function ToutesMesDemandesScreen() {
    const {
        params: { mesDemandes },
    } = useRoute()
    return(
        <View >
            <FlatList 
            data={mesDemandes}
            renderItem={({item}) => <Demande item={item} /> }
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}