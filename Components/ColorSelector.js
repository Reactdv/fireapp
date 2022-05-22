
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"



import colors from "./../assets/colors.js"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



const ColorBtn =
({onPress,isSelected,color})=>{
  return (
    
    <TouchableOpacity
     onPress={onPress}
     style=
       {
       [  styles.colorBtn,
          {borderWidth:isSelected?2:0,
          backgroundColor:color,
          }
       
       ]
         
       }
      
/>
    )
}




export default function ColorSelector
({navigation,selectedColor,colorOptions,onSelect}) {
 // const colorOptions =[{}];
  
  return (
    
    <View style={styles.container}>
    
    {
      colorOptions.map((colorName)=>{
        return(
        <ColorBtn
 onPress={()=>onSelect(colors[colorName])}
         color={colors[colorName]}
         isSelected=
       {colors[colorName]===selectedColor}
        />)
      })
    }
    
  
   
    
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const styles = StyleSheet.create({
  container: {
    flex: 1,
 //   backgroundColor:"green",
    padding:10,
    marginTop:20,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    gap:5,
  },
  
  colorBtn:{
    width:50,
    height:50,
    borderRadius:50/2,
    margin:5,
  }
  
});
