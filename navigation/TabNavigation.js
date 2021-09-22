import React from 'react'
import {View, StyleSheet} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'

import HomeScreen from '../screens/HomeScreen';
import Enquiry from '../screens/EnquiryForm';

const Tab= createMaterialBottomTabNavigator();
export default class BottomTabNavigator extends React.Component{

    render(){
        return(
            <Tab.Navigator
            barStyle={styles.barStyle}
            labeled={false}
            screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if(route.name==='Home'){
                iconName=focused? 'home' : 'home-outline'
                }
                else if (route.name==='Enquiry'){
                iconName= focused? 'add-circle' : 'add-circle-outline'
                }
                return <Ionicons name={iconName} size= {30} color= {color} style={{width: 30, height: 30}}/>
                }
            })
            }
            activeColor={'#8D9315'}
            inactiveColor={'gray'}>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Enquiry' component={Enquiry}/>


            </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
  barStyle:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '8%',
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'absolute'
  }
})