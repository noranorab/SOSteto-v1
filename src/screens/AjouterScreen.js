import * as React from "react";
import { View, Text, TextInput } from "react-native";

export default function AjouterScreen({ navigation }) {
  return (
    <View style={{ marginTop: 15, marginLeft: 10}}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom:10 }}>Votre demande</Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 10,
          color: "#7BBCB5",
        }}
      >
        Titre
      </Text>
      <Text style={{ fontSize: 14, color:"#3f4040" }}>Choisissez un titre précis et court</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginRight: 20,
          color: "gray",
          marginTop: 5
        }}
        placeholder="  e.g Besoin d'une infirmière pour personne âgée"
      />
    <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 10,
          color: "#7BBCB5",
        }}
      >
        Description de la demande
      </Text>
      <Text style={{ fontSize: 14, color:"#3f4040" }}>Précisez le profil de l'infirmière recherchée ( spécialité, type de soins, sexe etc. ) et la personne à qui sont destinés les soins.</Text>
      <TextInput
        style={{
          height: 120,
          borderColor: "gray",
          borderWidth: 1,
          marginRight: 20,
          color: "gray",
          marginTop: 5,
          textAlign: "left",
          textAlignVertical: "top"
        }}
        placeholder="  e.g J'ai besoin d'une infirmière pour faire des piqures à une personne âgée..."
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 10,
          color: "#7BBCB5",
        }}
      >
        Soins et actes
      </Text>
      <Text style={{ fontSize: 14, color:"#3f4040" }}>Précisez les soins que vous recherchez</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginRight: 20,
          color: "gray",
          marginTop: 5
        }}
        placeholder="  Ajouter un acte"
      />
    </View>
  );
}
