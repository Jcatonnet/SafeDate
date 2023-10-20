import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateMateImage from '../assets/role-model.png';
import { useDispatch } from 'react-redux';
import { setDateMateName } from '../utils/formDataSlice';


export const DateMateName = ({ navigation }: any) => {
  const [dateMateName, setdateMateName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (dateMateName.trim() === '') {
      setErrorMessage('Please give us your date name');
      return;
    }
    dispatch(setDateMateName(dateMateName));
    navigation.navigate('ActivityPage');
  };
  
  return (
    <View style={styles.pageContainer}>

      <TextInput
        value={dateMateName}
        onChangeText={(text) => {
          setdateMateName(text);
          setErrorMessage(null);
        }}
        placeholder="Name of the 🍆"
        style={styles.input}
      />
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
      <Image style={styles.image} source={DateMateImage}></Image>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        marginTop: 30        
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
    marginTop: 40
  }
});
