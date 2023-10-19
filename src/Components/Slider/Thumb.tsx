import React, {memo} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LogoImage from "../../assets/peach.png"

const THUMB_RADIUS_HIGH = 20;

const Thumb = () => {
  return (
          <Image
          style={styles.rootHigh}
            source={LogoImage}
          />  
  )
  
  // <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />);
};

const styles = StyleSheet.create({
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);