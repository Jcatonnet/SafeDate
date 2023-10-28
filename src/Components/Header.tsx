import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LogoImage from '../assets/peach.png';
import { auth } from '../../fireBaseConfig';


type HeaderProps = {
  display: boolean;
};

export const Header = ({display}: HeaderProps) => {

  const handleSignOut = async () => {
    try {
        await auth.signOut();
        console.log('Signed out successfully');
    } catch (error) {
        console.error('Error signing out:', error);
    }
  }

    return (
      <View style={styles.header}>
          <Image
            style={styles.logo}
            source={LogoImage}
          />           
          <Text style={styles.title}>SafeDate</Text>
          {display ?
          <TouchableOpacity onPress={handleSignOut}>
           <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity> 
      :  <Text style={styles.logout}>       </Text>
}
      </View>
    );

}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
      backgroundColor: "#29B7AE",
      height: "14%",
      paddingTop: 50,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "white"
    },
    logout: {
      fontSize: 16,
      color: "white"
    }
});
