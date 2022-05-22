
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View,Modal } from 'react-native';



import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import { Input, Icon } from '@rneui/themed';

import colors from "./../assets/colors.js"

import {auth} from "./../firebase.js"
import 
{createUserWithEmailAndPassword} from "firebase/auth"
import firestore from '@react-native-firebase/firestore';
Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();







export default function Registration 
({navigation}) {
const [isEyePressed,setIsEyePressed]  =
useState(false)
const [isEyePressed2,setIsEyePressed2]  =
useState(false)
const [
  isRegistrationFailed,setRegistration] =
  useState(false)

const PressTheEye =()=> 
setIsEyePressed(eyeOpen => !eyeOpen);

const PressTheEye2 =()=> 
setIsEyePressed2(eyeOpen2 => !eyeOpen2)
 
 const [userName, setUserName] = 
 useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = 
 useState("")
 const [passwordAgain,setPasswordAgain] = 
 useState("")
const [
  isModalVisible,setModalVisibility
] = useState(false)


const toggleTheModal =()=>{
setModalVisibility(toggleModal =>!toggleModal)
}
const goBack =()=>{
  return(
setTimeout(()=> {navigation.navigate("Login")}, 400)
    
    )
}

const handleSignup =()=>{
  return(
    
    createUserWithEmailAndPassword(
      auth,email,password),
      firestore().collection("users").doc(user.uid).set({})
      
   .then(async()=>{
   await toggleTheModal();
  
   })
    
.catch(()=>{
 setRegistration(true)
})
    )
}

  return (
    
    <View style={styles.container}>
    
    <Input
    value={userName} 
  onChangeText={text => setUserName(text)}
   style={{outline:"none",fontSize:20}}
      placeholder='Username'
      leftIcon={
        <Feather
         name="user"
         size={30}
         color="black"
         />
      }
    />

    <Input
      value={email}
  onChangeText={(text)=>{
    return (
   setEmail(text),
   console.log(email)
      )
  }}
      style={{outline:"none",fontSize:20}}
      placeholder="Enter your email"
      leftIcon={
        <MaterialCommunityIcons
          name='email'
          size={30}
          color='black'
        />
      }
    />
    <Input
value={password}
onChangeText={(text)=>{
  return (
    
    setPassword(text),
    console.log(password)
    )
}}
secureTextEntry=
{isEyePressed?false:true}
      style={{outline:"none",fontSize:20, position:"relative"}}
      placeholder="Enter your password"
      leftIcon={
        <Ionicons
          name='key'
          size={30}
          color='black'
        />
      }
      rightIcon={
        <TouchableOpacity
onPress={PressTheEye}
style={{position:"absolute",right:8,}}>
        <Ionicons
        name=
{isEyePressed?"eye-off-sharp":"eye-sharp"}
        size={30}
        color="black"
        />
      </TouchableOpacity>
      }
    />
    <Input
value={passwordAgain}
onChangeText=
{text => setPasswordAgain(text)}
secureTextEntry=
{isEyePressed2?false:true}

    style=
 {{outline:"none",fontSize:20, position:"relative"}}
    placeholder="Enter your password again"
      leftIcon={
        <Ionicons

          name='key'
          size={30}
          color='black'
        />
      }
       rightIcon={
        <TouchableOpacity
onPress={PressTheEye2}
style={{position:"absolute",right:8,}}>


        <Ionicons
 name={
isEyePressed2?"eye-off-sharp":"eye-sharp"
 }
        size={30}
        color="black"
        />
        </TouchableOpacity>
      }
    />
  
  <Modal
   transparent={true}
   visible={isModalVisible}>
   <View
  style={styles.modalContainer}>
 <View 
 style={styles.modalContentContainer}>
 <View style={styles.modalCloseBtn}>
 <TouchableOpacity
onPress={async()=>{
  
 await setTimeout(toggleTheModal,50)
  if(!isRegistrationFailed){
    
setTimeout(goBack(),0)
  }
}}


 
>
  <Ionicons 
  name="close-circle-outline"
  size={50}
  color="black"/>
  </TouchableOpacity>
  </View>
  
 
    {isRegistrationFailed?
      
<Ionicons
  name="close-circle-outline"
  size={100}
  color="red"/> :
  
 
<Feather 
  name="check-circle"
  size={100}
  color="green"/>
    }

    
  
  
  
  <Text>{
  
 isRegistrationFailed? "Registration failed":"Success"}</Text>
 
  </View>
  </View>
  </Modal>
  <TouchableOpacity
  onPress={
isRegistrationFailed?toggleTheModal :handleSignup}
   style={styles.signupBtn}
   >
  <Text
style={{fontSize:20,fontWeight:"bold"}}
>
   Create an account
  </Text>
  </TouchableOpacity>
 
    </View>
    
  );
}


//{=================STYLES================}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    padding:10,
    paddingBottom:20,
  },
  
  signupBtn:{
    textAlign:"center",
    backgroundColor:"#00ccff",
    borderRadius:20,
    padding:15,
    marginTop:"auto",
  },
  
  modalContainer:{
    
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
   
  },
  
  modalContentContainer:{
    width:200,
    height:200,
    borderWidth:2,
    borderRadius:20,
    paddingBottom:10,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#ffffff",
  },
  modalCloseBtn:{
   
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"flex-end",
  //  backgroundColor:"blue",
    width:190,
    justifySelf:"flex-start",
  }
  
});
