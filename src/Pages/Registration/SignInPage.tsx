import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../fireBaseConfig";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ActivityIndicator } from 'react-native';

export const SignInPage = ({navigation} : any) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async (email: string, password: string) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in successfully!");
            navigation.navigate('ChooseViewPage');
        })
        .catch((error) => {
            console.error("Error signing in:", error.message);
            setErrorMessage("The user name or password are incorrect.");
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.subtitle}>Sign In to your account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                    value={userEmail}
                    onChangeText={(text) => setUserEmail(text)}
                    placeholder="Enter your email"
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                    value={userPassword}
                    onChangeText={(text) => setUserPassword(text)}
                    placeholder="Enter your password"
                    secureTextEntry
                    style={styles.input}
                />
            </View>
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
                <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
                  <Text style={styles.linkText}>No Account? Create your account here 🍑</Text>
                </TouchableOpacity>
            <TouchableOpacity
                disabled={isLoading}
                onPress={() => signIn(userEmail, userPassword)} 
                style={styles.button}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text style={styles.buttonText}>Sign In</Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        alignSelf: 'center',
      },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        color: '#29B7AE'
    },
    inputContainer: {
        width: "100%",
        marginBottom: 30,
        alignItems: 'flex-start',
    },
    input: {
        borderWidth: 1,
        borderColor: '#29B7AE',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        width: "100%"
      },
      labelText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: "left"
      },
    button: {
        backgroundColor: '#29B7AE',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: "70%",
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      linkText: {
        color: '#29B7AE',
        textDecorationLine: 'underline',
        marginBottom: 20
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center',
        width: "100%",
    }
});
