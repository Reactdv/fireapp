import { Input } from "@rneui/themed";
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import {auth} from "./../firebase.js"
import 
{createUserWithEmailAndPassword
 
} from "firebase/auth"
import 
{signInWithEmailAndPassword} from "firebase/auth"
import firestore from '@react-native-firebase/firestore'; 

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"



import colors from "./../assets/colors.js"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



export default function LoginScreen
({navigation}) {
  
 const [isIconPressed,setIsIconPressed] = 
 useState(false)
 const [isLogin,setIsLogin] = 
  useState(false)
 const [isRegistered,setIsRegistered] = 
  useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = 
  useState("")
 

   const handleLogin =()=>{
     return (
  signInWithEmailAndPassword(auth,email,password)
   .then(()=>{
     return (
  
navigation.navigate("Home")

    
       )
   })
   .catch(()=> alert("login failed"))
       
       )
   }
   
  return (
    
<View style={styles.container}>
    
  <View style={styles.headerLogo}>  
  <Ionicons 
  name="logo-firebase"
  size={100}
  color="#e9d328"
  />
  <Text
  style={{fontSize:30,fontWeight:"bold"}}
>firebase todo app</Text>
  </View>  
    
 <TextInput
autoFocus={true}
value={email}
 onChangeText={text => setEmail(text)}
 
  placeholder="Email"
   style={[styles.input,{outline:"none"}]}/>

 <TextInput
 value={password}
onChangeText={text => setPassword(text)}
  placeholder="Password"
   style={[styles.input,{outline:"none"}]}
   secureTextEntry=
   {isIconPressed?false:true}
  
   />
  
  <TouchableOpacity
   onPress={()=> {
     return (
   
  setIsIconPressed(prevState => !prevState)
     
     )}}
   style={styles.passIcons}> 
  
  <Ionicons
 name=
{isIconPressed?"eye-off-sharp":"eye-sharp"}
   size={40}/>
  </TouchableOpacity> 
<TouchableOpacity
onPress={handleLogin}
 style={styles.loginBtn}>
 <Text
  style={{
    fontSize:20,
    fontWeight:"bold",
  }}>Login</Text>
  
</TouchableOpacity>
<TouchableOpacity
 onPress=
{()=> navigation.navigate("Registration")}

 style={styles.registerBtn}>
  <Text
   style={{
     fontSize:15,
     color:"#00ccff",
   }}>Register</Text>
 </TouchableOpacity>
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const styles = StyleSheet.create({
  container: {
    flex: 1,
 //   backgroundColor:"green",
    padding:10,
    gap:10,
    
  },
  input:{
    borderWidth:2,
    padding:5,
    paddingLeft:10,
    fontSize:30,
    borderRadius:20,
    
  },
  
  loginBtn:{
    backgroundColor:"#00ccff",
    padding:15,
    marginTop:30,
    textAlign:"center",
    borderRadius:20,
  },
  registerBtn:{
    
    textAlign:"center",
    padding:15,
    
    
  },
  passIcons:{
    position:"absolute",
    right:15,
    top:190,
  },
  headerLogo:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    
  }
});
