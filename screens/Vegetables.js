import React, { Component } from 'react';
import { Button, View, Text,Alert,TouchableOpacity,StyleSheet,ScrollView,SafeAreaView,Platform,StatusBar,ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Vegetable extends React.Component {
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
 onPress={()=>this.props.navigation.navigate('LemonSeeds')}
 >

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Lemons seeds</Text>
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
      onPress={()=>this.props.navigation.navigate('Chickpeas')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Chickpeas</Text>
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
      onPress={()=>this.props.navigation.navigate('Okra')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Okra</Text>
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
      onPress={()=>this.props.navigation.navigate('CF')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Cauliflowers</Text>
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
      onPress={()=>this.props.navigation.navigate('GP')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Green peas</Text>
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
      onPress={()=>this.props.navigation.navigate('Potatoes')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Pumpkins</Text>
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
      onPress={()=>this.props.navigation.navigate('Grouds')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Potatoes</Text>
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
      onPress={()=>this.props.navigation.navigate('Tomatoes')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Gourds</Text>
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
      onPress={()=>this.props.navigation.navigate('Cabbage')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Tomatoes</Text>
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
      onPress={()=>this.props.navigation.navigate('Onion')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Cabbages</Text>
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
      onPress={()=>this.props.navigation.navigate('ON')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Onions</Text>
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
      onPress={()=>this.props.navigation.navigate('ON')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Dry beans</Text>
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
      onPress={()=>this.props.navigation.navigate('ON')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Limes</Text>
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
      onPress={()=>this.props.navigation.navigate('ON')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Pigeon peas</Text>
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
      onPress={()=>this.props.navigation.navigate('ON')}>

      <Text style={{
        fontWeight:"bold",
        fontSize:20
      }}>Brinjal</Text>
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
    
