import { ImageSourcePropType, GestureResponderEvent } from "react-native";


export type ActivityName = 
| "Meet at a bar/restaurant"
| "Go on a tour"
| "Go to his place"
| "No plan is the best plan";

export type IconMappingType = {
  [key in ActivityName]: ImageSourcePropType; 
}

export type Activity = {
    icon: ImageSourcePropType;
    name: string;
}

export type ActivityButtonProps = {
    activity: Activity;
    handlePress: (event: GestureResponderEvent) => void;
}

export interface FormDataState {
    dateTitle: string;
    dateMateName: string;
    dateTimeStart: string;
    dateTimeEnd: string ;
    activityName: ActivityName; 
    probability: number;
    peachGuardName: string;
    peachGuardPhone: string
  }
  
  export interface RootState {
    formData: FormDataState;
  }