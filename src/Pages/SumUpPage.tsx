import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { selectFormData } from "../utils/formDataSlice";
import CocktailIcon from "../assets/cocktail.png"
import GoOnTour from "../assets/destination.png"
import Smirking from "../assets/smirking.png"
import Surprise from "../assets/surprise.png"
import PeachGuardIcon from "../assets/security-guard.png"
import DateMateImage from '../assets/role-model.png';
import ClockIcon from "../assets/chronometer.png"
import LogoImage from "../assets/peach.png"
import { dateFormat } from "../utils/dateTransformer";
import { FormDataState, IconMappingType } from "../utils/types";
import { ref, set } from "firebase/database";
import { db, auth } from '../../fireBaseConfig';



export const SumUpPage = ({navigation}: any) => {
    const formData = useSelector(selectFormData);
    const dateTimeStartFormated = dateFormat(formData.dateTimeStart);
    const dateTimeEndFormated = dateFormat(formData.dateTimeEnd)
    const whatsappMessage = 'test whatsapp de bae poour bae'

const ICON_MAPPING: IconMappingType = {
    "Meet at a bar/restaurant": CocktailIcon,
    "Go on a tour": GoOnTour,
    "Go to his place": Smirking,
    "No plan is the best plan": Surprise,
    "": CocktailIcon
};

    const activityIcon = ICON_MAPPING[formData.activityName];
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;
    
    const saveFormData = async (userId: string, formData: FormDataState) => {
      const userRef = ref(db, `users/${userId}/dates/${Date.now()}`);
      set(userRef, formData).catch(error => {
        console.error("Data could not be saved.", error);
      });
    };

    
    const handleSend = () => {
      if (userId) {
          saveFormData(userId, formData);
          navigation.navigate('MyDatePage');
      } else {
          console.error("No user is authenticated.");
      }      
      navigation.navigate('MyDatePage');
    };
    
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.subtitle}>🍑 You’re all set ! We will wrap this up for you and share it with your 🍑 guard 🔥</Text>

        < View style={styles.containerSumUp}>
        <View style={styles.sumup}>
            <Image style={styles.icon} source={PeachGuardIcon}></Image>
            <Text style={styles.text} >Peach guard: {formData.peachGuardName}</Text>
        </View>
        <View style={styles.sumup}>
            <Image style={styles.icon} source={DateMateImage}></Image>
            <Text style={styles.text}>The lucky one: {formData.dateMateName}</Text>
        </View>
        <View style={styles.sumup}>
            <Image style={styles.icon} source={activityIcon}></Image>
            <Text style={styles.text}>{formData.activityName}</Text>
        </View>
        <View style={styles.sumup}>
            <Image style={styles.icon} source={ClockIcon}></Image>
            <Text style={styles.text}>From {dateTimeStartFormated} to {dateTimeEndFormated}</Text>
        </View>
        <View style={styles.sumup}>
            <Image style={styles.icon} source={LogoImage}></Image>
            <Text style={styles.text}>{formData.probability}%</Text>
        </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

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
    textAlign: 'center',
    color: '#29B7AE'
  },
  info: {
    alignSelf: 'stretch', 
    alignItems: 'flex-start',
    paddingHorizontal: 15 
  },
  containerSumUp: {
    padding: 15,
    display: "flex",
    width: "100%",
    marginBottom: 20,
  },
  sumup: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
    width: "70%",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});