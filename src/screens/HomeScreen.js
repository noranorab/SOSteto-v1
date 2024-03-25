import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import { PostItem } from '../components/PostItem';
import { posts } from '../data/posts';



export default function HomeScreen() {
    const [infirmiers, setInfirmiers] = React.useState([])

    const getAllInfirmiers = () => {
        try {
        axios.get('https://us-central1-sosteto-f1066.cloudfunctions.net/api/api/users?role=infirmier').then
        (res => res.data)
        .then(
            (infirmiers) => {
                setInfirmiers(infirmiers)
            }
        )
        .catch (error => {
            console.error('Error fetching infirmiers info:', error);
        })
    } catch (error){
        console.error("error fetching data")
    }
}
        

    React.useEffect(() => {
        console.log('heeellloo')
        getAllInfirmiers()
        
    }, [])
    if (!infirmiers) {
        return <Text>Loading user data...</Text>
    }

    return(
        
        <View>
            <FlatList 
            data={infirmiers}
            renderItem={({item}) => <PostItem item={item} /> }
            keyExtractor={(item) => item._id.toString()}
            />
        </View>
    )
}