import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { villes } from '../data/villes';
import { specialities } from '../data/specialities';

const quartiers = () => {
    
    const allQuartiers = villes.map(ville => {
      return ville.quartiers.map((quartier) => ({name: quartier.name , id: ville.id}));
})
return allQuartiers
};



export default function SearchScreen() {
    const {navigate} = useNavigation()

    const [selectedVille, setSelectedVille] = React.useState(null);
    const [selectedSpecialite, setSelectedSpecialite] = React.useState(null);
    const [selectedQuartier, setSelectedQuartier] = React.useState(null);
    

    return (
        <View style={{backgroundColor: '#84c7c0' , height: 400}}>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 20, width: 190}}>Filtrer</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', }}>
                            Faîte une recherche personnalisée 
                        </Text>
                        <View style={{marginTop: 10, flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column' , paddingTop: 10, paddingBottom: 10}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>Ville</Text>
                                <RNPickerSelect
                                    placeholder={{ label: 'Ville', value: null }}
                                    items={villes ? villes.map((ville) => ({ label: ville.name, value: ville.id})) : []}
                                    onValueChange={(value) => setSelectedVille(value)}
                                    style={pickerSelectStyles}
                                    value={selectedVille}
                                />
                            </View>
                            <View style={{flexDirection: 'column' , paddingTop: 10, paddingBottom: 10, paddingLeft: 10}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>Quartier</Text>
                                <RNPickerSelect
                                    placeholder={{ label: 'Quartier', value: null }}
                                    items={[]}
                                    onValueChange={(value) => setSelectedQuartier(value)}
                                    style={pickerSelectStyles}
                                    value={selectedQuartier}
                                />
                            </View>
                         </View>
                         <View style={{flexDirection: 'column', paddingBottom: 10}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>Spécialités</Text>
                                <RNPickerSelect
                                    placeholder={{ label: 'Spécialité', value: null }}
                                    items={specialities ? specialities.map((specialite) => ({ label: specialite.name, value: specialite.id })) : []}
                                    onValueChange={(value) => setSelectedSpecialite(value)}
                                    style={pickerSelectStyles}
                                    value={selectedSpecialite}
                                />
                        </View>
                        <View style={{flexDirection: 'column', paddingBottom: 10}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>Disponibilité</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>De</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', paddingBottom: 10}}>A</Text>
                                
                        </View>

               
            </View >
                                
        </View>
        
    )
}
   

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