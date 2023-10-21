import React from "react";
import { SafeAreaView} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const SelectTimePicker = ({onChange, date}: any) => {

    return (
      <SafeAreaView>
          <RNDateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='time'
            is24Hour={true}
            onChange={onChange}
            display="clock"
          />

      </SafeAreaView>
    );
  };