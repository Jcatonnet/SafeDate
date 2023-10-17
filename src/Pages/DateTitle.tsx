import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateImage from '../assets/dating.png';


export const DateTitle = () => {
  const [dateTitle, setdateTitle] = useState('');

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
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
    backgroundColor: 'turquoise',
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
    width: "70%",
    height: "50%",
    marginBottom: 50
  }
});
