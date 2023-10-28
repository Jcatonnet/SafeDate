import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DateTitlePage } from '../Pages/DateTitlePage';
import { DateMateName } from '../Pages/DateMateNamePage';
import { ActivityPage } from '../Pages/ActivityPage';
import { DateTimePage } from '../Pages/DateTimePage';
import { ProbabilityPage } from '../Pages/ProbabilityPage';
import { PeachGuardPage } from '../Pages/PeachGuardPage';
import { SumUpPage } from '../Pages/SumUpPage';
import { MyDatePage } from '../Pages/MyDatePage';
import { SignUpPage } from '../Pages/Registration/SignUpPage';
import { ChooseViewPage } from '../Pages/ChooseViewPage';
import { EmailVerificationPage } from '../Pages/Registration/EmailVerificationPage';
import { SignInPage } from '../Pages/Registration/SignInPage';

const Stack = createStackNavigator();

function AppNavigator({ isAuthenticated, hasOngoingDate }) {
  if (isAuthenticated) {
    return (
      <Stack.Navigator 
        initialRouteName={hasOngoingDate ? "MyDatePage" : "ChooseViewPage"}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen   name="ChooseViewPage" component={ChooseViewPage} />
        <Stack.Screen   options={{ title: 'Step 2 of 6' }} name="DateTitlePage" component={DateTitlePage} />
        <Stack.Screen   options={{ title: 'Step 2 of 6' }} name="DateMateName" component={DateMateName} />
        <Stack.Screen   options={{ title: 'Step 3 of 6' }} name="ActivityPage" component={ActivityPage} />
        <Stack.Screen   options={{ title: 'Step 4 of 6' }} name="DateTimePage" component={DateTimePage} />
        <Stack.Screen   options={{ title: 'Step 5 of 6' }} name="ProbabilityPage" component={ProbabilityPage} />
        <Stack.Screen   options={{ title: 'Step 6 of 6' }} name="PeachGuardPage" component={PeachGuardPage} />
        <Stack.Screen   options={{ title: 'Step 6 of 6' }} name="SumUpPage" component={SumUpPage} />
        <Stack.Screen   options={{ title: 'My date' }} name="MyDatePage" component={MyDatePage} />
      </Stack.Navigator>
    );
  } else { 
    return (
      <Stack.Navigator initialRouteName="SignInPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen   name="SignInPage" component={SignInPage} />
        <Stack.Screen   name="SignUpPage" component={SignUpPage} />
        <Stack.Screen   name="EmailVerificationPage" component={EmailVerificationPage} />
      </Stack.Navigator>
    )
  }
}


export default AppNavigator;