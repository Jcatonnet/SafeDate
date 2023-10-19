import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData, setDateMateName } from '../utils/formDataSlice';
import { SliderScreen } from '../Components/Slider/Slider';

export const ProbabilityPage = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  console.log("data", formData)

  const handleNext = () => {

    console.log("data", formData)
  };
  

  return (
    <View style={styles.pageContainer}>
              <View style={styles.info}>
      <Text style={styles.subtitle}> Probability to slide into a more 🔥🔥 plan... </Text>
      </View>

    <SliderScreen />

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
  info: {
    alignSelf: 'stretch', 
    alignItems: 'flex-start',
    paddingHorizontal: 15 
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
