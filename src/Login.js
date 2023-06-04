import { View, Text ,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import {useNavigation} from "@react-navigation/native"
import {firebase} from "../config"

const Login = () => {

    const navigation=useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const loginUser=async(email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)

        }catch(error){
            alert(error.message)
        }
    }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:26}}>
        Login
        </Text>
        <View style={{marginTop:40}}>
         <TextInput
         style={styles.textInput}
         placeholder="Enter email"
         onChangeText={(email)=>setEmail(email)}
            />
            <TextInput
         style={styles.textInput}
         placeholder="Enter password"
         onChangeText={(password)=>setPassword(password)}
         secureTextEntry={true}
            />
       
        </View>
        <TouchableOpacity 
        onPress={()=>loginUser(email,password)}
        style={styles.button}
        >
        <Text style={{fontSize:20,fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Registration")}
        style={{marginTop:20}}
        >
        <Text style={{fontSize:15,fontWeight:"bold"}}>
            Don't have an account? Register
        </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:"center",
     justifyContent:"center"
    },
    textInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:"#000",
        marginBottom:10,
        textAlign:"center"
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:"#026efd",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50
    }
})