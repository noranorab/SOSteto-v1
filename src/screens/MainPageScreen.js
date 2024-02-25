import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import { villes } from '../data/villes';
import { specialities } from '../data/specialities';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';

const buttonStyles = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 100,
    borderRadius: 4,
    
};

  

const Header = () => {
    const {navigate} = useNavigation()

    const [selectedVille, setSelectedVille] = React.useState(null);
    const [selectedSpecialite, setSelectedSpecialite] = React.useState(null);
    

    return (
        <View style={{backgroundColor: '#84c7c0' , height: 240}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 20, width: 190}}>Trouvez votre infirmier(ère) avec un seul click</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', paddingLeft: 10, paddingTop: 20}}>
                        Faîte une recherche rapide ! 
                    </Text>
                    <View style={{marginTop: 10, flexDirection: 'row', paddingLeft: 10 }}>
                        <RNPickerSelect
                            placeholder={{ label: 'Ville', value: null }}
                            items={villes ? villes.map((ville) => ({ label: ville.name, value: ville.id })) : []}
                            onValueChange={(value) => setSelectedVille(value)}
                            style={pickerSelectStyles}
                            value={selectedVille}
                        />
                        <RNPickerSelect
                            placeholder={{ label: 'Spécialité', value: null }}
                            items={specialities ? specialities.map((specialite) => ({ label: specialite.name, value: specialite.id })) : []}
                            onValueChange={(value) => setSelectedSpecialite(value)}
                            style={pickerSelectStyles}
                            value={selectedSpecialite}
                        />
                        
                      
                    </View>

                            <Button 
                            onPress={() => navigate('home7')} style={buttonStyles} title='Rechercher' />
        </View>
        
    )
}

export default function MainPageScreen() {
    
    const [selectedVille, setSelectedVille] = React.useState(null);
    const [selectedSpecialite, setSelectedSpecialite] = React.useState(null);

    return (
        <View style={styles.container}>
           
            <ScrollView
                style={styles.scrollContainer}
            >
                <Header/>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/image2.png')}
                        style={styles.image}
                    />
                </View>
                <View style={{flexDirection: 'column', height: 260, backgroundColor: '#84c7c0', paddingLeft: 10, paddingTop:20}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', width: 300, paddingBottom: 10}} >Vous cherchez une offre de travail qui convient à votre disponibilité et à vos attentes salariales ?</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', paddingBottom: 10}}>Vous recherchez un(e) infirmier(ère) ?</Text>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color:'white'}} >SOSteto est votre solution parfaite !</Text>
                </View>
                <View style={styles.Section2}>
                    <Icon name="security" size={55} color="#8CD2CA" style={{marginTop: 20}} />
                    <Text style={{justifyContent: 'center', fontSize: 17, fontWeight: 'bold', paddingTop: 20}}>Protection des données personnelles</Text>
                    <Text style={{textAlign: 'center', paddingTop: 15, width: 300, fontSize: 17}}>   SOSteto est 100% conforme en matière de protection des données à caractère personnel de santé et utilise les standards technologiques les plus sécurisés. </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/image1.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.additionalSection}>
                    <Icon1 name="cursor-default-click" size={40} color="#fff" style={{marginTop: 20}}/>
                    <Text style={{fontSize: 17, color:'white', width: 300, paddingBottom: 10, textAlign: 'center', paddingTop: 15}}>Ne perdez pas de temps! Créez un compte sur SOSteto et trouvez l'infirmière dont vous avez besoin à tout moment et n'importe où.</Text>
                </View>
              
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
        marginTop: 0,
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
        width: '90%',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: 90,
    },
    buttonText: {
        color: 'red',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'black',
        fontSize: 16,
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
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: 170,
        marginRight: 5,
        marginBottom: 10,
        borderRadius: 5,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: 170,
        marginBottom: 10,
        borderRadius: 5,
    },
});