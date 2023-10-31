import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PeachGuardIcon from '../assets/security-guard.png';
import { useDispatch } from 'react-redux';
import { setDateStatus, setPeachGuardName, setPeachGuardPhone} from '../utils/formDataSlice';

export const PeachGuardPage = ({navigation}: any) => {
  const [peachGuardName, setPeachGuardNameState] = useState('');
  const [peachGuardNumber, setPeachGuardNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (peachGuardName.trim() === '') {
      setErrorMessage('Please indicate your peach guard\'s name');
      return;
    }
    dispatch(setPeachGuardName(peachGuardName));
    dispatch(setPeachGuardPhone(peachGuardNumber));
    dispatch(setDateStatus("ongoing"));
    navigation.navigate("SumUpPage")
  };

  return (
    <View style={styles.pageContainer}>

      <TextInput
        value={peachGuardName}
        onChangeText={(text) => {
          setPeachGuardNameState(text);
          setErrorMessage(null);
        }}
        placeholder="Select your peach guard"
        style={styles.input}
      />
        
      <TextInput
        value={peachGuardNumber}
        onChangeText={setPeachGuardNumber}
        placeholder="Enter peach guard phone number"
        style={styles.input}
      />
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
      <Image style={styles.image} source={PeachGuardIcon}></Image>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#29B7AE'
  },
  input: {
    borderWidth: 1,
    borderColor: '#29B7AE',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    width: "100%",
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
    marginTop: 50
  }
});
