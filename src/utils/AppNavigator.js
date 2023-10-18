import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DateTitle } from '../Pages/DateTitlePage';
import { DateMateName } from '../Pages/DateMateNamePage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="DateTitle">
      <Stack.Screen   options={{ title: 'Step 1 of 5' }} name="DateTitle" component={DateTitle} />
      <Stack.Screen   options={{ title: 'Step 2 of 5' }} name="DateMateName" component={DateMateName} />
    </Stack.Navigator>
  );
}

export default AppNavigator;