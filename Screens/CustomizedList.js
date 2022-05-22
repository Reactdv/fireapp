
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import {CommonActions} from "@react-navigation/native"

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import { Input } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "./../assets/colors.js";

//import ColorButton from "./ColorBtn.js";
import ColorSelector from "./../Components/ColorSelector.js";

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();


const colorList = [
  
  "background",
  "primary",
  "secondary",
  "tertiary",
  "subTitle",
  "purple",
  "pink",
  "red",
  "blueGreen",
  "seaGreen",
  
  
  ]




export default function CustomizedList
({navigation,route}) {
 const [title,setTitle] = useState(
   route.params.title||"")
   
  const [color,setColor] = useState(
    route.params.color?route.params.color:colors.background  )
    
 const [isValid,setIsValid] = 
 useState(true)
  
  return (
    
    <View style={styles.container}>
    
    <View 
    style={{
   //   backgroundColor:"orange"
      
    }}
    
    >
<Input
      value={title}
      onChangeText={setTitle}
      containerStyle={{}}
      disabledInputStyle={{ 
        background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage={
      isValid?"":"List can't be empty! "}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="List name"
      labelStyle={{}}
      labelProps={{}}
      
      leftIconContainerStyle={{}}
      
      rightIconContainerStyle={{}}
      placeholder="Add list"
      style={{outline:"none"}}
    />
   <Text> 
   Choose Color
   </Text> 
   <View 
   style={{display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          width:"auto",
        //  backgroundColor:"yellow",
   }}>
      
      
      <ColorSelector
      onSelect={(color)=>{
        setColor(color)
        navigation.dispatch(CommonActions.setParams({color}))
      }}
      selectedColor={color}
      colorOptions={colorList}

/>
</View>
    </View>
   



    
    <TouchableOpacity
     style={{
       backgroundColor:"black",
       padding:15,
       paddingHorizontal:100,
       borderRadius:30,
       marginBottom:15,
     
       
   
     }}
      onPress={()=>{
        if(title.length>1 ){
          route.params.saveChanges
          ({title,color});
          navigation.dispatch(CommonActions.goBack())
        }
        else{
          setIsValid(false)
         
        }
      }}
 >
    
    <Text
     style={{fontSize:30,color:"white"}}
>
    save
     </Text>
    </TouchableOpacity >
   
    
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor:"green",
    padding:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
  },
  
  
  
});


