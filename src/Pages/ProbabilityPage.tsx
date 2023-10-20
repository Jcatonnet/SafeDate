import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setProbability } from '../utils/formDataSlice';
import { SliderScreen } from '../Components/Slider/Slider';
import { AppDispatch } from '../utils/store';

export const ProbabilityPage = ({ navigation }: any) => {
  const [selectedProbility, setSelectedProbability] = useState<number>(0)
  const dispatch: AppDispatch = useDispatch();

  const handleNext = () => {
    dispatch(setProbability(selectedProbility));
    navigation.navigate('PeachGuardPage');
  };

  const handleChange = useCallback((lowValue: number) => {
    setSelectedProbability(lowValue);
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Probability to slide into a more 🔥🔥 plan...</Text>
      </View>

    <SliderScreen onValueChange={handleChange}/>

    <Text style={styles.subtitle}>Hey girl, this is informative for now... We will ask you for an update during your date, so your 🍑 guard will know</Text>

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
    width: "70%",
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
