import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Components/Header';
import { DateTitle } from './src/Pages/DateTitle';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
      <DateTitle></DateTitle>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  body: {
    padding: 20
  }
});