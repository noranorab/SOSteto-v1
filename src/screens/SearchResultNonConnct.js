import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import RNPickerSelect from 'react-native-picker-select';
import { villes } from '../data/villes';
import { specialities } from '../data/specialities';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library you are using
import { PostItem } from '../components/PostItem';
import { posts } from '../data/posts';
import { useNavigation } from '@react-navigation/core';
import Filtre from '../components/Filtre';


export default function SearchResultNonConnect() {
    const { navigate } = useNavigation();
    const [selectedCity, setSelectedCity] = React.useState(null);
    const [selectedSpecialties, setSelectedSpecialties] = React.useState([]);


    const [showFilters, setShowFilters] = React.useState(false);

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Vous n'avez pas encore trouvé ce qu'il vous faut ?</Text>
                        <Text style={styles.subtitle}>Personnalisez votre demande !</Text>

                        <TouchableOpacity style={styles.searchButton} onPress={() => navigate('connect')}>
                            <Text style={styles.searchButtonText}>Créer une demande</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleContainer}>

                        <TouchableOpacity onPress={handleToggleFilters} style={styles.filterToggle}>
                            <Text style={styles.title}>Filtrer</Text>
                            <Icon style={{ marginBottom: 5, marginLeft: 10 }} name={showFilters ? 'chevron-up' : 'chevron-down'} size={17} color="black" />
                        </TouchableOpacity>
                        {showFilters && <Filtre />}


                    </View>
                </View>
                <View >
                    <FlatList
                        data={infermiers}
                        renderItem={({ item }) => <PostItem item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </ScrollView >

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        padding: 15,
    },
    titleContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',

    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
    },
    searchButton: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        width: 180,
        marginBottom: 15,
    },
    searchButtonText: {
        color: 'black',
        fontSize: 16,
    },
    filterToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },





});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: '85%',
        borderRadius: 5,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '85%',
        borderRadius: 5,
    },
});
