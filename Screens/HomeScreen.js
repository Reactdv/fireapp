
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



const ItemList =
({title,
color,
navigation,
onDelete,
toCustomizedList})=>{
  
  return(
    
    <TouchableOpacity 
    style={[styles.touchableContainer,{backgroundColor:color}]}
    onPress={()=>{
      return(
        
  navigation.navigate("TodoList",{title,color})
        
        )
    }}
    >
    <View>  
    <Text>
   {title} 
    </Text>  
    </View>  
    
    <View 
    style={styles.trashOptionsContainer}>
    <TouchableOpacity
  onPress={toCustomizedList}

>
    <Ionicons 
    name="options-outline"
    size={25}
    color="black"
    />
    </TouchableOpacity>
    
    <TouchableOpacity
     onPress={onDelete}

>
   
    <Ionicons 
    name="trash-outline"
    size={25}
    color="red"
    />
    
    </TouchableOpacity>
    
    </View>
    </TouchableOpacity>
    
    
    )
  
  
}

const AddItemToListBtn =

(navigation,AddItemToList)=>{
  
  return (
    
    <TouchableOpacity
     style={{paddingRight:15}}
     onPress={()=>{
   navigation.navigate("CustomizedList",
   {saveChanges:AddItemToList}
   ) }}

>
    
    <Ionicons
     name="add-circle-outline"
     size={30}
     color="black"
     
/>
    </TouchableOpacity>
    
    
    )
  
}

export default function Home 
({navigation}) {
  
const [listData,setListData] = useState(
[
    {title:"List 1",color:colors.primary},
    {title:"List 2",color:colors.secondary},
    {title:"List 3",color:colors.tertiary},
    
    ])
    
   useLayoutEffect(()=>{
     
     navigation.setOptions({
       headerRight:()=>
 AddItemToListBtn(navigation,AddItemToList)
     })
     
   });
   
   
    const AddItemToList = (item)=>{
      
      listData.push(item)
      setListData([...listData])
    }
    const RemoveItemToList =(index)=>{
      
      listData.splice(index ,1)
      setListData([...listData])
    }
  
  const UpdateTheList =(index,item)=>{
    
    listData[index]= item;
    setListData([...listData])

    
  }
  
  return (
    
    <View style={styles.container}>
    
    
    <FlatList
     data={listData}
     renderItem={({item:{title,color},index})=>{
       return(
         
    <ItemList 
     key={index}
     title={title}
     color={color}
     navigation={navigation}
     onDelete ={()=> 
     RemoveItemToList(index)}
     toCustomizedList={()=>{
       return (
         
navigation.navigate("CustomizedList",{
 title,color,
 saveChanges:(item)=>
 UpdateTheList(index,item)
})         
         
         )
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
  
  touchableContainer:{
    
    flex:1,
    backgroundColor:"#00ccff",
    marginHorizontal:10,
    marginVertical:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:8,
    paddingVertical:20,
    borderRadius:20,
    
  },
  
  trashOptionsContainer:{
    display:"flex",
    flexDirection:"row",
    gap:5,
    
  }
  
});
