import React, { useState } from 'react'
import { TextInput   } from 'react-native-gesture-handler'
import { Button} from "react-native";
import { View } from '../components/Themed';
import firebase from '@react-native-firebase/auth'

let signUpUser  = function (email:String,password:String)
{
    try {
        if(password.length<8)
        {
            alert("Please enter atleast 8 characters")
            return;
        }
        firebase.
        
    }
    catch (error)
    {
        console.log(error)
    }
}

let loginUser = function (email: String, password: String)
{
    
}

export default function LoginScreen()
{   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    return (
        <>
            <TextInput
                placeholder="Enter your email"
                value = {email}
                // onChange={e=>setEmail(e.target.value)}
               
            />
            <TextInput
                placeholder="Enter your password"
                value={password}
               // onChange={e=>setPassword(e.target.value}
            />
            <Button
                title="Login"
                onPress={() => loginUser(email,password)}
                color="green"
                
            >
            </Button>
            <View style={{height:30}} />
            <Button
                title="Register"
                onPress={() => signUpUser(email,password)}
                color="blue"
            ></Button>
        </>
    )
}