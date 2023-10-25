import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../fireBaseConfig"
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";


export const SignUpPage = ({navigation} : any) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const signUp = async (email: any, password: any) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully!");
  
        sendEmailVerification(user).then(() => {
          console.log("Verification email sent!");
          navigation.navigate('EmailVerificationPage', { user });
        }).catch((error) => {
          console.error("Error sending verification email:", error.message);
        });
        
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  }

    return (
        <View style={styles.pageContainer}>
          <Text style={styles.subtitle}>Enter your information to create your account</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Email</Text>
              <TextInput
                  value={userEmail}
                  onChangeText={(text) => {
                      setUserEmail(text);
                  }}
                  placeholder="Enter your email"
                  style={styles.input}
              />
            </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Password</Text>
              <TextInput
                  value={userPassword}
                  onChangeText={(text) => {
                  setUserPassword(text);
                  }}
                  placeholder="Enter your password"
                  secureTextEntry
                  style={styles.input}
              />
            </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Name</Text>
              <TextInput
                  value={userName}
                  onChangeText={(text) => {
                  setUserName(text);
                  }}
                  placeholder="Enter your name"
                  style={styles.input}
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Phone number</Text>
              <TextInput
                  value={userPhone}
                  onChangeText={(text) => {
                  setUserPhone(text);
                  }}
                  placeholder="Enter your mobile number"
                  style={styles.input}
              />
            </View>
            <TouchableOpacity
                onPress={() => signUp(userEmail, userPassword)} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
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
  errorText: {
    color: 'red',
    textAlign: "left",
    marginLeft: 10
  },
  errorContainer: {
    alignSelf: 'stretch', 
    marginLeft: 5,
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
  image: {
    width: "50%",
    height: "40%",
    marginBottom: 50,
    marginTop: 40
  }
});