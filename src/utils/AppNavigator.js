import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DateTitle } from '../Pages/DateTitlePage';
import { DateMateName } from '../Pages/DateMateNamePage';
import { ActivityPage } from '../Pages/ActivityPage';
import { DateTimePage } from '../Pages/DateTimePage';
import { ProbabilityPage } from '../Pages/ProbabilityPage';
import { PeachGuardPage } from '../Pages/PeachGuardPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="DateTitle">
      <Stack.Screen   options={{ title: 'Step 1 of 6' }} name="DateTitle" component={DateTitle} />
      <Stack.Screen   options={{ title: 'Step 2 of 6' }} name="DateMateName" component={DateMateName} />
      <Stack.Screen   options={{ title: 'Step 3 of 6' }} name="ActivityPage" component={ActivityPage} />
      <Stack.Screen   options={{ title: 'Step 4 of 6' }} name="DateTimePage" component={DateTimePage} />
      <Stack.Screen   options={{ title: 'Step 5 of 6' }} name="ProbabilityPage" component={ProbabilityPage} />
      <Stack.Screen   options={{ title: 'Step 6 of 6' }} name="PeachGuardPage" component={PeachGuardPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;