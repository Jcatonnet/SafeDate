import { View, Text, StyleSheet } from 'react-native';
import {  useDispatch } from 'react-redux';
import { setActivityName } from '../utils/formDataSlice';
import { ActivityButton } from '../Components/ActivityButton';
import CocktailIcon from "../assets/cocktail.png"
import GoOnTour from "../assets/destination.png"
import Smirking from "../assets/smirking.png"
import Surprise from "../assets/surprise.png"
import { useState } from 'react';
import { AppDispatch } from '../utils/store';

export const ActivityPage = ({navigation}: any) => {
    const [selectedActivity, setSelectedActivity] = useState('');
    const dispatch: AppDispatch = useDispatch();

 const handlePress = (selectedActivityName: string) => {
    setSelectedActivity(selectedActivityName)
    dispatch(setActivityName(selectedActivityName));
    navigation.navigate('DateTimePage');
 }

    return (
        <View style={styles.pageContainer}>

        <View style={styles.info}>
        <Text style={styles.subtitle}> Initial date plan: </Text>
        </View>
            <ActivityButton handlePress={() => handlePress("Meet at a bar/restaurant")} activity={{ name: "Meet at a bar/restaurant", icon: CocktailIcon }} />
            <ActivityButton handlePress={() => handlePress("Go on a tour")} activity={{ name: "Go on a tour", icon: GoOnTour }} />
            <ActivityButton handlePress={() => handlePress("Go to his place")} activity={{ name: "Go to his place", icon: Smirking }} />
            <ActivityButton handlePress={() => handlePress("No plan is the best plan")} activity={{ name: "No plan is the best plan", icon: Surprise }} />
      </View>
    )
}

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
  }
});