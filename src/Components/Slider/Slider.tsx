import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Slider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Label from './Label';
import Notch from './Notch';

export const SliderScreen = () => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [high, setHigh] = useState(100);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb/>,
    [],
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: number) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue: number, highValue: number) => {
    setHigh(highValue);
  }, []);

  return (

      <View style={styles.root}>
        <Slider
          style={styles.slider}
          min={0}
          max={100}
          step={1}
          disableRange={true}
          floatingLabel={floatingLabel}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        <View style={styles.horizontalContainer}>
          <Text style={styles.valueText}>{0}</Text>
          <Text style={styles.valueText}>{high}</Text>
        </View>
      </View>

  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    padding: 12,
    width: "80%",
    marginBottom: 50
  },
  slider: {
  },
  button: {
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  valueText: {
    width: 50,
    color: '#29B7AE',
    fontSize: 15,
  },
});