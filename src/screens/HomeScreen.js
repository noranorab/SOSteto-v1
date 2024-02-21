import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PostsList} from '../components/PostsList';

export default function HomeScreen() {
    return(
       <PostsList/>
    )
}