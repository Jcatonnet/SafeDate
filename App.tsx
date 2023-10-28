import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './src/Components/Header';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';
import { auth, db } from './fireBaseConfig';
import { useState, useEffect } from 'react';
import { get, ref } from "firebase/database";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasOngoingDate, setHasOngoingDate] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(user) => {
      if (user) {
        setIsAuthenticated(true);
        const userRef = ref(db, `users/${user.uid}/dates`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const dates = snapshot.val();
          for (let key in dates) {
            if (dates[key].status === "ongoing") {
              setHasOngoingDate(true);
              break;
            }
          }
        }
      } else {
        setIsAuthenticated(false);
        setHasOngoingDate(false);
      }
      if (initializing) setInitializing(false);
    });
  
    return () => unsubscribe();
  }, [initializing]);
  
  if (initializing) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Header display={isAuthenticated}/>
      <View style={styles.body}>
        <NavigationContainer theme={MyTheme}>
        <AppNavigator isAuthenticated={isAuthenticated} hasOngoingDate={hasOngoingDate} />
        </NavigationContainer>
      </View>
    </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    padding: 20,
  }
});
