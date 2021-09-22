import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Beverages from '../screens/Beverages'
import FG from "../screens/FG"
import Fruits from "../screens/Fruits"
import SNP from "../screens/SNP"
import Spices from "../screens/Spices"
import Vegetable from "../screens/Vegetables"
import Nuts from "../screens/Nuts"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Food-grains" component={FG}/>
      <Drawer.Screen name="Spices" component={Spices}/>
      <Drawer.Screen name="Seed & Pulses" component={SNP}/>
      <Drawer.Screen name="Vegetable" component={Spices}/>
      <Drawer.Screen name="Fruits" component={Fruits}/>
      <Drawer.Screen name="Nuts" component={Nuts}/>      
      <Drawer.Screen name="Beverages" component={Beverages} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;







