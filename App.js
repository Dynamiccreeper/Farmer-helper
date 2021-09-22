import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigation'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
    <NavigationContainer>
   <StackNavigator/>
   </NavigationContainer>

    );
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
})
var AppContainer=createAppContainer(AppNavigator)
