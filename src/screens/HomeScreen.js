import * as React from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import { Button } from 'react-native-web';


const posts = [
    {id: 1, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc'},
    {id: 2, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc'},
    {id: 3, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc'},
    {id: 4, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc'}

]

const PostItem = ({ item }) => {
    return (
        <View>
            <View>
                <Text>{item.postOwner}</Text>
                <Text>{item.ownerBio}</Text>
                <Text>{item.location}</Text>
                
                
            </View>
            <Image/>
            
        </View>
    )
}

const PostsList = () => {
    return (
        <View>
            <FlatList 
            data={posts}
            renderItem={({item}) => <PostItem item={item} /> }
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}


export default function HomeScreen({navigation}) {
    return(
       <PostsList/>
    )
}