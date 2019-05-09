/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './Components/Assignment1';
import Login from './Components/Assignment2';
import Animate from './src/Main';
import Main from './srcTwo/Main';
import Dashboard from './srcTwo/Dashboard'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
