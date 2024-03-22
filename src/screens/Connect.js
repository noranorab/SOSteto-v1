import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import * as WebBrowser from "expo-web-browser";

import * as Linking from "expo-linking";


const Connect = ({ navigation }) => {
    const { navigate } = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://192.168.8.119:3000/api/users/login', {
                email: email,
                mdp: password,
            });
            console.log('Login Response:', response.data); // Log the response data
            console.log('Registration successful:', response.data);
            if (response.status === 200) {
                navigation.navigate('home7');
            } else {
                const errorMessage = error.response?.data?.error || 'An error occurred';
                Alert.alert('Error', errorMessage);
                console.log(errorMessage);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'An error occurred';
            setError(errorMessage);
        }
    };

    const YOUR_CLIENT_ID = "1094627412794-kke894bm9r2ocv4q25qmhgh01rdhjno7.apps.googleusercontent.com";
    const YOUR_REDIRECT_URI = "http://localhost:3000/auth/google/callback";

    const handleSignInGoogle = async () => {

        const result = await WebBrowser.openAuthSessionAsync(
            `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`,
            YOUR_REDIRECT_URI
        );

        if (result.type === "success") {

            // get back the params from the url
            const params = Linking.parse(result.url);

            const { email, name, picture } = params.queryParams;

            //pass in all the user data in an object...
            const user = {
                email,
                name,
                picture,
            };

            // navigate to the HomeScreen and pass the user object
            // navigation.navigate("HomeScreen", );
            navigation.navigate('home7', { user })
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.mainContainer}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <Header />
                <View style={styles.container}>
                    <Text style={styles.title}>Se connecter</Text>
                    <TouchableOpacity style={styles.signInButtonG} onPress={handleSignInGoogle}>
                        <Text style={styles.signInButtonText}>Sign In with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButtonF}>
                        <Text style={styles.signInButtonText}>Sign In with Facebook</Text>
                    </TouchableOpacity>
                    <View style={styles.lineContainer}>
                        <View style={styles.line}></View>
                        <Text style={styles.text}>ou</Text>
                        <View style={styles.line}></View>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                    {error ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : null}
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.signInButtonText}>Se connecter</Text>
                    </TouchableOpacity>
                    <Text style={styles.signText}>Vous n'avez pas de compte ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpText}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#808080',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        width: '80%',
        borderRadius: 5,
    },
    signInButtonG: {
        backgroundColor: '#808080',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
    },
    signInButtonF: {
        backgroundColor: '#414BB2',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        width: '80%',
    },
    signInButton: {
        backgroundColor: '#84C7C0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
    },
    signInButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
    },
    signUpText: {
        fontSize: 14,
        color: '#0B0A62',
        marginBottom: 5,
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#0B0A62',
        marginBottom: 5,
        textDecorationLine: 'underline',
        marginTop: 5,
        marginLeft: -140,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 35,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        width: '80%',
        // backgroundColor: '#FFD2D2', // Light red background color
        padding: 3,
        // borderRadius: 5,
        // marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginLeft: 0,
        fontSize: 13,
    },
});

export default Connect;
