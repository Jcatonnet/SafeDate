import { ImageSourcePropType, GestureResponderEvent } from "react-native";

export type Activity = {
    icon: ImageSourcePropType;
    name: string;
}

export type ActivityButtonProps = {
    activity: Activity;
    handlePress: (event: GestureResponderEvent) => void;
}