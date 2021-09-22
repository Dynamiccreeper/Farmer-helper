import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar,
ImageBackground, ScrollView} from 'react-native'

let data= require("./temp.json")

export default class InfoScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search:''
    }
  }

  render(){
    let search=this.props.route.params.search
    
    let produce=[]
    data.map(item=>{
      if(item.name===search){
        
        produce.push(item)
        
      }
    })
    return(
     <View style={styles.container}>
     <ImageBackground source={require("../assets/HomeBack.jpg")}
      style={{flex:1, width: '100%', alignItems:'center'}}>
     <SafeAreaView style={styles.droidArea}/>
     <Text style={styles.heading}>You searched for.. </Text>
      
    <ScrollView >
        <View style={styles.enclosure}>
            {produce.map(item=>{
              return(
                <View>
                <Text style={styles.itemName}> {item.name}</Text>
                <Text style={styles.description}> {item.description}</Text>
                </View>
              )
            
            })}
        </View>
        <TouchableOpacity style={styles.homeButton}
        onPress={()=>this.props.navigation.navigate('Home')}>
          <Text> Home </Text>
        </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
droidArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  heading:{
    fontSize: 24,
    color: 'white',
    alignText: 'center',
    borderBottomWidth: 2,
  },
   homeButton:{
    width: 50,
    height: 30,
    backgroundColor:'white',
   
    alignSelf:'center'
  },
  enclosure:{
    borderWidth: 1,
    borderRadius:2,
    marginLeft: 10,
    marginRight:10,
    alignItems: 'left',
    marginTop:10,
    color:'white'
  },
  itemName: {
    fontWeight: 'bold',
    fontSize:18,
    padding: 10,
    color:'white'

  },
  description:{
    fontSize: 16,
    alignText:'left',
    padding:10,
    fontWeight:'bold',
    color:'white'
  }
})