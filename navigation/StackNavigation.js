import React from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './TabNavigation'
import SearchScreen from '../screens/SearchScreen'
import MenuScreen from '../screens/MenuScreen'
import InfoScreen from '../screens/InfoScreen'

const Stack=createStackNavigator()

const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={BottomTabNavigator}/>
            <Stack.Screen name='Search' component={SearchScreen}/>
            <Stack.Screen name='Menu' component={MenuScreen}/>
            <Stack.Screen name='Info' component={InfoScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator