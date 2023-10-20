import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateImage from '../assets/dating.png';
import { useDispatch } from 'react-redux';
import { setDateTitle } from '../utils/formDataSlice';

export const DateTitle = ({ navigation }: any) => {
  const [dateTitle, setdateTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleNextPress = () => {
    if (dateTitle.trim() === '') {
      setErrorMessage('Please enter a title for your date.');
      return;
    }
    dispatch(setDateTitle(dateTitle));
    navigation.navigate('DateMateName');
  };

  return (
    <View style={styles.pageContainer}>

      <Text style={styles.subtitle}> 🍑 Ouuuh lucky you, time to set up your date 🔥 </Text>

      <TextInput
        value={dateTitle}
        onChangeText={(text) => {
          setdateTitle(text);
          setErrorMessage(null);
        }}
        placeholder="Enter a title for this crazy adventure"
        style={styles.input}
      />
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
      <Image style={styles.image} source={DateImage}></Image>

      <TouchableOpacity
        onPress={handleNextPress} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        
    },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
    color: '#29B7AE'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: "100%",
    marginBottom: 10
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
    width: "100%",
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
