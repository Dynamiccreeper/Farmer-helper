import React from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'

let data= require('./temp.json')

export default class MenuScreen extends React.Component{
    constructor(props){
    super(props)
  }
  
  renderItem=({item})=>(

    <TouchableOpacity
    onPress={()=>{
      this.props.navigation.navigate('Info', {search: item.name})
    }}>
      <Text>{item.category}  > {item.name}</Text>
    </TouchableOpacity>
  )
  render(){
    return(
      <View style={{flex: 1,
       justifyContent: 'center',backgroundColor:"#87bdd8"}}>
      <Text style={{marginTop:20, color: 'white', fontSize: 40, fontWeight:'bold'}}> Menu Screen</Text>

      <Text style={{marginLeft:7,marginTop:15, color: 'white', fontSize: 20, fontWeight:'bold'}}> Choose a Produce</Text>
         <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={{borderWidth:2.5,backgroundColor:'#b7d7e8', width: 120, height: 30}}
      onPress={()=>this.props.navigation.navigate('Home')}>
        <Text style={{fontWeight:'bold'}}> back to home </Text>
        
      </TouchableOpacity>
      </View>
    )
  }
}