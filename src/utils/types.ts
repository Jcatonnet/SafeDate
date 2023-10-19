import { ImageSourcePropType, GestureResponderEvent } from "react-native";

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
    dateTimeStart: string | null;
    dateTimeEnd: string | null;
    activityName: string; 
    probability: number;
    peachGuardName: string;
    peachGuardPhone: string
  }
  
  export interface RootState {
    formData: FormDataState;
  }