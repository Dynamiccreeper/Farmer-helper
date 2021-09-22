import React, { Component } from 'react';
import { Button, View, Text,Alert,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView,ImageBackground,Platform,StatusBar } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Fg extends React.Component {
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
 onPress={()=>this.props.navigation.navigate('Wheat')}
 >

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Wheat</Text>
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
      onPress={()=>this.props.navigation.navigate('Rice')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Rice</Text>
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
      onPress={()=>this.props.navigation.navigate('Jowar')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Jowar</Text>
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
      onPress={()=>this.props.navigation.navigate('RNB')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Ragi and Bajra (millets)</Text>
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
      onPress={()=>this.props.navigation.navigate('Sorghum')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Sorghum</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{
         backGroundColor:"#00ffff",
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
    
