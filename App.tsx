import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './src/Components/Header';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';
import { auth } from './fireBaseConfig';
import { useState, useEffect } from 'react';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
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
        <AppNavigator isAuthenticated={isAuthenticated} />
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
