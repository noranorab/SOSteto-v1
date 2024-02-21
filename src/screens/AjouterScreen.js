import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

function InputWithIcon({ inputHeight, onPressIcon, iconName="add-outline" }) {
  return (
    <TouchableOpacity
      onPress={onPressIcon}
      style={{
        position: 'absolute',
        top: inputHeight / 2 - 12,
        right: 25,
        marginTop: 5
      }}
    >
      <Ionicons name={iconName} size={24} color="grey" />
    </TouchableOpacity>
  );
}

function InfoSection({ title, description, placeholder, inputHeight = 30, onPressIcon, textAlign }) {
  return (
    <>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10, color: "#7BBCB5" }}>{title}</Text>
      <Text style={{ fontSize: 16, color: "#3f4040" }}>{description}</Text>
      <View style={{ position: 'relative' }}>
        <TextInput
          style={{
            height: inputHeight,
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 20,
            color: "gray",
            marginTop: 5,
            paddingRight: 40,
            fontSize: 16,
            textAlignVertical: textAlign
          }}
          placeholder={placeholder}
          multiline={true}
        />
        {onPressIcon && <InputWithIcon inputHeight={inputHeight} onPressIcon={onPressIcon} />}
      </View>
    </>
  );
}

export default function AjouterScreen({ navigation }) {
  const [additionalInputs, setAdditionalInputs] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleAddAct = () => {
    setAdditionalInputs(prevInputs => [...prevInputs, {}]);
  };

  return (
    <View style={{ marginTop: 15, marginLeft: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 10 }}>Votre demande</Text>
      <InfoSection
        title="Titre"
        description="Choisissez un titre précis et court"
        placeholder="  e.g Besoin d'une infirmière pour personne âgée"
        inputHeight={50}
      />
      <InfoSection
        title="Description de la demande"
        description="Précisez le profil de l'infirmière recherchée ( spécialité, type de soins, sexe etc. ) et la personne à qui sont destinés les soins."
        placeholder="  e.g J'ai besoin d'une infirmière pour faire des piqures à une personne âgée..."
        inputHeight={120}
        textAlign={"top"}
      />
      <InfoSection
        title="Soins et actes"
        description="Précisez les soins que vous recherchez"
        placeholder="  Ajouter un acte"
        onPressIcon={handleAddAct}
        inputHeight={40}
      />
      {additionalInputs.map((_, index) => (
        <View key={index}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginRight: 20,
              color: "gray",
              marginTop: 5,
              fontSize:16
            }}
            placeholder="  Ajouter un acte"
          />
          {index >= 0 && (
            <InputWithIcon
              iconName="remove-outline"
              inputHeight={40}
              onPressIcon={() => setAdditionalInputs(prevInputs => prevInputs.filter((_, i) => i !== index))}
            />
          )}
        </View>
      ))}
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10, color: "#7BBCB5" }}>Ville</Text>
      <View style={{ borderWidth: 1, borderColor: 'grey', marginRight:20, marginTop:5}}>
        <RNPickerSelect
          placeholder={{ label: 'Choisir une ville', value: null }}
          onValueChange={(value) => setSelectedValue(value)}
          items={[
            { label: 'Casablanca', value: 'Casablanca' },
            { label: 'Rabat', value: 'Rabat' },
            { label: 'Marrakech', value: 'Marrakech' },
            { label: 'Guelmim', value: 'Guelmim' },
          ]}
          style={{
            inputAndroid: {
              color: 'grey',
            },
          }}
          value={selectedValue}
        />
      </View>
    </View>
  );
}
