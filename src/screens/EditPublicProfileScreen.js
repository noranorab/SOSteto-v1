import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable, ImageBackground, Switch, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { recruteurs } from '../data/recruteurs';
import { demandes } from '../data/demandes';
import { Button } from '../components/Button';

const buttonStyles = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginLeft: 55,
    width: 90,
    borderRadius: 20,
    backgroundColor: '#84c0c7',
    left: 220,
    bottom: 10
    
};


export default function EditPublicProfileScreen() {
    const {navigate} = useNavigation()
    const [mesDemandes, setMesDemandes] = React.useState([])
    React.useEffect(() => {
        const filteredDemandes = demandes.filter(demande => demande.id_recruteur === recruteurs[0].id);
        setMesDemandes(filteredDemandes);
    },[])
    return(
        <ScrollView testID='PublicProfileScreen' >
            <ImageBackground
            source={require('./banniere.png')}
            style={{
            marginTop: 20,
            position: 'relative',
            backgroundColor: '#C1C1C1',
            width: '100%',
            resizeMode:"cover",
            height: 100 }}>
                
                <Image source={recruteurs[0].sourceImageProfile} style={{
                        resizeMode: 'cover',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginLeft: 10,
                        marginTop: 50,
                        borderWidth: 3,
                        borderColor: 'white'
                        
                        }}/>
            </ImageBackground>

            <View>
                    <View style={{
                        
                        paddingBottom: 10,
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth : 5,
                        marginTop: 20,
                        position:'relative'
                        
                    
                    }}> 
                            <Button title="Valider" onPress={() => navigate("home5")} style={buttonStyles}/>               
                            <View style={{ marginLeft: 10, marginTop: 20}}>
                                <View style={{
                                            flexDirection: 'column',
                                            
                                        
                                        }}>
                                            <Text style={{fontWeight: 'bold', fontSize: 17, marginRight: 50}}>Nom : </Text>
                                            <TextInput style={{
                                                height: 40,
                                                width: 250,
                                                borderColor: "#C1C1C1",
                                                borderWidth: 1,
                                                paddingLeft: 10,
                                                marginRight: 20,
                                                borderRadius: 5, 
                                                marginTop: 5,
                                                fontSize: 17,
                                                marginTop: 5
                                            }}
                                                placeholder="Farhat" type="text" />

                                </View>
                                <View style={{
                                            flexDirection: 'column',
                                            marginTop: 20
                                        }}>

                                        <Text style={{fontWeight: 'bold', fontSize: 17, marginRight: 50}}>Prénom : </Text>
                                            <TextInput style={{
                                                height: 40,
                                                width: 250,
                                                borderColor: "#C1C1C1",
                                                borderWidth: 1,
                                                paddingLeft: 10,
                                                marginRight: 20,
                                                borderRadius: 5, 
                                                marginTop: 5,
                                                fontSize: 17,
                                                marginTop: 5
                                            }}
                                                placeholder="Farhat" type="text" />
                                </View>
                            
                            
                                
                                <View style={{
                                            flexDirection: 'column',
                                            marginTop: 20
                                        }}>

                                        <Text style={{fontWeight: 'bold', fontSize: 17, marginRight: 50}}>Numéro de téléphone : </Text>
                                            <TextInput style={{
                                                height: 40,
                                                width: 250,
                                                borderColor: "#C1C1C1",
                                                borderWidth: 1,
                                                paddingLeft: 10,
                                                marginRight: 20,
                                                borderRadius: 5, 
                                                marginTop: 5,
                                                fontSize: 17,
                                                marginTop: 5
                                            }}
                                                placeholder="+212635698714" type="text" />
                                </View>

                                 
                                <View style={{
                                            flexDirection: 'column',
                                            marginTop: 20
                                        }}>

                                        <Text style={{fontWeight: 'bold', fontSize: 17, marginRight: 50}}>Localisation : </Text>
                                            <TextInput style={{
                                                height: 40,
                                                width: 250,
                                                borderColor: "#C1C1C1",
                                                borderWidth: 1,
                                                paddingLeft: 10,
                                                marginRight: 20,
                                                borderRadius: 5, 
                                                marginTop: 5,
                                                fontSize: 17,
                                                marginTop: 5
                                            }}
                                                placeholder="Rabat, Maroc" type="text" />
                                </View>
                        

                    </View>
                    
                </View>
                  
                
            </View>
            

            

            
        </ScrollView>
    )
}