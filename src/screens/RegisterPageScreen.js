import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';

const SignUpScreen = ({ navigation }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Add your sign-up logic here
        console.log('Signing up with:', nom, prenom, email, password);
        // You can navigate to another screen or perform sign-up logic
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
                    <Text style={styles.title}>S'inscrire</Text>
                    <TouchableOpacity style={styles.signInButtonG}>
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

                    <View style={styles.inlineInputContainer}>
                        <TextInput
                            style={styles.inlineInput}
                            placeholder="Nom"
                            value={nom}
                            onChangeText={(text) => setNom(text)}
                        />
                        <TextInput
                            style={styles.inlineInput}
                            placeholder="Prénom"
                            value={prenom}
                            onChangeText={(text) => setPrenom(text)}
                        />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmer le mot de passe"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />

                    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.signUpButtonText}>Devenir membre</Text>
                    </TouchableOpacity>
                    <Text >Bienvenu sur SOSteto !</Text>
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
    signInButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpButton: {
        backgroundColor: '#84C7C0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 15,
        width: '80%',

    },
    signUpButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInText: {
        color: '#0B0A62',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
        textDecorationLine: 'underline',
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
    inlineInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginBottom: 15,
    },
    inlineInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 5,
    },
});

export default SignUpScreen;
