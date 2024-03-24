import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable, ImageBackground, Switch, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { recruteurs } from '../data/recruteurs';
import { demandes } from '../data/demandes';



export default function PublicProfileScreen() {

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
                        
                    
                    }}>
                            <Pressable onPress={() => navigate("Modifier le profil")}>
                                <Ionicons style={{marginLeft: 330, height: 50, marginTop: 5}} name='pencil-sharp' size={25} color='#C1C1C1'/>
                            </Pressable>
                                
                            <View style={{ marginLeft: 10}}>
                                <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        
                                        }}>
                                            <Text style={{
                                                fontWeight : 'bold',
                                                fontSize : 20
                                            }}>{recruteurs[0].name}</Text>
                                        
                                            <Ionicons style={{
                                                flexDirection: 'row',
                                                marginLeft: 10,
                                                marginTop: 5
                                            }} name="ellipse-sharp" size={10} color={recruteurs[0].actif == 'True' ? "#26ea01" : "#959595" }/>
                                </View>
                            
                                
                        <Text style={{
                                fontSize : 14,
                        }}>{recruteurs[0].role}</Text>
                    

                        <Text style={{
                                fontSize : 14,
                                paddingBottom: 10

                        }}>{recruteurs[0].tel}</Text>
                        <Text style={{
                                fontSize : 14,
                                color: '#808080',
                                paddingBottom: 10

                        }}>{recruteurs[0].localisation}</Text>

                        

                    </View>
                    
                </View>
                <View style={{
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                    }}>
                        <View style={{marginLeft: 10 }} >
                            <Text style={{
                            fontWeight : 'bold',
                            fontSize : 20
                            }}>Mes demandes</Text>
                            <View style={{paddingTop: 10}}>
                                <Text>Votre demande du {mesDemandes.length >0 && mesDemandes[0].detail.date}</Text>
                                <View style={{paddingTop: 10}}>
                                    <Text>{mesDemandes.length >0 && mesDemandes[0].objet} </Text>
                                    <Text style={{paddingTop: 5}}>{mesDemandes.length >0 && mesDemandes[0].corps}</Text>
                                </View>
                                
                            </View>
                            
                        </View>
                            
                            <Pressable onPress={() => navigate('ToutesMesDemandesScreen', {mesDemandes})}>
                                <View style={{height: 50,  borderTopColor: '#E6E6E6', borderTopWidth: 1, marginTop: 20, alignItems: 'center'}}>
                                    <View style={{marginRight: 10, flexDirection : 'row', paddingTop: 20}}>
                                        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'grey'}}>Voir toutes les demandes</Text>
                                        <Ionicons style={{marginLeft: 10}} name="arrow-forward-outline" size={20} color='grey'/>
                                    </View>
                                    
                                </View>
                            </Pressable>
                           
                        
                    
                
                </View>
                
            </View>
            

            

            
        </ScrollView>
    )
}