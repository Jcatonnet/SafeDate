import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import EmailLogo from "../../assets/gmail.png"
import { useState } from "react";

export const EmailVerificationPage = ({ route, navigation } : any) => {
    const { user } = route.params;
    const [emailError, setEmailError] = useState('')

    const verifyEmail = async () => {
        try {
            await user.reload();
            if (user.emailVerified) {
                console.log("User has verified their email!");
                navigation.navigate('ChooseViewPage');
            } else {
                console.log("Email not yet verified.");
                setEmailError('Please, check your inbox and verify your email')
            }
        } catch (error: any) {
            console.error("Error while checking email verification:", error.message);
        }
    }

    return (
        <View style={styles.pageContainer}>
            <Image style={styles.icon} source={EmailLogo}/>
            <Text style={styles.subtitle}>Please check your email, you've received a link to verify your adress</Text>
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TouchableOpacity
                onPress={verifyEmail} style={styles.button}>
                <Text style={styles.buttonText}>I've verified my email</Text>
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
        color: '#29B7AE',
        textAlign: "center"
      },
      errorText: {
        color: 'red',
        textAlign: "left",
        marginLeft: 10
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
      icon: {
        width: 100,
        height: 100,
        marginTop: 50
      }
});