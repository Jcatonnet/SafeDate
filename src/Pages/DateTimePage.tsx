import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setStartTime, setEndTime } from '../utils/formDataSlice';
import { SelectTimePicker } from '../Components/TimePicker';
import { AppDispatch } from '../utils/store';


export const DateTimePage = ({ navigation }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [dateTimeStart, setDateTimeStart] = useState(new Date(1598051730000));
  const [dateTimeEnd, setDateTimeEnd] = useState(new Date(1598051730000));



  const handleNext = () => {
    dispatch(setStartTime(dateTimeStart.toISOString()));
    dispatch(setEndTime(dateTimeEnd.toISOString()));
    navigation.navigate('ProbabilityPage');
  };
  
  const onChangeStart = (event: any, selectedDate: any) => {
    const currentDate = new Date(selectedDate)
    setDateTimeStart(currentDate);
  };

  const onChangeEnd = (event: any, selectedDate: any) => {
    const currentDateEnd = new Date(selectedDate)
    setDateTimeEnd(currentDateEnd);
  };

  return (
    <View style={styles.pageContainer}>

      <View style={styles.info}>
        <Text style={styles.subtitle}> We will meet at: (if I am not late...) </Text>
        <SelectTimePicker onChange={onChangeStart} date={dateTimeStart} ></SelectTimePicker>
      </View>

      <View style={styles.info}>
        <Text style={styles.subtitle}> I plan to go back home at: (if we stick to the plan...) </Text>
        <SelectTimePicker onChange={onChangeEnd} date={dateTimeEnd} ></SelectTimePicker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  pageContainer: {
      alignItems: 'center',
      flex: 1,
      marginTop: 30
  },
  subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#29B7AE',
      textAlign: 'left',  // This aligns the text to the left
      width: '100%',      // This ensures the text occupies the full width
  },
  info: {
      alignSelf: 'stretch',
      alignItems: 'center',  // This centers the TimePicker
      marginBottom: 50,
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
      marginTop: 20
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
