import { StyleSheet, View } from 'react-native';
import { Header } from './src/Components/Header';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <NavigationContainer theme={MyTheme}>
          <AppNavigator />
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
