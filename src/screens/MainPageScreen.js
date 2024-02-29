import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Platform, Pressable } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from "@react-native-community/datetimepicker"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import { villes } from '../data/villes';
import { specialities } from '../data/specialities';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import FooterMainPage from '../components/FooterMainPage';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import RNDateTimePicker from '@react-native-community/datetimepicker';


const buttonStyles = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 100,
    borderRadius: 4,
    marginTop: 20
    
};

  

const Header = () => {
    const { navigate } = useNavigation()

    const [selectedVille, setSelectedVille] = React.useState(null);
    const [selectedSpecialite, setSelectedSpecialite] = React.useState(null);

    const [date, setDate] = React.useState(new Date())
    const [showPicker, setShowPicker] = React.useState(false)
    const [dateOfSelection, setDateOfSelection] = React.useState("")

    const [time, setTime] = React.useState(new Date() )
    const [startTime, setStartTime] = React.useState(new Date());
    const [endTime, setEndTime] = React.useState(new Date());
    const [showStartTimePicker, setShowStartTimePicker] = React.useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = React.useState(false);
    const [startTimeOfSelection, setStartTimeOfSelection] = React.useState("");
    const [endTimeOfSelection, setEndTimeOfSelection] = React.useState("");



    
    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }
    const toggleStartTimePicker = () => {
        setShowStartTimePicker(!showStartTimePicker);
    };

    const toggleEndTimePicker = () => {
        setShowEndTimePicker(!showEndTimePicker);
    };


    const confirmIOSDate = () => {
        setDateOfSelection(date.toDateString())
        toggleDatePicker()
    }
    const confirmIOSTime = (isStartTime) => {
        if (isStartTime) {
            setStartTimeOfSelection(startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            toggleStartTimePicker();
        } else {
            setEndTimeOfSelection(endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            toggleEndTimePicker();
        }
    };
    const handleTimeChange = ({ type }, selectedTime, isStartTime) => {
        if (type == 'set') {
            const currentTime = selectedTime || (isStartTime ? startTime : endTime); // Use current time if no time selected
            if (isStartTime) {
                setStartTime(currentTime);
            } else {
                setEndTime(currentTime);
            }
        } else {
            if (isStartTime) {
                toggleStartTimePicker();
            } else {
                toggleEndTimePicker();
            }
        }
    };

    const onChange = ({type}, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate;
            setDate(currentDate)
        }else {
            toggleDatePicker()
        }
    }
    
    return (
        <View style={{ backgroundColor: '#84c7c0', padding: 10, height: 500 }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 20, width: 190}}>Trouvez votre infirmier(ère) avec un seul click</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 10}}>
                Faîte une recherche rapide !
            </Text>
            <View style={{ width: '100%', marginLeft: 10, paddingTop:20, flexDirection: 'column' }}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'white', marginBottom: 5, marginRight: 40}}>Ville :</Text>
                    <RNPickerSelect
                    placeholder={{ label: 'Ville', value: null }}
                    items={villes ? villes.map((ville) => ({ label: ville.name, value: ville.id })) : []}
                    onValueChange={(value) => setSelectedVille(value)}
                    style={pickerSelectStyles}
                    value={selectedVille}
                />
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'white', marginBottom: 5}}>Spécialité : </Text>
                    <RNPickerSelect
                    placeholder={{ label: 'Spécialité', value: null }}
                    items={specialities ? specialities.map((specialite) => ({ label: specialite.name, value: specialite.id })) : []}
                    onValueChange={(value) => setSelectedSpecialite(value)}
                    style={pickerSelectStyles}
                    value={selectedSpecialite}
                />
                </View>
                
                
            </View>
            <GestureHandlerRootView style={{marginLeft: 10, paddingTop:5, style: 'relative'}}>
                <View >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{position: 'relative'}}>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginRight: 50}}>Date :</Text>
                            <View style={{flexDirection: 'column'}}>
                                {showPicker && ( <DateTimePicker mode="date" testID='dateID' textColor='white' display="spinner" value={date} onChange={onChange} style={{height: 120, marginTop: -20, flex: 1}}/>)}
                                
                                
                                {showPicker && Platform.OS == 'ios' && (
                                    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                        <TouchableOpacity onPress={toggleDatePicker}>
                                            <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>Annuler</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={confirmIOSDate}>
                                            <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>Confirmer</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </View>
                    {!showPicker && (
                        <Pressable 
                        onPress={toggleDatePicker}
                        >
                            <TextInput
                            style={{marginTop: 5, paddingTop: 5,fontSize: 14, borderColor:'white', backgroundColor: 'white', borderRadius: 5, width: 230, height: 40, paddingLeft: 10, paddingBottom: 5}}
                            placeholder='Lun 26 Fév 2024'
                            value={dateOfSelection}
                            onChangeText={setDateOfSelection}
                            placeholderTextColor="#C1C1C1"
                            editable={false}
                            onPressIn={toggleDatePicker}
                            />
                        </Pressable>
                    )}
                    </View>
                    
                    {/* horaire */}
                    <View style={{marginRight: 5}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginRight: 30}}>Horaire :</Text>
                        
                        <View style={{position: 'relative', top: 20}}>

                        
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', marginRight: 10, }}>De</Text>
                                    <View style={{flexDirection: 'column' }}>
                                    {showStartTimePicker && ( <DateTimePicker testID="timeStartPicker" is24Hour={true} mode="time" display="spinner" value={startTime} onChange={handleTimeChange} style={{width: 100, height: 100, textColor: 'white', top: 20}}/>)}
                                    {showStartTimePicker && Platform.OS == 'ios' && (
                                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                            <TouchableOpacity onPress={toggleStartTimePicker}>
                                                <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>Annuler</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => confirmIOSTime(true)}>
                                                <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, marginLeft: 20}}>Confirmer</Text>
                                            </TouchableOpacity>
                                    </View>
                                )}
                                </View>
                                
                                
                                {!showStartTimePicker && (
                                    <Pressable 
                                    onPress={toggleStartTimePicker}
                                    >
                                        <TextInput
                                        style={{marginTop: 5, paddingTop: 5,fontSize: 14, borderColor:'white', backgroundColor: 'white', borderRadius: 5, width: 85, height: 40, paddingLeft: 10, paddingBottom: 5, marginRight: 15}}
                                        placeholder='HH:MM'
                                        value={startTimeOfSelection}
                                        onChangeText={setStartTimeOfSelection}
                                        placeholderTextColor="#C1C1C1"
                                        editable={false}
                                        onPressIn={toggleStartTimePicker}
                                        />
                                    </Pressable>
                                )}

                              
                                
                            </View>
                        </View>

                        <View style={{position: 'relative'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', left: 130, bottom: 45}}>
                                <Text style={{color: 'white', fontWeight: 'bold', marginRight: 10, }}>A</Text>
                                <View style={{flexDirection: 'column'}}>
                                {showEndTimePicker && ( 
                                <DateTimePicker testID="endTimePicker" is24Hour={true} mode="time" display="spinner" value={time} onChange={handleTimeChange} style={{height: 120, marginTop: -10}}/>
                                )}
                                {showEndTimePicker && Platform.OS == 'ios' && (
                                    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                        <TouchableOpacity onPress={toggleEndTimePicker}>
                                            <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>Annuler</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => confirmIOSTime(false)}>
                                            <Text style={{marginTop: 10, fontWeight:'bold', color:'white', borderColor: 'white', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>Confirmer</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                </View>
                                {!showEndTimePicker && (
                                    <Pressable 
                                    onPress={toggleEndTimePicker}
                                    >
                                        <TextInput
                                        style={{marginTop: 5, paddingTop: 5,fontSize: 14, borderColor:'white', backgroundColor: 'white', borderRadius: 5, width: 85, height: 40, paddingLeft: 10, paddingBottom: 5}}
                                        placeholder='HH:MM'
                                        value={endTimeOfSelection}
                                        onChangeText={setEndTimeOfSelection}
                                        placeholderTextColor="#C1C1C1"
                                        editable={false}
                                        onPressIn={toggleEndTimePicker}
                                        />
                                    </Pressable>
                                )}
                                
                            </View>    
                            </View>
                        </View>
                    

                    </View>
                </View>

                </View>
            </GestureHandlerRootView>

            
            <TouchableOpacity style={styles.submitButton} onPress={() => navigate('home7')}>
                <Text style={styles.submitButtonText}>Rechercher </Text>
            </TouchableOpacity>

            

        </View>

    )
}

export default function MainPageScreen() {



    return (
        <View style={styles.container}>


            <ScrollView
                style={styles.scrollContainer}>
                <Header />

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/image2.png')}
                        style={styles.image}
                    />
                </View>
                <View style={{ flexDirection: 'column', height: 260, backgroundColor: '#84c7c0', paddingLeft: 10, paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', width: 300, paddingBottom: 10 }} >Vous cherchez une offre de travail qui convient à votre disponibilité et à vos attentes salariales ?</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingBottom: 10 }}>Vous recherchez un(e) infirmier(ère) ?</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }} >SOSteto est votre solution parfaite !</Text>
                </View>
                <View style={styles.Section2}>
                    <Icon name="security" size={55} color="#8CD2CA" style={{ marginTop: 20 }} />
                    <Text style={{ justifyContent: 'center', fontSize: 17, fontWeight: 'bold', paddingTop: 20 }}>Protection des données personnelles</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 15, width: 300, fontSize: 17 }}>   SOSteto est 100% conforme en matière de protection des données à caractère personnel de santé et utilise les standards technologiques les plus sécurisés. </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/image1.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.additionalSection}>
                    <Icon1 name="cursor-default-click" size={40} color="#fff" style={{ marginTop: 20 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', width: 300, paddingBottom: 10, textAlign: 'center', paddingTop: 15 }}>Ne perdez pas de temps! Créez un compte sur SOSteto et trouvez l'infirmière dont vous avez besoin à tout moment et n'importe où.</Text>
                </View>
                <FooterMainPage></FooterMainPage>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    scrollContainer: {

        flex: 1,

    },

    additionalSection: {
        backgroundColor: '#8CD2CA',
        padding: 18,
        alignItems: 'center',

    },
    sectionText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },
    formContainer: {
        width: '80%',
    },

    submitButton: {
        
        marginTop: 60,
        marginLeft: 120,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        width: 110,
        
        // alignItems: 'center',
    },
    submitButtonText: {
        color: '#C1C1C1',
        fontSize: 14,
        textAlign: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 0,
    },
    image: {

        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    Section2: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        paddingBottom: 50
    },
    sectionText2: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },
    sectionText22: {
        color: 'black',
        fontSize: 17,
        marginBottom: 0,
        marginTop: 0,
        padding: 10,
    },
    icon: {
        color: '#fff',
        fontSize: 24,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width : 230,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 5,

    },
    inputAndroid: {
        backgroundColor: '#fff',
        // paddingVertical: 8,
        // paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 5,
        // width: '70%',
    },
});