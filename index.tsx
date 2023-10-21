import { AppRegistry } from 'react-native';
import App from './App';
import { expo } from './app.json';
const appName = expo.name;

AppRegistry.registerComponent(appName, () => App);
