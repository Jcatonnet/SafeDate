import { TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { Activity, ActivityButtonProps } from "../utils/types";


export const ActivityButton = ({activity, handlePress}: ActivityButtonProps) => {


    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Image source={activity.icon} style={styles.icon}></Image>
            <Text style={styles.buttonText}>{activity.name}</Text>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#29B7AE',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    marginHorizontal: 10

  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10
  }
});
