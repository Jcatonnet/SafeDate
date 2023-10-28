import { View, StyleSheet, Text, Image, TouchableOpacity, Linking, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { selectFormData, setEndTime, setProbability } from "../utils/formDataSlice";
import { dateFormat } from "../utils/dateTransformer";
import { SliderScreen } from "../Components/Slider/Slider";
import { useCallback, useEffect, useState } from "react";
import { AppDispatch } from "../utils/store";
import { ref, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
import { db } from "../../fireBaseConfig";
import { FormDataState } from "../utils/types";


export const MyDatePage = () => {
  const formData = useSelector(selectFormData);
  const [dateData, setDateData] = useState<FormDataState | null > (null);
  const userId = "your_user_id"; 
  const [selectedProbility, setSelectedProbability] = useState<number>(formData.probability)
  const [dateTimeEnd, setDateTimeEnd] = useState<string>(formData.dateTimeEnd);

  const dispatch: AppDispatch = useDispatch();
    
    const handleChange = useCallback((lowValue: number) => {
      setSelectedProbability(lowValue);
      dispatch(setProbability(lowValue));
    }, [dispatch]);
    
    const handleAddTime = () => {
      const date = new Date(dateTimeEnd);
      date.setHours(date.getHours() + 1)
      const newDate = date.toISOString();
      setDateTimeEnd(newDate)
      dispatch(setEndTime(newDate))
    }

    useEffect(() => {
      const dateRef = ref(db, `users/${userId}/dates`);
      const ongoingDateQuery = query(dateRef, orderByChild("status"), equalTo("ongoing"));
      
      const listener = onValue(ongoingDateQuery, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const key = Object.keys(data)[0];
          setDateData(data[key]);
          console.log(data[key]);
        }
      });
    
      return () => {
        off(ongoingDateQuery, 'value', listener);
      };
    }, []);
    

    return (
      <ScrollView style={styles.pageContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={styles.subtitle}> 🍑 We hope this is going well !🔥</Text>

        <Text style={styles.info}>You can update some info of your current date. We will send a whatsapp message to your peach guard with new information</Text>

        < View style={styles.containerSumUp}>
          <SliderScreen initialValue={dateData?.probability} onValueChange={handleChange}/>
          <View style={styles.sumup}>
            <Text style={styles.text}>Date end at: {dateData ? dateFormat(dateData.dateTimeEnd) : "Loading..."}
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleAddTime}>
              <Text style={styles.buttonText}>Add +1h</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonEnd} onPress={() => console.log('send', formData)}>
          <Text style={styles.buttonText}>End the date. Home safe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonAlert} onPress={() => console.log('send', formData)}>
          <Text style={styles.buttonText}>Call me</Text>
        </TouchableOpacity>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        marginTop: 30
        
    },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: '#29B7AE'
  },
  info: {
    paddingHorizontal: 15,
    marginTop: 20,
    fontSize: 16,    
    color: '#29B7AE'
  },
  containerSumUp: {
    padding: 15,
    display: "flex",
    alignItems: 'center',
    width: "100%",
  },
  sumup: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#29B7AE',
    flexShrink: 1
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    alignSelf: 'flex-start'
  }, 
  button: {
    backgroundColor: '#29B7AE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: "30%",
  },
  buttonAlert: {
    backgroundColor: '#EC0808',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: "50%",
    marginBottom: 20
  },
  buttonEnd: {
    backgroundColor: '#29B7AE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: "50%",
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});