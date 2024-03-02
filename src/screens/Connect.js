import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Link } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from '../components/Header';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Add your authentication logic here
        console.log('Signing in with:', username, password);
        // You can navigate to another screen or perform authentication logic
    };

    return (
        <View style={styles.mainp} >
            <Header></Header>
            <View style={styles.container}>
                <Text style={styles.title}>Se connecter</Text>

                <TouchableOpacity style={styles.signInButtonG} >
                    <Text style={styles.signInButtonText}>Sign In with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signInButtonF} >
                    <Text style={styles.signInButtonText}>Sign In with Facebook</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.signInButton} onPress={() => navigate('home2')}>
                    <Text style={styles.signInButtonText}>Se connecter</Text>
                </TouchableOpacity>

                <Text style={styles.signText}>Vous n'avez pas de compte ?</Text>
                {/* <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
                    Go to Jane's profile
                </Link> */}

            </View></View >

    );
};

const styles = StyleSheet.create({
    mainp: {
        flex: 1,
        backgroundColor: 'white',
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
        marginBottom: 30,
        padding: 10,
        width: '80%',
    },

    signInButtonG: {
        backgroundColor: '#808080', // Use appropriate color for your app
        padding: 10,
        borderRadius: 5,
        marginBottom: 30,
        width: 200,
        width: '80%',


    },
    signInButtonF: {
        backgroundColor: '#414BB2', // Use appropriate color for your app
        padding: 10,
        borderRadius: 5,
        marginBottom: 30,
        width: 200,
        width: '80%',

    },
    signInButton: {
        backgroundColor: '#84C7C0', // Use appropriate color for your app
        padding: 10,
        borderRadius: 5,
        marginBottom: 30,
        width: 200,
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
        fontWeight: 'bold',

    },
});

export default SignInScreen;
