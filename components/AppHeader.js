import *as React from 'react';
import {Text,View,StyleSheet} from "react-native";


class AppHeader extends React.Component{

  render(){
    return(
      
      <View style={styles.header}>
      <Text style={styles.text}>Farmer Helper</Text>
      </View>

    )

  }

}

const styles=StyleSheet.create({

header:{
  backgroundColor:"#"
},
text:{
  color:"#000000",
  fontSize:25,
  fontWeight:"bold",
  textAlign:'center',
  padding:20
}


})

export default AppHeader;