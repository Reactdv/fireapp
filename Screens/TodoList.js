import { Input } from "@rneui/themed";
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"



import colors from "./../assets/colors.js"

import { CheckBox } from "react-native-elements";


Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();


const ListItem =
({title,

isChecked,
onDelete,
...props})=>{
  
 
  const [checked, setChecked] = useState(false);
  
   const [txtToInput,setTxtToInput] =
   useState(false)
  
  return (
    <View
    style={styles.boxAndTxtContainer} >   
      <TouchableOpacity>
       
        <CheckBox
      checked={checked}
      checkedColor="#0F0"
      
      containerStyle={{ }}
      onIconPress={() => setChecked(!checked)}
      size={30}
      uncheckedColor="#F00"
      
    />
      
    
      
      </TouchableOpacity>
       <TouchableOpacity
      
  onPress={()=> setTxtToInput(true)}>

{
  txtToInput? 
<TextInput
       disabled={checked?true:false}
      style={{
        
        fontSize:15,
        outline:"none",
        textDecoration:checked?"line-through":"none",
        borderBottomWidth:checked?0:1,
      }}
      
       
      autoFocus={true}
      placeholder="Add Task"
     
      
    />
  
 
      : 
    <Text
      style={{fontSize:15,
        textDecoration:checked?"line-through" : "none",
      }}>
 

     {title}
     </Text> 
 
      
}    
  </TouchableOpacity>
 <TouchableOpacity
 onPress={onDelete}
  style={{marginLeft:"auto"}}
>
      <Ionicons 
       name="close-circle"
       size={15}
       color="red"
       
/>
       </TouchableOpacity>
      
    </View>
    )
}


const AddTextToListBtn =
(SiAddTextToList)=>{
  
  return (
    
    <TouchableOpacity
     style={{paddingRight:15}}
    onPress={()=>{
      
  SiAddTextToList({title:"        "})
    }}

>
    
<Ionicons
     name="add-circle-outline"
     size={30}
     color="black"
     
/>
    </TouchableOpacity>
    )
}

export default function TodoList 
({navigation}) {
 const [todoList,setTodoList] =
 useState([])
 


  
   
   
useLayoutEffect(()=>{
     
      navigation.setOptions({
       headerRight:()=>
       AddTextToListBtn(AddTextToList)
     })
     
   });
   
   
   const AddTextToList = (item)=>{
     todoList.push(item)
     setTodoList([...todoList])
   }
   
   const RemoveTodoList =(index)=>{
     todoList.splice(index,1)
     setTodoList([...todoList])
   }
  
  return (
    
    <View style={styles.container}>
    
    
    
    <FlatList
  keyExtractor={(item,index)=>index.toString() }
     data={todoList}
     renderItem=
     {({item:{title,isChecked,onChecked},index})=>{
       
       return (
 
 
      <ListItem
       key={index}
       isChecked={isChecked}
       title={title}
       onDelete={()=>{
         RemoveTodoList(index)
       }}
       />
         
         
         )
     }}
/>
  
  
    </View>
    
  );
}


//{=================STYLES================}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor:"green",
    padding:10,
  },
  
  checkBox :{
    
    width:20,
    height:20,
    textAlign:"center",
    borderColor:"black",
    borderWidth:2,
 
  },
  boxAndTxtContainer:{
    
marginHorizontal:5,
marginVertical:10,
display:"flex",
flexDirection:"row",
alignItems:"center",
justifyContent:"flex-start",
gap:0,

  }
  
});
