import React from 'react';
import {Text, View,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,ImageBackground,TouchableOpacity} from 'react-native';

import fs from 'fs'

let data= require("./temp.json")
import firebase from 'firebase'
import db from '../config'

export default class Enquiry extends React.Component{
    constructor(){
      super();
      this.state={
      name:'',
      category:'',
      description:'',
      email:'',
      produce:''
      }

    }

  submitInfo=async()=>{
    
  // let newProduce={
  //     "name": this.state.name,
  //     "category": this.state.category,
  //     "description": this.state.description
  //   };
  //   console.log(newProduce);
  //   fs.writeFileSync('./temp.json', newProduce)
  //   console.log(data)
   
     console.log("Entering the function")
      const a = new Date();

      db.ref('/'+a).set({
        name: this.state.name,
        email: this.state.email,
        produce: this.state.produce,
        category: this.state.category
      })
  
  db.ref()
  }
    
    render(){
        return(
            <View style={styles.container}>
                        <ImageBackground source={require("../assets/Field.jpg")} style={{flex: 1, width: '100%', alignItems:'center'}}>
            <SafeAreaView style={styles.droidArea}/>
                
                <Text style={styles.titleText}>
                    Farmer App   
                </Text>
                <Text style={{fontSize: 15, fontWeight  : 'bold', alignSelf: 'center', marginTop: 20,color:'white'}}>
                  Please enter your details below
                </Text>
                 <TextInput style={styles.inputBox}
                  placeholder="Your name here..."
                  placeholderTextColor='white'
                  onChangeText={(text)=>{this.setState({name:text});}}
                />  
                 <TextInput style={styles.inputBox}
                  placeholder="E-mail Address...."
                  placeholderTextColor='white'
                  onChangeText={(text)=>{this.setState({email:text});}}
                /> 
                <Text style={{fontSize: 15, fontWeight  : 'bold', textAlign: 'center', marginTop: 20,color:'white'}}>
                  Please enter the details of the produce for which you need information.
                </Text>

                <TextInput style={styles.inputBox}
                  placeholder="name of produce"
                  placeholderTextColor='white'
                  onChangeText={(text)=>{this.setState({produce:text});}}
                />  
                

                <TextInput style={styles.inputBox}
                  placeholder="category of produce"
                  placeholderTextColor='white'
                  onChangeText={(text)=>{this.setState({category:text});}}
                /> 
               

                <TouchableOpacity style={styles.submitButton} onPress={this.submitInfo}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
  flex: 1, justifyContent: 'center', alignItems : 'center'
  },
  droidArea:{
     marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0
      },
  titleText:{marginTop:20, color: 'white', fontSize: 40, fontWeight:'bold' },
  inputBox:{
    borderWidth:2,
    width:'70%',
    height:50,
    borderRadius:5,
    borderColor:'white',
    marginTop:10,
    color:'white'
  },
  submitButton:{
        width: 90,
        height: 30,
        alignSelf:'center',
        borderRadius:50,
        borderWidth: 3,
        backgroundColor: 'black',
        marginTop: 10
  },
      buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white'
        
    },


})