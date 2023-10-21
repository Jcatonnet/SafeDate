import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { setStartTime, setEndTime } from '../utils/formDataSlice';
import { SelectTimePicker } from '../Components/TimePicker';
import { AppDispatch } from '../utils/store';
import { setByTimezone } from '../utils/dateTransformer';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateTimePage = ({ navigation }: any) => {
  const dispatch: AppDispatch = useDispatch();

  const now = new Date();
  const nowAndFourHoursLater = new Date(now.getTime() + 4 * 60 * 60 * 1000);  
  const [dateTimeStart, setDateTimeStart] = useState(now);
  const [dateTimeEnd, setDateTimeEnd] = useState(nowAndFourHoursLater);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formatTime = (date: Date) => {
    return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
  };

  const showStartTimePicker = () => {
    if (Platform.OS === 'android') {
      setShowStartPicker(true);
    }
}

const showEndTimePicker = () => {
  if (Platform.OS === 'android') {
    setShowEndPicker(true);
  }
};

  const handleNext = () => {
    if (dateTimeEnd <=  dateTimeStart) {
      setErrorMessage('End time should be superior to start time');
      return;
    }
    const startTimeTimezoned = setByTimezone(dateTimeStart);
    const endTimeTimezoned = setByTimezone(dateTimeEnd);
    dispatch(setStartTime(startTimeTimezoned.toISOString()));
    dispatch(setEndTime(endTimeTimezoned.toISOString()));
    navigation.navigate('ProbabilityPage');
  };
  
  const onChangeStart = (event: any, selectedDate: any) => {
    const currentDate = new Date(selectedDate)
    setDateTimeStart(currentDate);
  };

  const onChangeEnd = (event: any, selectedDate: any) => {
    setErrorMessage(null)
    const currentDateEnd = new Date(selectedDate)
    setDateTimeEnd(currentDateEnd);
  };

    return (
      <View style={styles.pageContainer}>
        <View style={styles.info}>
          <Text style={styles.subtitle}> We will meet at: (if I am not late...) </Text>
            {Platform.OS === 'ios' ? (
              <SelectTimePicker onChange={onChangeStart} date={dateTimeStart} />
            ) : (
              <>
            <TouchableOpacity onPress={showStartTimePicker}>
              <View style={styles.timeTextContainer}>
                <Text style={styles.timeText}>{formatTime(dateTimeStart)}</Text>
              </View>
            </TouchableOpacity>
              {showStartPicker && (
                <DateTimePicker
                  mode="time"
                  display="default"
                  value={dateTimeStart}
                  onChange={(event, selectedDate) => {
                    setShowStartPicker(false);
                    if (selectedDate) {
                      setDateTimeStart(selectedDate);
                    }
                  }}
                />
              )}
            </>
          )}
        </View>
    
        <View style={styles.info}>
          <Text style={styles.subtitle}> I plan to go back home at: (if we stick to the plan...) </Text>
          {Platform.OS === 'ios' ? (
            <SelectTimePicker onChange={onChangeEnd} date={dateTimeEnd} />
          ) : (
            <>
              <TouchableOpacity onPress={showEndTimePicker}>
                <View style={styles.timeTextContainer}>
                  <Text style={styles.timeText}>{formatTime(dateTimeEnd)}</Text>
                </View>
              </TouchableOpacity>
              {showEndPicker && (
                <DateTimePicker
                  mode="time"
                  display="default"
                  value={dateTimeEnd}
                  onChange={(event, selectedDate) => {
                    setShowEndPicker(false);
                    if (selectedDate) {
                      setDateTimeEnd(selectedDate);
                    }
                  }}
                />
              )}
            </>
          )}
        </View>
        
        {errorMessage && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
    
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
      textAlign: 'left',
      width: '100%',
  },
  info: {
      alignSelf: 'stretch',
      alignItems: 'center',
      marginBottom: 50,
  },
  timeTextContainer: {
    backgroundColor: '#E0E0E0', 
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center'
  },
  timeText: {
    color: '#333',
    fontSize: 16
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
