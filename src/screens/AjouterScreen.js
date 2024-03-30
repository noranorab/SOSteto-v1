import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  StyleSheet, ActivityIndicator
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import Filtre from "../components/Filtre";
import { useNavigation } from "@react-navigation/core";
import axios from 'axios';
import MultiSelect from 'react-native-multiple-select';

function InputWithIcon({ inputHeight, onPressIcon, iconName = "add-outline" }) {
  return (
    <TouchableOpacity
      onPress={onPressIcon}
      style={{
        position: "absolute",
        top: inputHeight / 2 - 12,
        right: 30,
        marginTop: 15,
      }}
    >
      <Ionicons name={iconName} size={24} color="grey" />
    </TouchableOpacity>
  );
}

function InfoSection({
  title,
  description,
  placeholder,
  inputHeight = 30,
  onPressIcon,
}) {
  return (
    <>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          marginTop: 20,
          color: "#7BBCB5",
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 14, color: "#3f4040", paddingTop: 5 }}>
        {description}
      </Text>
      <View style={{ position: "relative" }}>
        <TextInput
          style={{
            height: inputHeight + 10,
            borderColor: "#C1C1C1",
            borderWidth: 1,
            marginRight: 20,
            paddingTop: 10,
            paddingLeft: 15,
            paddingBottom: 10,
            width: 350,
            color: "gray",
            marginTop: 10,
            paddingRight: 10,
            textAlignVertical: "top",
            borderRadius: 5,
            fontSize: 14,
          }}
          placeholder={placeholder}
          multiline={true}
        />
        {onPressIcon && (
          <InputWithIcon inputHeight={inputHeight} onPressIcon={onPressIcon} />
        )}
      </View>
    </>
  );
}

export default function AjouterScreen({ navigation }) {
  const [additionalInputs, setAdditionalInputs] = useState([]);
  const [villes, setVilles] = useState([]);
  const [selectedVille, setSelectedVille] = useState(null);
  const [selectedQuartier, setSelectedQuartier] = useState(null);
  const [quartiers, setQuartiers] = useState([]);
  const [soins, setSoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSoins, setSelectedSoins] = useState([]);




  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    fetchSoinsData();
    fetchVilles();

  }, []);

  const fetchVilles = async () => {
    try {
      const response = await axios.get('http://192.168.58.61:3000/api/villes');
      setVilles(response.data.map(ville => ({ label: ville.nom_ville, value: ville.nom_ville })));
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  };

  const handleVilleChange = async (value) => {
    setSelectedVille(value);
    try {

      const quartiersResponse = await axios.get(`http://192.168.58.61:3000/api/villes/${value}/quartiers`);
      console.log(quartiersResponse)
      setQuartiers(quartiersResponse.data.map(quartier => ({ label: quartier.nom_quartier, value: quartier.nom_quartier, id: quartier._id })));
    } catch (error) {
      console.error("Failed to fetch city or quartiers data:", error);
    }

  };
  const fetchSoinsData = async () => {
    try {

      const response = await axios.get('http://192.168.58.61:3000/api/soins');
      setSoins(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch soins data:", error);
      setIsLoadingSoins(false);
    }
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  console.log(selectedSoins)
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView
        style={{
          backgroundColor: "white",
          borderColor: "#E6E6E6",
          borderWidth: 1,
        }}
      >
        <View style={{ marginTop: 15, margin: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>
            Votre demande
          </Text>
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
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
              color: "#7BBCB5",
            }}
          >
            Soins et actes
          </Text>
          <Text
            style={{
              fontSize: 15,
              // fontWeight: "bold",
              marginTop: 10,
              // color: "#7BBCB5",
            }}
          >
            Précisez les soins que vous recherchez
          </Text>
          <View
            style={{
              // borderColor: "#C1C1C1",
              // borderWidth: 1,
              marginRight: 20,
              // paddingLeft: ,
              width: 370,
              color: "gray",
              marginTop: 10,
              marginLeft: 2,
              paddingRight: 20,
              textAlignVertical: "center",
              borderRadius: 5,
              fontSize: 17,
            }}
          >
            <View style={{ marginVertical: 10 }}>
              <MultiSelect
                items={soins.map(soin => ({ id: soin._id, name: soin.nom_soin }))}
                uniqueKey="id"
                onSelectedItemsChange={setSelectedSoins}
                selectedItems={selectedSoins}
                selectText="Choisir des soins"
                searchInputPlaceholderText="Rechercher des soins..."
                displayKey="name"
                styleMainWrapper={{
                  borderColor: "#C1C1C1",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
                styleDropdownMenuSubsection={{
                  paddingVertical: 10,
                }}
                styleTextDropdown={{ color: "grey" }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
              color: "#7BBCB5",
            }}
          >
            Ville
          </Text>
          <View
            style={{
              borderColor: "#C1C1C1",
              borderWidth: 1,
              marginRight: 20,
              paddingLeft: 15,
              width: 350,
              color: "gray",
              marginTop: 10,
              paddingRight: 10,
              textAlignVertical: "center",
              borderRadius: 5,
              fontSize: 17,
            }}
          >
            <RNPickerSelect
              placeholder={{ label: "Choisir une ville", value: null }}
              onValueChange={(value) => handleVilleChange(value)}
              items={villes}
              value={selectedVille}
              style={{
                inputAndroid: {
                  color: "grey",
                },
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
              color: "#7BBCB5",
            }}
          >
            Quartier
          </Text>
          <View
            style={{
              borderColor: "#C1C1C1",
              borderWidth: 1,
              marginRight: 20,
              paddingLeft: 15,
              width: 350,
              color: "gray",
              marginTop: 10,
              paddingRight: 10,
              textAlignVertical: "center",
              borderRadius: 5,
              fontSize: 14,
            }}
          >
            <RNPickerSelect
              placeholder={{ label: "Choisir un quartier", value: null }}
              onValueChange={(value) => setSelectedQuartier(value)}
              items={quartiers}
              value={selectedQuartier}
              style={{
                inputAndroid: {
                  color: "grey",
                },
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 10,
                color: "#7BBCB5",
              }}
            >
              Date et horaire
            </Text>
            <Text style={{ fontSize: 14, color: "#3f4040", paddingTop: 10 }}>
              Indiquez à quelle date et horaire vous avez besoin d'un(e)
              infirmier(ère)
            </Text>
          </View>

          <Filtre show={false} />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.searchButton}
            // onPress={() => navigate("homeSearch")}
            >
              <Text style={styles.searchButtonText}>Valider la demande</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  searchButtonText: {
    color: "black",
    fontSize: 16,
  },
});
