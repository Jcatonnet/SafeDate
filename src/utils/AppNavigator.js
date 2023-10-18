import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DateTitle } from '../Pages/DateTitlePage';
import { DateMateName } from '../Pages/DateMateNamePage';
import { ActivityPage } from '../Pages/ActivityPage';
import { DateTimePage } from '../Pages/DateTimePage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="DateTitle">
      <Stack.Screen   options={{ title: 'Step 1 of 5' }} name="DateTitle" component={DateTitle} />
      <Stack.Screen   options={{ title: 'Step 2 of 5' }} name="DateMateName" component={DateMateName} />
      <Stack.Screen   options={{ title: 'Step 3 of 5' }} name="ActivityPage" component={ActivityPage} />
      <Stack.Screen   options={{ title: 'Step 3 of 5' }} name="DateTimePage" component={DateTimePage} />

    </Stack.Navigator>
  );
}

export default AppNavigator;