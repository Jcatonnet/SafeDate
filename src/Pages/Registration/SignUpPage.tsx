import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from "../../../fireBaseConfig"
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import { isValidEmail } from '../../utils/validationForm';
import PhoneNumberInput from "react-native-phone-number-input";
import { ref, set } from 'firebase/database';

export const SignUpPage = ({navigation} : any) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [formattedPhoneValue, setFormattedPhoneValue] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    const signUp = async (email: any, password: any) => {
      if (!isValidEmail(email)) {
          setEmailError('Please enter a valid email.');
          return;
      }
      if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters.');
          return;
      }
      if (userName.length === 0) {
          setNameError('Name cannot be empty.');
          return;
      }
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log("User registered successfully!");

      console.log("Setting user details in database...");
          const userRef = ref(db, 'users/' + user.uid);
          await set(userRef, {
              name: userName,
              phone: formattedPhoneValue
          });
          console.log("User details set in database!");

          await sendEmailVerification(user);
          console.log("Verification email sent!");
          navigation.navigate('EmailVerificationPage', { user });
      } catch (error: any) {
        console.log("Error during signup");

          console.error("Error during signup:", error.message);
      }
  }

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
  >
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <Text style={styles.subtitle}>Enter your information to create your account</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Email</Text>
              <TextInput
                  value={userEmail}
                  onChangeText={(text) => {
                      setEmailError('');
                      setUserEmail(text);
                  }}
                  placeholder="Enter your email"
                  style={styles.input}
                  textContentType="emailAddress"
              />
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Password</Text>
              <TextInput
                  value={userPassword}
                  onChangeText={(text) => {
                  setPasswordError('')
                  setUserPassword(text);
                  }}
                  placeholder="Enter your password"
                  secureTextEntry
                  textContentType="password"
                  autoCorrect={false}
                  style={styles.input}
              />
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Name</Text>
              <TextInput
                  value={userName}
                  onChangeText={(text) => {
                    setNameError('')
                    setUserName(text);
                  }}
                  placeholder="Enter your name"
                  style={styles.input}
              />
              {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Phone number</Text>
              <PhoneNumberInput
                  defaultCode="US"
                  layout="first"
                  onChangeText={(text: string) => {
                      setUserPhone(text);
                  }}
                  onChangeFormattedText={(text: string) => {
                    setFormattedPhoneValue(text);
                  }}
                  withDarkTheme
                  withShadow={false}
                  autoFocus
                  containerStyle={styles.phoneInputContainer}
                  textInputStyle={styles.phoneTextInput}
                  codeTextStyle={styles.codeTextStyle}
              />
           </View>
            <TouchableOpacity
                onPress={() => signUp(userEmail, userPassword)} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  pageContainer: {
    width: "80%",
    alignSelf: 'center',
    paddingVertical: 20,
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
  phoneInputContainer: {
    borderWidth: 1,
    borderColor: '#29B7AE',
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  phoneTextInput: {
    height: 38,
},
codeTextStyle: {
  fontSize: 14, 
  lineHeight: 16,
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
    alignSelf: "center",
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