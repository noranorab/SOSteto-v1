import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image, TouchableOpacity, Pressable, Text } from 'react-native';

export const Demande = ({item}) => {
       
    return (
        <View style={{borderBottomColor: '#e6e6e6', borderBottomWidth: 5, paddingBottom: 20}}>
            <View style={{marginLeft: 10, marginTop: 20}}>
                <Text>Votre demande du 10/02/2023</Text>
                <Text style={{paddingTop: 10, fontWeight: 'bold'}}>{item.objet}</Text>
                <Text  style={{paddingTop: 15}}>{item.corps}</Text>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                        <Text style={{fontWeight: 'bold'}}>Prix par jour :</Text>
                        <Text style={{paddingLeft: 10}}>{item.detail.prix_par_jour.min} dhs - {item.detail.prix_par_jour.max} dhs </Text>
                    </View>
                    
                    <Text style={{paddingTop: 5}}>{item.detail.ville}, {item.detail.quartier}</Text>
                    <Text style={{paddingTop: 5, fontWeight: 'bold'}}>Actes et Soins</Text>
                        <View style={{flexDirection: 'row', marginTop:5}}>
                            {item.detail.actes.map(({id, intitule}) => (
                                <Text style={{paddingHorizontal: 10, padding: 5,marginRight: 10, borderWidth: 1, borderRadius: 10, backgroundColor: '#84c7c0', overflow: 'hidden', color:'white' , borderColor: 'white'}} key={id}>{intitule}</Text>
                            ))}
                        </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                        <Text style={{fontWeight: 'bold'}}>Date :</Text>
                        <Text style={{paddingLeft: 10}}>{item.detail.date}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                        <Text style={{fontWeight: 'bold'}} >Horaire :</Text>
                        <Text style={{paddingLeft: 10}}>{item.detail.horaire.min} - {item.detail.horaire.max}</Text>
                    </View>
                    
                        

                </View>
            </View>
            
        </View>

    )
}