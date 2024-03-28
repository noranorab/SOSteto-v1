import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import Filtre from "../components/Filtre";
import { useNavigation } from "@react-navigation/core";

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

  const handleAddAct = () => {
    setAdditionalInputs((prevInputs) => [...prevInputs, {}]);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {

    setTimeout(() => fetchVilles(), 10000);
  }, []);

  const fetchVilles = async () => {
    try {
      const response = await fetch("https://us-central1-sosteto-f1066.cloudfunctions.net/api/api/villes");
      const data = await response.json();
      setVilles(data);
    } catch (error) {
      console.error("Error fetching Villes:", error);
    }
  };

  const handleVilleChange = (value) => {
    setSelectedVille(value);
    if (value) {
      fetchVilles();
    }
  };

  // const fetchQuartiers = async (villeId) => {
  //   try {
  //     const response = await fetch(`/api/villes/${villeId}/quartiers`);
  //     const data = await response.json();
  //     setQuartiers(data.quartiers);
  //   } catch (error) {
  //     console.error("Error fetching Quartiers:", error);
  //   }
  // };

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
          <InfoSection
            title="Soins et actes"
            description="Précisez les soins que vous recherchez"
            placeholder="  Ajouter un acte"
            onPressIcon={handleAddAct}
          />
          {additionalInputs.map((_, index) => (
            <View key={index}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "#C1C1C1",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginRight: 20,
                  color: "gray",
                  marginTop: 15,
                }}
                placeholder="      Ajouter un acte"
              />
              {index >= 0 && (
                <InputWithIcon
                  iconName="remove-outline"
                  inputHeight={40}
                  onPressIcon={() =>
                    setAdditionalInputs((prevInputs) =>
                      prevInputs.filter((_, i) => i !== index)
                    )
                  }
                />
              )}
            </View>
          ))}
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
              onValueChange={handleVilleChange}
              items={villes.map((ville) => ({
                label: ville.nom_ville,
                value: ville.nom_ville,
              }))}
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
            {/* <RNPickerSelect
              placeholder={{ label: "Choisir un quartier", value: null }}
              onValueChange={(value) => setSelectedQuartier(value)}
              items={quartiers.map(quartier => ({ label: quartier.name, value: quartier.name }))}
              value={selectedQuartier}
              style={{
                inputAndroid: {
                  color: "grey",
                },
              }}
            /> */}
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
