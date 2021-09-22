import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Alert, Image, SafeAreaView, Platform, StatusBar, ImageBackground } from 'react-native'
let data= require('./temp.json')

export default class SearchScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search:''
    }
  }
  
  display(name){
     
      this.props.navigation.navigate('Info', {search: name})              
  }
  
  render(){
    let search= this.props.route.params.search;
    let produceCategory=[];
    data.map(item=>{
       
        if(item.category===search){      
            produceCategory.push(item);        
          }        
      })
   let num=0
    return(
      <View style={styles.container}>
      <ImageBackground source={require("../assets/HomeBack.jpg")}
      style={{flex:1, width: '100%', alignItems:'center'}}>
      <SafeAreaView style={styles.droidArea}/>
       
        <Text style={styles.heading}> {search}</Text>
        <View>
          {produceCategory.map(item=>{
            num=num+1
            return(
              <View style={styles.itemBox}>
              <TouchableOpacity 
              style={styles.itemName} onPress={()=>{this.display(item.name)}}
                >{'\n'}{num}. {item.name}</TouchableOpacity>
              </View>)
          })}
        </View>
       
        <TouchableOpacity style={styles.homeButton}
        onPress={()=>this.props.navigation.navigate('Home')}>
          <Text> Home </Text>
        </TouchableOpacity> 
      </ImageBackground>
      </View>
    
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#929B14'
  },
  droidArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  icon:{
    width: 150,
    height: 150
  },
  heading:{
    fontSize: 40,
    color: 'black',
    alignText: 'center',
    borderBottomWidth: 2,
  },
  itemBox:{
    width: 80,
    backgroundColor:'#303337',
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 20,
    
  },
  itemName:{
    color: 'white'
  },
  category:{
    fontSize: 20,
    fontWeight: 'bold`',
    alignSelf: 'center',
    borderBottomWidth:2
  },
  homeButton:{
    width: 50,
    height: 30,
    backgroundColor:'white',
    bottom: 30,
    position:'absolute'
  }
})