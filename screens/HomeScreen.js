import React, { Component } from 'react';
import { Button, View, Text,Alert,TouchableOpacity,StyleSheet,ImageBackground,Platform,StatusBar,SafeAreaView,ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader'
import {SearchBar} from 'react-native-elements'
let data = require("./temp.json")
export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    updateSearch = (search) => {
        this.setState({ search });
      };

    loadSearch=()=>{
      let {search}=this.state
      let searchText=search.toString()
      let piece1=searchText.slice(0,1)
      let piece2=searchText.slice(1)
      piece1=piece1.toUpperCase()
      search= piece1+piece2
      
     console.log(this.state.search)
      data.map(item=>{          
          if(item.category===search){   
            this.props.navigation.navigate('Search', {search:search})            
          }
          else if(item.name===search){         
            this.props.navigation.navigate('Info', {search:search})
          }
      })
    }
    loadMenu=()=>{
      this.props.navigation.navigate('Menu')
    }
    render(){
        const { search } = this.state;
        return(
            <View style={styles.container}>
            <ImageBackground source={require("../assets/Field.jpg")} style={{flex: 1, width: '100%', alignItems:'center'}}>
                <SafeAreaView style={styles.driodArea}/>

                <Text style={styles.titleText}>
                    Farmer Helper   
                </Text>
  
                <View style={{marginTop: 20}}>
                    <Text style={styles.searchText}>Please Enter the name of Crop</Text>
                    <View style={{alignSelf:'left'}}>
                      <SearchBar
                          placeholder="Type here(for ex:-Wheat)"
                          onChangeText={this.updateSearch}
                          value={search}
                      />
                    </View>
                  <TouchableOpacity style={styles.submitButton}
                    onPress={this.loadSearch}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}
                    onPress={this.loadMenu}>
                        <Text style={[styles.buttonText, {color: 'white'}]}>Press here {'\n'}to browse menu</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
    </View>
      
    );
  }
  }

const styles=StyleSheet.create({

back:{
  backgroundColor:"#"
},
leftButton:{        
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

},

    backgroundImage:{
        flex: 1,
    resizeMode:'cover'
    },
    titleBar:{
        flex: 0.15
    },
    titleText:{
        fontSize:44, 
        color:'white',
        alignSelf:'center'
    },
    routeCard:{
        flex: 0.35,
        marginLeft:50,
        marginRight: 50, 
        marginTop:50,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 2
    },
    routeText:{
        fontWeight: 'bold',
        color: 'magenta',
        marginTop: 75,
        paddingTop: 30,
        fontSize: 35
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    },
    bgDigit:{
        position: 'absolute',
        color: 'rgba(183,183,183,0.5)',
        fontSize: 150,
        right:20,
        bottom:-15,
        zIndex: -1
    },
    iconImage:{
        position: 'absolute',
        height:200,
        width:200,
        right:20,
        top: -80,
        resizeMode: 'contain'
    } ,
       container: {
        flex: 1,
        alignItems:'center',
        backgroundColor:'#929B14'
    },
    driodArea:{
        marginTop: Platform.OS==='android'? StatusBar.currentHeight : 0
    },
    titleText:{marginTop:20, color: 'white', fontSize: 40, fontWeight:'bold' },
    searchText:{
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    submitButton:{
        width: 80,
        height: 30,
        alignSelf:'center',
        borderRadius:50,
        borderWidth: 3,
        backgroundColor: 'white',
        marginTop: 10
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    menuButton:{
      marginTop: 10, 
      backgroundColor: '#303337',
      width: '80%',
      height: 60,
      alignSelf: 'center',
      justifyContent:'center',
      borderRadius:5,
    }
    
})
    
  
// You shoyld create a styleseet with tnt styles:
//leftButton and Right button and give the styles


  
  

