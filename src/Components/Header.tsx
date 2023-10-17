import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoImage from '../assets/peach.png';

export const Header = () => {
    return (
      <View style={styles.header}>
          <Image
            style={styles.logo}
            source={LogoImage}
          />           
          <Text style={styles.title}>SafeDate</Text>
          <Text style={styles.logout}>Logout</Text>
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
      paddingTop: 40,
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
