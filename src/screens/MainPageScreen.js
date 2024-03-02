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

import Ionicons from 'react-native-vector-icons/Ionicons';

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

    return (
        <View style={{ backgroundColor: '#84c7c0', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 20, width: '100%' }}>Trouvez votre infirmier(ère) avec un seul click</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 10 }}>
                Faîte une recherche rapide !
            </Text>
            <View style={{ width: '100%', marginLeft: 10, paddingTop: 20, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', marginBottom: 5 }}>Spécialité : </Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Spécialité', value: null }}
                        items={specialities ? specialities.map((specialite) => ({ label: specialite.name, value: specialite.id })) : []}
                        onValueChange={(value) => setSelectedSpecialite(value)}
                        style={pickerSelectStyles}
                        value={selectedSpecialite}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', marginBottom: 5, marginRight: 40 }}>Ville :</Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Ville', value: null }}
                        items={villes ? villes.map((ville) => ({ label: ville.name, value: ville.id })) : []}
                        onValueChange={(value) => setSelectedVille(value)}
                        style={pickerSelectStyles}
                        value={selectedVille}
                    />
                </View>



            </View>




            <TouchableOpacity style={styles.submitButton} onPress={() => navigate('homeSearch')}>
                <Ionicons name="search-outline" size={20} color='#C1C1C1' />
                <Text style={styles.submitButtonText}>Rechercher </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('home7')}>
                <Text style={{ fontSize: 14, color: '#0B0A62', padding: 8, marginBottom: 5, textDecorationLine: 'underline', marginTop: 8 }}>
                    Vous êtes infirmière ?
                </Text>
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        width: 330,
        paddingHorizontal: 50,
        marginTop: 15,

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
        width: 230,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 5,

    },
    inputAndroid: {
        width: 230,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});