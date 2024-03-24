import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import { PostItem } from '../components/PostItem';
import { posts } from '../data/posts';



export default function HomeScreen() {
    const [infirmiers, setInfirmiers] = React.useState([])


    
    const getAllInfirmiers = async () => {
        try {
        
        const response = await axios.get('http://192.168.62.220:3000/api/users?role=infirmier');
        const data = response.data
        console.log(data)
        setInfirmiers(data)
        } catch (error) {
            console.error('Error fetching infirmiers info:', error);
        
        }
  }

    React.useEffect(() => {
        setTimeout(getAllInfirmiers(),3000)
        
    }, [])
    return(
        <View >
            <FlatList 
            data={infirmiers}
            renderItem={({item}) => <PostItem item={item} /> }
            keyExtractor={(item) => item._id.toString()}
            />
        </View>
    )
}