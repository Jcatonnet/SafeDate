import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateImage from '../assets/dating.png';
import { useDispatch } from 'react-redux';
import { setDateTitle } from '../utils/formDataSlice';

export const DateTitle = ({ navigation }: any) => {
  const [dateTitle, setdateTitle] = useState('');
  const dispatch = useDispatch();

  const handleNextPress = () => {
    dispatch(setDateTitle(dateTitle));
    navigation.navigate('DateMateName');
  };

  return (
    <View style={styles.pageContainer}>

      <Text style={styles.subtitle}> 🍑 Ouuuh lucky you, time to set up your date 🔥 </Text>

      <TextInput
        value={dateTitle}
        onChangeText={setdateTitle}
        placeholder="Enter a title for this crazy adventure"
        style={styles.input}
      />
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
