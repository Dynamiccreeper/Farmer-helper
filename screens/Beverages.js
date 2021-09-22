import React, { Component } from 'react';
import { Button, View, Text,Alert,TouchableOpacity,StyleSheet,ScrollView,SafeAreaView,Platform,StatusBar,ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class BV extends React.Component {
render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}>
      <ImageBackground style={styles.backgroundImage}
                    source={require("../assets/HomeBack.jpg")}>
 <ScrollView>
 
<AppHeader/>

      <TouchableOpacity style={{                               
        backgroundColor:"#00ffff",
        marginTop:20,
        marginLeft:75, 
        marginBottom:40,
        width:200,
        height:100,
        borderRadius:50,
         justifyContent:"center",
         alignItems:"center",
         borderWidth:5,
         borderColor:'black'
      }}
 onPress={()=>this.props.navigation.navigate('Tea')}
 >

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Tea</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor:"#00ffff",
        marginTop:20,
        marginLeft:75, 
        marginBottom:40,
        width:200,
        height:100,
        borderRadius:50,
         justifyContent:"center",
         alignItems:"center",
         borderWidth:5,
         borderColor:'black'
      }}
      onPress={()=>this.props.navigation.navigate('Coffee')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Coffee</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{
         backGroundColor:"white",
        marginTop:20,
        marginLeft:75, 
        marginBottom:40,
        width:200,
        height:100,
        borderRadius:50,
         justifyContent:"center",
         alignItems:"center",
         borderWidth:5,
         borderColor:'black'

       }} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}> Go Home</Text>
        </TouchableOpacity>
            </ScrollView>
</ImageBackground>
</SafeAreaView>
</View>
    );
  }
  }
const styles=StyleSheet.create({

back:{
  backgroundColor:"#0080ff"
},
container:{
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS==='android' ? StatusBar.currentHeight :0
    },
    backgroundImage:{
        flex: 1,
    resizeMode:'cover'
    },
})
    
