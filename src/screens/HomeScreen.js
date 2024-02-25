import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import { PostItem } from '../components/PostItem';
import { posts } from '../data/posts';

export default function HomeScreen() {
    return(
        <View >
            <FlatList 
            data={posts}
            renderItem={({item}) => <PostItem item={item} /> }
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}