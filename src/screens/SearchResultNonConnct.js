import React from 'react';
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


export default function SearchResultNonConnect() {
    const { navigate } = useNavigation()
    const [selectedVille, setSelectedVille] = React.useState(null);
    const [selectedSpecialite, setSelectedSpecialite] = React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);

    const [isStartTimePickerVisible, setStartTimePickerVisible] = React.useState(false);
    const [selectedStartTime, setSelectedStartTime] = React.useState(null);

    const [isEndTimePickerVisible, setEndTimePickerVisible] = React.useState(false);
    const [selectedEndTime, setSelectedEndTime] = React.useState(null);

    const showDatePicker = () => setDatePickerVisible(true);
    const hideDatePicker = () => setDatePickerVisible(false);
    const handleDateConfirm = (date) => {
        hideDatePicker();
        setSelectedDate(date);
    };

    const showStartTimePicker = () => setStartTimePickerVisible(true);
    const hideStartTimePicker = () => setStartTimePickerVisible(false);
    const handleStartTimeConfirm = (time) => {
        hideStartTimePicker();
        setSelectedStartTime(time);
    };

    const showEndTimePicker = () => setEndTimePickerVisible(true);
    const hideEndTimePicker = () => setEndTimePickerVisible(false);
    const handleEndTimeConfirm = (time) => {
        hideEndTimePicker();
        setSelectedEndTime(time);
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
                        <Text style={styles.title}>Filtrer</Text>
                        <Text style={styles.subtitle}>Créer votre propre filtre</Text>

                        <View style={styles.pickerContainer}>
                            <RNPickerSelect
                                placeholder={{ label: 'Ville', value: null }}
                                items={villes ? villes.map((ville) => ({ label: ville.name, value: ville.id })) : []}
                                onValueChange={(value) => setSelectedVille(value)}
                                style={pickerSelectStyles}
                                value={selectedVille}
                            />
                        </View>

                        <View style={styles.pickerContainer}>
                            <RNPickerSelect
                                placeholder={{ label: 'Spécialité', value: null }}
                                items={specialities ? specialities.map((specialite) => ({ label: specialite.name, value: specialite.id })) : []}
                                onValueChange={(value) => setSelectedSpecialite(value)}
                                style={pickerSelectStyles}
                                value={selectedSpecialite}
                            />
                        </View>

                        {/* Date Picker */}
                        <View style={styles.datePickerContainer}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#84c7c0' }} >Date : </Text>
                            <Text style={styles.selectedDateText}> </Text>
                            <TouchableOpacity onPress={showDatePicker}>
                                <Icon name="calendar-outline" size={24} color="blue" />
                            </TouchableOpacity>
                            <Text style={styles.selectedDateText}>{selectedDate.toDateString()}</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleDateConfirm}
                            onCancel={hideDatePicker}
                        />

                        {/* Start Time Picker */}
                        <View style={styles.datePickerContainer}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#84c7c0' }} >Horaire de début : </Text>
                            <TouchableOpacity onPress={showStartTimePicker}>
                                <Icon name="time-outline" size={24} color="blue" />
                            </TouchableOpacity>
                            <Text style={styles.selectedTimeText}>{selectedStartTime ? selectedStartTime.toTimeString().slice(0, 5) : '  00:00'}</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isStartTimePickerVisible}
                            mode="time"
                            onConfirm={handleStartTimeConfirm}
                            onCancel={hideStartTimePicker}
                        />

                        {/* End Time Picker */}
                        <View style={styles.datePickerContainer}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#84c7c0' }} >Horaire de fin :  </Text>
                            <TouchableOpacity onPress={showEndTimePicker}>
                                <Icon name="time-outline" size={24} color="blue" />
                            </TouchableOpacity>
                            <Text style={styles.selectedTimeText}>{selectedEndTime ? selectedEndTime.toTimeString().slice(0, 5) : '   00:00'}</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isEndTimePickerVisible}
                            mode="time"
                            onConfirm={handleEndTimeConfirm}
                            onCancel={hideEndTimePicker}
                        />
                        <TouchableOpacity style={styles.searchButton2} onPress={() => navigate('homeSearch')}>
                            <Text style={styles.searchButtonText}>Rechercher</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <PostItem item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View >
                    <FlatList
                        data={posts}
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
    searchButton2: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        width: 110,
        marginBottom: 15,
    },
    pickerContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
        width: 300,
        alignItems: 'center',
        marginLeft: 5,
    },
    datePickerContainer: {
        marginLeft: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 8,
        marginBottom: 8,
    },
    selectedDateText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
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
