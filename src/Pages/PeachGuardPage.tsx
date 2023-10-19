import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateMateImage from '../assets/role-model.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData, setPeachGuard, setPeachGuardPhone} from '../utils/formDataSlice';

export const PeachGuardPage = () => {
  const [peachGuardName, setPeachGuardName] = useState('');
  const [peachGuardNumber, setPeachGuardNumber] = useState('')
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);


  const handleNext = () => {
    dispatch(setPeachGuard(peachGuardName));
    dispatch(setPeachGuardPhone(peachGuardNumber));
    console.log("data", formData)

  };
  

  return (
    <View style={styles.pageContainer}>

      <TextInput
        value={peachGuardName}
        onChangeText={setPeachGuardName}
        placeholder="Select your peach guard"
        style={styles.input}
      />
        
        <TextInput
        value={peachGuardNumber}
        onChangeText={setPeachGuardNumber}
        placeholder="Enter peach guard phone number"
        style={styles.input}
      />
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
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
    fontSize: 16,
    width: "100%",
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
    marginBottom: 50
  }
});
